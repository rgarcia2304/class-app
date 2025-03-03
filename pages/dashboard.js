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
          <Headeraboutcont>Write a query</Headeraboutcont>
          <Headersmall> In order to get the best recommendation possible, 
            we suggest writing something specific like,
           Whats the best grill.
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
        <Headeraboutcont> We Search </Headeraboutcont>
        <Headersmall> We listen in on 
          many different discussions people are having about the product you're looking for
      
        </Headersmall>
        </Right_side_div>

        </Container2>

        <Container2>
        
        <Right_side_div>
          <Headeraboutcont>We Filter </Headeraboutcont>
          <Headersmall> We have a discussion evaluating what people have said.
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
        <Headeraboutcont> We Present </Headeraboutcont>
        <Headersmall> After a long discussion, we give you our best recommendation based on what people said.
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