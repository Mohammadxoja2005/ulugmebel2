import React from 'react' 
import {Header, Footer} from '../components/generalElementForMainPageAndOtherSituations';
import Page from '../components/about/Page';
import {Helmet} from "react-helmet-async"; 

function About() {
  return (
    <> 
    <Helmet> 
     <title>О нас - Ulug Mebel</title>
     <meta name="Информация о нас" content="ULUG' MEBEL основан в 2005 году. Наша мебель идёт в ногу со временем и сочетает в себе качество и красоту, проверенная годами и нашими довольными покупателями."/>
     <link rel="canonical" href="/about"/>
    </Helmet>
    
    <Header/>
    <Page/>
    <Footer/>
    </>
  )
} 

export default React.memo(About); 
