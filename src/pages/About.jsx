import React from 'react'
import Hero from "../components/home/Hero";
import InfoRow from '../components/home/InfoRow/InfoRow';
import { OurStoryRowData } from '../data/homePageData';
import FaqsRow from '../components/home/faqsRow/FaqsRow';
import ContactInfo from '../components/contact/contactInfo/ContactInfo';


function About() {
  return (
    <>
    <Hero
        src="/images/09.jpg"
        title="Our Story"
        desc="The four main coffee types are Arabica, Robusta, Excelsa, and Liberica and all four of them have radically different taste profiles."    
    />
    <InfoRow
    src={OurStoryRowData.src}
    title={OurStoryRowData.title}
    desc={OurStoryRowData.desc}
    />
    <FaqsRow/>
    <ContactInfo/>
    </>
  )
}

export default About