import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const data = [
  {
    id: 1,
    text: "Canyon",
    url: "https://images.pexels.com/photos/19561297/pexels-photo-19561297.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    text: "Kyoto",
    url: "https://images.pexels.com/photos/19488566/pexels-photo-19488566/free-photo-of-kyoto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    text: "Forest",
    url: "https://images.pexels.com/photos/19237996/pexels-photo-19237996/free-photo-of-empty-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    text: "Vietnam",
    url: "https://images.pexels.com/photos/18707547/pexels-photo-18707547/free-photo-of-a-curved-road-in-the-mountains-with-a-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function Images1({ text, url }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);
  return (
    <section>
      <divider>
        <img src={url} alt={text} />
      </divider>
      <motion.header style={{ y }}>{text}</motion.header>
    </section>
  );
}



const Explanation= () => {
    return (
        <divider>
        {data.map((img) => (
          <Images1 key={img.id} text={img.text} url={img.url} />
        ))}
      </divider>
    );
  };


  
  const header = styled.h2`
    margin: 0;
    color: white;
    left: calc(50% + 130px);
    font-size: 56px;
    font-weight: 700;
    font-family: sofia-pro, sans-serif;
    font-style: normal;
    letter-spacing: -2px;
    line-height: 1.2;
    position: absolute;
  `;
  
  const Images =styled.img`
    width: 350px;
    height: 500px;
  ` 
  
  const section = styled.div` 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
    perspective: 500px;
     background: rgb(253, 29, 29);
    background: radial-gradient(
      circle,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%;
      color: white;
      font-family: sans-serif;
    text-align: center;
    scroll-snap-type: y mandatory;

  `;
  
  const divider = styled.div`
    width: 300px;
    height: 450px;
    position: relative;
    max-height: 90vh;
    margin: 20px;
    overflow: hidden;
    border-radius: 5px;
  ` 
  export default Explanation;