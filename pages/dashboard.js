import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '@/components/dashboard/Dashboard/Navbar'
import Hero from '@/components/dashboard/Dashboard/Hero'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'


const Dashboard = () => {
  const { user } = useStateContext()  
  const router = useRouter()

  useEffect(() => {
    //still thinks user is undefined 
    if(user===null){
      router.push('/')
    }else{
    }
  }, [user])

  return (
    <>
        <Navbar></Navbar>;
        <Hero> </Hero>;
        <Header1> How it works</Header1>

        <Container2>
        
        <Right_side_div>
          <Headeraboutcont>Type what item you are looking for </Headeraboutcont>
          <Headersmall> In order to find a proper recommendation type, what you are looking for in a sentence
            For example a good quality grill.
          </Headersmall>
        </Right_side_div>
        <Headerabout>
        <Image src = "/images/comp2.gif"/>

        </Headerabout>

        </Container2>

        <Container2>
        <Headerabout>
          <Image src = "/images/searching.jpg"/>
          </Headerabout>

        <Right_side_div>
        <Headeraboutcont> Searching </Headeraboutcont>
        <Headersmall> We search across many different discussions seeing, what people are saying
          about the item you are looking for 
        </Headersmall>
        </Right_side_div>

        </Container2>

        <Container2>
        
        <Right_side_div>
          <Headeraboutcont>Filter </Headeraboutcont>
          <Headersmall> We go through what people are saying, taking note of what products people say are the best
          </Headersmall>
        </Right_side_div>
        <Headerabout>
        <Image src = "/images/filter.png"/>

        </Headerabout>

        </Container2>
        
        <Container2>
        <Headerabout>
          <Image src = "/images/giftingg.png"/>
          </Headerabout>

        <Right_side_div>
        <Headeraboutcont> To you </Headeraboutcont>
        <Headersmall> We present you with a pretty good recommendation based on what people are saying
        </Headersmall>
        </Right_side_div>

        </Container2>

    </>
  )
}


const Container2 = styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:20%;
    margin-right:20%;
`;
const Header1 = styled.div`
    font-family: sans-serif;
    color: #008000;
    font-size: 100px;
    font-weight:600;
    display:flex;
    justify-content:center;
    `
    ;


const Headerabout = styled.h1`
    font-family: sans-serif;
    display: flex;
    font-size: 50px;
    text-align:center;
    margin-top:150px;
    flex-direction: row;
  

`;

const Right_side_div = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width:50%;
    text-align:center;
    font-family:sans-serif;
    
`;
const Headersmall = styled.p`
    font-size: 20px;
`;
const Headeraboutcont = styled.div`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-top:150px;
    margin-bottom: 20px;
    margin-left: 100px;
    margin-right:20%;
    font-weight:600;
    color: #006400;

`;

const Image = styled.img`
  margin-top: 10px;
  width: 250px;
  height:200px;
  border-radius: 10px; /* Optional for styling */
  margin-bottom: 30px;
`;


export default Dashboard