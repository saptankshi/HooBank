import React from 'react'
import styles from './style'
//import  { Navbar, Hero, Clients, CTA, FeedbackCard, Footer,Testimonial, Stats, Business, Billing, Card }  from './components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Stats  from './components/Stats';
import  CTA  from './components/CTA';
import Footer from './components/Footer';
import  Testimonials  from './components/Testimonials';
import  Business  from './components/Business';
import Billing  from './components/Billing';
import CardDeal  from './components/CardDeal';
import Domains from './components/Domains';
import  Courses  from './components/Courses';

const App = () =>  (
  <div className="bg-primary w-full overflow-hidden" 
  >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        < Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
     {/* <div
     className="w-full overflow-hidden"
    style={{
      
      backdropFilter: 'blur(100px)',
      backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-hi-tech-digital-technology-and-engineering-digital-telecom-technology-concept-vector-image_435066.jpg")',
    }}
   > */}

    <div className={`${styles.boxWidth}`}>
    <Hero />
   </div>
   </div>
   <div className={`bg-primary ${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>
         {/* <Stats />

        <Business /> */}
        </div>
   </div>
   <div className={`bg-[#b1c9c2] ${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>

        <Courses/>
        </div>
   </div>

        <div className={`bg-primary ${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>

        <Billing />

        </div>
   </div>
   <div className={`bg-primary ${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>


        <Testimonials />    

        {/* <CardDeal />
        <Testimonials />    
        <Clients />
      <CTA /> */}
              </div>
   </div>

        <div className={`bg-[#14213D] ${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>


        <Footer />  
   </div>
   </div>
  </div>
);


export default App
