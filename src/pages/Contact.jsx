import React from 'react'
import Hero from '../components/home/Hero'
import ContactInfo from "../components/contact/contactInfo/ContactInfo";

function Contact() {
  return (
    <>
    <Hero
        src="/images/11.jpg"
        title="Contact"
        desc="Thank you for choosing Bean Bliss Coffee Company to be your coffee companion. We're here to fuel your daily rituals and help you create moments of pure coffee bliss.
        Cheers to the perfect cup!"
      />
      <ContactInfo/>
    </>
  )
}

export default Contact