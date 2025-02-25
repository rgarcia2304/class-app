import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { isEmailInUse, register,createUserWithEmailAndPassword} from '@/backend/Auth'
import Link from 'next/link'
import LandingBar from '@/components/landingpage/LandingPage/LandingBar'
import { auth } from '@/backend/Firebase'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const router = useRouter()

    const onSubmit = async (e) => {
      e.preventDefault()

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            router.push('/dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });


    }
    // async function handleSignup(){
    //     //const isValidEmail = await validateEmail()
    //     // console.log('isValidEmail', isValidEmail)
    //     // if(!isValidEmail){ return; }
        
    //     try{
    //         await register(email, password, setUser)
    //         router.push('/dashboard')
    //     }catch(err){
    //         console.log('Error Signing Up', err)
    //     }
    //   }

    return (
        <>
        <LandingBar></LandingBar>
        <Section>
            <Header>Signup</Header>
            <InputTitle>Email</InputTitle>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <InputTitle>Password</InputTitle>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <MainButton onClick={onSubmit}>Submit</MainButton>
            <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>
    
        </Section>
        </>
      )
    }
    
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