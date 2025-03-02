import { useRef, useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/backend/Firebase";
import { useStateContext } from "@/context/StateContext";
import styled from "styled-components";
import BuyNewButton from "@/components/wishlist/BuyNewButton";
import BuyUsedButton from "@/components/wishlist/BuyUsedButton";
import Navbar from "@/components/wishlist/Navbar";

const Test = () => {
  const { user } = useStateContext();
  const [wishList, setWishList] = useState([]);
  const fetchWishListRef = useRef(null);

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
        {wishList.map((item) => (
            <Items_div key={item.id}>
            <p>{item.product}</p>
            <Purchase>
            <BuyNewButton href = {item.link1}>Buy New</BuyNewButton>
            <BuyUsedButton href = {item.link2}>Buy Used</BuyUsedButton>
            </Purchase>
            
            <button onClick={() => deleteItem(item.id)}>Delete</button>
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

const Items_div = styled.div`
    width: 50%;
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
