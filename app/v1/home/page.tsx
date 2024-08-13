"use client"
import React, { useEffect, useState } from "react";
import Photos from "@/app/Components/Photos";
import SearchBar from "@/app/Components/SearchBar";
import Header from "@/app/Components/Header";
import PopUp from "@/app/Components/PopUp";
import Total from "@/app/Components/Total";
import Paginate from "@/app/Components/page";
import Message from "@/app/Components/Message";
import { getuser } from "@/apiCalls/getStudents";
import LoadingBar from 'react-top-loading-bar'

const page: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [currentDialog, setDialog] = useState({});
  const [input, setinput] = useState({});
  const [user, setUser] = useState({name: "", picture: "Loading", success: null});
  const [updateuser, setupdateuser] = useState("");
  const [progress, setProgress] = useState(0)

  useEffect(()=> {
    (async()=>  {
      setProgress(10);
      const res = await getuser();
      setProgress(70);
      if(res.success) {
        setUser(res);
      }
      else {
        setUser((pre: any)=> {
         return {...pre, picture: null}
        });
      }
      setProgress(100);
      })()
  },[updateuser])

  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

    <div className="h-full w-full">
        <Header updateuser={setupdateuser} picture={user.picture} succ={user?.success} name={user?.name}/>
        <Message />
        <SearchBar user={user} input={input} setinput={setinput} get={data} set={setData} />
        <Photos
          curlog={currentDialog}
          setlog={setDialog}
          get={data}
          set={setData}
        />
        <PopUp count={count} setcount={setCount} get={currentDialog} />
        <Paginate length={data} input={input} set={setData} />
        <Total />
      </div> 
     
      
    </>
  );
};

export default page;
