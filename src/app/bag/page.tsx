import BagItem from "@/components/bagItem";
import Footer from "@/components/footer";
import Footnav from "@/components/footnav";
import Header from "@/components/header";
import { Button, Card } from "flowbite-react";

export default function Beg(){
    return (
     <div>
        <Header/>
   

     <div>

     <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your Selected Products</h5>
        
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
         <BagItem/>
         <BagItem/>
         <BagItem/>
         <BagItem/>
         <BagItem/>
        </ul>
      </div>
    </Card>
     </div>


   <div className="flex flex-col w-4/5 justify-center mx-auto mt-4">

     <div className="flex flex-row  justify-between">
       <div>Total Item</div>
       <div>4</div>
     </div>

     <div className="flex flex-row justify-between">
       <div>Products Price</div>
       <div>400</div>
     </div>

     
     <div className="flex flex-row justify-between">
       <div>Delivery Charge</div>
       <div>100</div>
     </div>


     <div className="flex flex-row justify-between">
       <div className=" font-bold">Total Charge</div>
       <div className="font-bold">500</div>
     </div>
 

    <div className="flex flex-row justify-end">
        <Button color="blue" className=" m-2">Order now</Button>
    </div>

   </div>


 

    <Footer/>
    <Footnav/>
     </div>
    );
  }
  