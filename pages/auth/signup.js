import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '@/context/StateContext';
import { createUserWithEmailAndPassword } from '@/backend/Auth';
import LandingBar from '@/components/landingpage/LandingPage/LandingBar';
import styled from 'styled-components';
import Link from 'next/link';
import { db } from "@/backend/Firebase"
import {doc,setDoc} from 'firebase/firestore'
import { auth } from "@/backend/Firebase"


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser,user } = useStateContext();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const currentUser = userCredential.user;
      // Save user to context
      setUser(currentUser);
      //adds new user to db to reference for wishlist
      await setDoc(doc(db, "users",currentUser.uid), {
        name: "user-wishlist",
      });
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LandingBar />
      <Outline>
      <Header>Join Perreno Today</Header>
      <Section>
        <Credential>
        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Credential>
        
        <MainButton onClick={onSubmit}>Submit</MainButton>
        <UserAgreementText>
          By signing in, you automatically agree to our{' '}
          <UserAgreementSpan href="/legal/terms-of-use" rel="noopener noreferrer" target="_blank">
            Terms of Use
          </UserAgreementSpan>{' '}
          and{' '}
          <UserAgreementSpan href="/legal/privacy-policy" rel="noopener noreferrer" target="_blank">
            Privacy Policy.
          </UserAgreementSpan>
        </UserAgreementText>
      </Section>
      </Outline>
      
        
    </>
  );
};
    const Outline = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    `;
    const Section = styled.section`
     border: 3px solid #008000;
      margin-top:50px;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: space-around;
      font-family: sans-serif;
      margin-right: 40%;
      margin-left: 40%;
      border-radius:12px;
      width:500px;
      height: 350px;
  
    `;

    const Credential = styled.div`
        justify-content: center;
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;

    `;
    
    const Header = styled.h1`
      margin-top: 5%;
      font-size: 24px; /* Adjusted for better scalability */
      display:flex;
      justify-content:center;
      font-family: sans-serif;
      font-size: 50px;
      text-align: center;

    `;
    
    const Input = styled.input`
      font-size: 16px;
      margin-bottom: 5x;
      border-radius: 8px;
      height:20%;
      width:80%;
      &:focus {
      outline:none;
      border: 2px solid #008000;

      }
    
    `;
    
    const InputTitle = styled.label` 
      font-size: 14px;
      font-family: sans-serif;
      font-weight: 1000;
    `;
    
    const MainButton = styled.button`
      background-color: #008000; 
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      border-radius:12px;
      font-size: 16px;
      text-decoration:none;
      font-weight: 600;
      margin-bottom:10%
    `;
    
    const UserAgreementText = styled.p`
      font-size: 12px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    `;
    
    const UserAgreementSpan = styled(Link)` 
      color: #007bff;
      display:flex;
    
    `;
    

    export default Signup