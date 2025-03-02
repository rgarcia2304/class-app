import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import NewButton from "@/components/resultPage/NewButton";
import UsedButton from "@/components/resultPage/UsedButton";
import Navbar from "@/components/wishlist/Navbar";

//Database logic 
import { db } from "@/backend/Firebase"
import {getDocs,collection,addDoc,deleteDoc,doc} from 'firebase/firestore'
import { useStateContext } from "@/context/StateContext"
import { auth } from "@/backend/Firebase"

const ResultsPage = () => {
  const router = useRouter();
  const { data } = router.query;
  const [recommendation, setRecommendation] = useState(null);
  const { user } = useStateContext();
    useEffect(() => {
      //still thinks user is undefined 
      if(user===null){
        router.push('/')
      }else{
      }
    }, [user])

  //All the dataBase information 
  const [wishList, setWishList] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [newBuyNewLink, setNewBuyNewLink] = useState("");
  const [newBuyUsedLink, setNewBuyUsedLink] = useState("");


  //All the databaseCode
  // Helper function to return the Firestore collection reference for the current user.
  const getWishListRef = () => {
    if (!user) return null;
    return collection(db, `users/${user.uid}/list-items`);
  };

  // Use an effect that depends on the user to fetch the wishlist.
  useEffect(() => {
    if (!user) return;
    const wishListRef = getWishListRef();
    const fetchWishList = async () => {
      try {
        const data = await getDocs(wishListRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setWishList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWishList();
  }, [user]);

  // Function to handle submitting a new wishlist item.
  const onSubmitWishlist = async () => {
    if (!user) return;
    const wishListRef = getWishListRef();
    try {
      await addDoc(wishListRef, {
        product: newProduct,
        link1: newBuyNewLink,
        link2: newBuyUsedLink,
        userId: user.uid,
      });
      // Optionally, re-fetch the wishlist after adding a new item.
      const data = await getDocs(wishListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setWishList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setRecommendation(parsedData);
      } catch (error) {
        console.error("Error parsing data:", error);
        router.push("/");
      }
    }
  }, [data, router]);

  useEffect(() => {
      if(!recommendation) return;
      try {
        setNewBuyNewLink(recommendation.link_new);
        setNewBuyUsedLink(recommendation.link_used);
        setNewProduct(recommendation.product);
      } catch (error) {
        console.error(error);
  
      }
    }
  , [recommendation]);

  if (!recommendation) {
    return <ProductTitle>loading....</ProductTitle>;
  }

  return (
    <>
     <Navbar></Navbar>
     <ResultsContainer>
      <ResultCard>
        <ProductTitle>Recommended Product: {recommendation.product}</ProductTitle>
        <ProductReason>{recommendation.reason}</ProductReason>
        <NewButton href={recommendation.link_new}>Buy New</NewButton>
        <UsedButton href={recommendation.link_used}>Buy Used</UsedButton>
        <button onClick={onSubmitWishlist}>Add item to wishlistt</button>

      </ResultCard>
    </ResultsContainer>
    
    
    </>
   
  );
};

const ResultsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ResultCard = styled.div`
  margin-bottom: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
`;

const ProductTitle = styled.h2`
  margin-bottom: 10px;
`;

const ProductReason = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;


export default ResultsPage;
