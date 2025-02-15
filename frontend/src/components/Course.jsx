import  'react';
import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Course() {
  const [book,setBook]= useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className='px-4 mx-auto max-w-screen-2xl contianer md:px-20'>
           <div className='items-center justify-center text-center mt-28'>
              <h1 className='text-2xl font-semibold md:text-4xl'>
                We are delighted to have you {""} 
                <span className='text-pink-500'>Her! :)</span>
                </h1>
                <p className='mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.       
                </p>
                <Link to= {'/'}>
                <button className='px-4 py-2 mt-6 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700'>
                    Back
                </button>
                </Link>
             </div>
             <div className='grid grid-cols-1 mt-12 md:grid-cols-4'>
                        {book.map((item)=>(
                            <Cards key={item.id} item={item} />
                        ))}
                </div> 
        </div>
    </>
  )
}

export default Course