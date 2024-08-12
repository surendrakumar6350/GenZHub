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

const page: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [currentDialog, setDialog] = useState({});
  const [input, setinput] = useState({});
  const [user, setUser] = useState({name: "", picture: "", success: null});
  const [updateuser, setupdateuser] = useState("");

  useEffect(()=> {
    (async()=>  {
      const res = await getuser();
      if(res.success) {
        setUser(res);
      }
      })()
  },[updateuser])

  return (
    <>
    {user.picture?.length > 3 ?  <div className="h-full w-full">
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
      </div>   : <Header updateuser={setupdateuser} picture={user.picture} succ={user?.success} name={user?.name}/>}
     
      
    </>
  );
};

export default page;
