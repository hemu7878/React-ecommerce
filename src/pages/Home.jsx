import React from 'react'
import Hero from "../components/home/Hero";
import InfoRow from "../components/home/InfoRow/InfoRow";
import { homeAboutUsRowData, } from '../data/homePageData';
import FiguresRow from '../components/home/figuresRow/FiguresRow';
import ProductsRow from '../components/home/ProductsRow';
import PricingCard from '../components/home/pricingRow/PricingRow';


function Home(props) {
  return (
    <>
    <Hero
    src="/images/Cafe-Bliss.jpg"
    title="Wel Come The Bean Bliss Cafe"
    desc="The four main coffee types are Arabica, Robusta, Excelsa, and Liberica and all four of them have radically different taste profiles."
    />
    <InfoRow
    src={homeAboutUsRowData.src}
    title={homeAboutUsRowData.title}
    desc={homeAboutUsRowData.desc}
    />
    <FiguresRow/>
    <ProductsRow/>
    <PricingCard/>

    </>
  )
}

export default Home