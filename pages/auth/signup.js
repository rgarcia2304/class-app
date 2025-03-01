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
      <Section>
        <Header>Signup</Header>
        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
    </>
  );
};
    
    const Section = styled.section`
      margin-top:150px;
      display: flex;
      flex-direction:column;
      align-items:center;
      font-family: sans-serif;
    `;
    
    const Header = styled.h1`
       
      font-size: 24px; /* Adjusted for better scalability */
    `;
    
    const Input = styled.input`
      font-size: 16px;
    
    `;
    
    const InputTitle = styled.label` /* Changed to label for semantics */
      font-size: 14px;
    `;
    
    const MainButton = styled.button`
      margin-top: 10px;
      background-color:#ed284c; 
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      border-radius:12px;
      font-size: 16px;
      text-decoration:none;
      font-weight: 600;
    
    `;
    
    const UserAgreementText = styled.p`
      font-size: 12px;
    `;
    
    const UserAgreementSpan = styled(Link)` 
      color: #007bff;
    
    `;
    
    
    export default Signup