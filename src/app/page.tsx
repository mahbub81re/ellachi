"use client"
import Footer from "@/components/footer";
import Footnav from "@/components/footnav";
import Header from "@/components/header";
import HomeProducts from "@/components/homeproducts";
import SideCate from "@/components/slideCate";
import Sliderf from "@/components/slider";


export default function Home() {
 


 
  return (
   <div>
    <Header/>
   


   <Sliderf/>

   <SideCate/>
  

      


  <HomeProducts/>

    <Footer/>
    <Footnav/>
   </div>
  );
}
