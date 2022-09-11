import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
import "./style.css"

const Home = () => {
  return (
    <>
        <main>
            <section className='C-section'>
                <div className='C-container C-grid C-grid-two-column'>
                    <div className='main-image-section'>
                        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="main sec image" className='main-img' />
                    </div>
                    <div className='main-text-sec'>
                        <p className='C-fast-para'>food love</p>
                        <h1 className='C-main-heading'>Cola Restaurant</h1>
                        <p className='C-description'>Food on the table fresh and good for helth. Your helth is our responsibility</p>
                        <div>
                            <Link to='/card' className='C-btn C-getfood'>Get Food</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default Home