import 'react';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';

function Courses() {
  return (
    <>
        <Navbar />
        <div className='px-4 mx-auto max-w-screen-2xl contianer md:px-20'>
        <Course />
        </div>
        <Footer />    

    </>
  )
}

export default Courses