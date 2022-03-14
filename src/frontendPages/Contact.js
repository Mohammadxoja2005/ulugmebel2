import React from 'react'
import {Page} from '../components/contact'
import {Header, Footer} from '../components/generalElementForMainPageAndOtherSituations';
import {Helmet} from "react-helmet-async"; 

function Contact() {
  return (
    <> 
     <Helmet> 
     <title>Контакты - Ulug Mebel</title>
     <meta name="Нашы Контакты" content="Свяжетесь с нами и мы вам ответим сию же минуту"/>
     <link rel="canonical" href="/contact"/> 
    </Helmet> 
    
    <Header/>
    <Page/>
    <Footer/>
    </>
  )
}
 
export default React.memo(Contact); 