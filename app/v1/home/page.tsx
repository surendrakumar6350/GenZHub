"use client"
import React, { useState } from "react";
import Photos from "@/app/Components/Photos";
import SearchBar from "@/app/Components/SearchBar";
import Header from "@/app/Components/Header";
import PopUp from "@/app/Components/PopUp";
import Total from "@/app/Components/Total";
import Paginate from "@/app/Components/page";
import Message from "@/app/Components/Message";


const page: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [currentDialog, setDialog] = useState({});
  const [input, setinput] = useState({});
  return (
    <>
      <div className="h-full w-full">
      
        <Header />
        <SearchBar input={input} setinput={setinput} get={data} set={setData} />
        <Photos curlog={currentDialog} setlog={setDialog} get={data} set={setData}/>
   
          <PopUp count={count} setcount={setCount} get={currentDialog}/>
          {/* <Message /> */}
          
           {/* <Total /> */}
        <Paginate length={data} input={input}  set={setData} />
      </div>
    </>
  );
};

export default page;
