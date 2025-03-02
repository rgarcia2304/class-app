import { useRef, useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/backend/Firebase";
import { useStateContext } from "@/context/StateContext";
import styled from "styled-components";
import BuyNewButton from "@/components/wishlist/BuyNewButton";
import BuyUsedButton from "@/components/wishlist/BuyUsedButton";
import Navbar from "@/components/wishlist/Navbar";
import Trashcan from "@/components/wishlist/Delete";
import { useRouter } from "next/router";

const Test = () => {
  const [wishList, setWishList] = useState([]);
  const fetchWishListRef = useRef(null);

  const router = useRouter()
  const { user } = useStateContext();
    useEffect(() => {
      //still thinks user is undefined 
      if(user===null){
        router.push('/')
      }else{
      }
    }, [user])

  const getWishListRef = () => {
    return collection(db, `users/${user.uid}/list-items`);
  };

    
 
  useEffect(() => {
    if (!user) return;
    const wishListRef = getWishListRef();
    fetchWishListRef.current = async () => {
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
  }, [user]);

  useEffect(() => {
    if (fetchWishListRef.current) {
      fetchWishListRef.current();
    }
  }, [user]);

  const deleteItem = async (id) => {
    if (!user) return;
    try {
      const itemDoc = doc(db, `users/${user.uid}/list-items`, id);
      await deleteDoc(itemDoc);
      if (fetchWishListRef.current) {
        fetchWishListRef.current();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
        <Navbar></Navbar>
      <Section>
        <h1>Wishlist</h1>
        <HeaderSection>
           <Product>Product</Product>
           <Product2> Purchase Links</Product2>
             </HeaderSection>
        
    
        {wishList.map((item) => (
            <Items_div key={item.id}>
            <ListContent>
            <Item>{item.product}</Item>
                <Purchase>
                <BuyNewButton href = {item.link1}>Buy New</BuyNewButton>
                <BuyUsedButton href = {item.link2}>Buy Used</BuyUsedButton>
                <Trashcan onClick={() => deleteItem(item.id)}></Trashcan>
                </Purchase>

            </ListContent>
           
          </Items_div>
        ))}


      </Section>
    </>
  );
};

const Section = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    font-family:sans-serif;
`;

const ListContent = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    font-family:sans-serif;
    width:100%;
    margin-bottom: 10px;
`;

const Item = styled.div`
    font-weight:600;
`
const HeaderSection = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    font-family:sans-serif;
    width:60%;
`;

const Product2 = styled.div`
    margin-top:20px;
    font-size: 20px;
    margin-right:120px;
    font-weight:600;
`;
const Product = styled.div`
    font-size: 20px;
    margin-top:20px;
    font-weight:600;
`
const Items_div = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
`;
const Purchase = styled.div `
    display:flex;
    justify-content: center;
`;

export default Test;
