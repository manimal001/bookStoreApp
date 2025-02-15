import  "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from 'react';
import Cards from "./Cards";

function Freebook() {
  const [book,setBook]= useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data)=> data.category === "free");
        setBook(data);
        console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  }, []);

   
   
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  return (
    <>
    <div className="container py-10 mx-auto max-w-screen-2xl md:px-4 ">
        <h1 className="pb-2 text-xl font-semibold">
            Free Course Offered
        </h1>
       <div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
       <div className="container py-10 mx-auto max-w-screen-2xl md:px-4">
        <Slider {...settings}>
            {book.map((item)=>(
              <Cards item= {item} key= {item.id} />
            ))}
        </Slider>
        </div> 
      </div>
    </div> 
    </>
  )
}

export default Freebook
