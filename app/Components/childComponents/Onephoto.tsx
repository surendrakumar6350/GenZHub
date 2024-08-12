import Image from "next/image";
import { useState } from "react";
import { click } from "@/apiCalls/getStudents";

export default function Onephoto(props: any) {
  const e = props.e;
  const changeval = (pre: any)=> {
return {...pre, random: Math.random()};
  }
  const clicked = async() => {
   const result = await click(e);
   if(!result.success) {
    return;
   }
    if(e.imgSrc == props.curlog.imgSrc) {
      props.setlog((pre: any)=> changeval(pre));
    } else {
      props.setlog(e);
    }
  };
  return (
    <div
      onClick={clicked}
      className=" bg-background cursor-pointer rounded-lg overflow-hidden shadow-sm"
    >
      <img
        src={e.imgSrc == "/placeholder.svg" ? "/placeholder.svg" : `https://exam.shekhauniexam.in/${e.imgSrc}`}
        className="w-full h-full object-cover"
        alt="My Image"
        width={200}
        height={200}
      />
    </div>
  );
}
