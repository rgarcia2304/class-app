
import React from "react";
import styled from "styled-components";
import LandingBar from "@/components/landingpage/LandingPage/LandingBar";
import Hero from "@/components/landingpage/LandingPage/Hero";
import Footer from "@/components/landingpage/LandingPage/Footer";


export default function Home() {
  return (
    <>
      <LandingBar></LandingBar>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}
