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

const App = () =>  (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        < Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
    <Hero />
   </div>
   </div>
   <div className={`bg-primary ${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>
         <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />    
        <Clients />
        <CTA />
        <Footer /> 
   </div>
   </div>
  </div>
);


export default App
