import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

//Database logic 
import { db } from "@/backend/Firebase"
import {getDocs,collection,addDoc,deleteDoc,doc} from 'firebase/firestore'
import { useStateContext } from "@/context/StateContext"
import { auth } from "@/backend/Firebase"

const wishListPage = () => {
  const router = useRouter();
  const { user } = useStateContext();

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

  //deleting entries
  const deleteItem = async (id) => {
    const itemDoc = doc(db,"wishListRef",id)
    await deleteDoc(itemDoc);
    fetchWishList();
};

 

  return (
    <div>
    {wishList.map((items) => (
        <div>
            <h1> {items.product}</h1>
            <p> Date: {items.link1}</p>
            <p> Date: {items.link2}</p>
            <button onClick = { () => deleteItem(items.id)}> Delete Movie</button>
        </div>
    ))}
</div>
  );
}

export default wishListPage;