import React from "react";
import "./style.css";
import SkeletonCard from "./skeleton.js";
import ProductCard from "./Productcard.js"
import ThreebannerSection from "./Threebannersection.js"
import Brandsection from "./Brandsection"
import Imageslider from "./imageslider"
export default function App() {
  return (
    <div>
    <Imageslider/>
    <Brandsection/>
     <ThreebannerSection/>
   <ProductCard/>
     <SkeletonCard/> 
      <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      <SkeletonCard/>
       <ProductCard/>
      
      
    </div>
  );
}
