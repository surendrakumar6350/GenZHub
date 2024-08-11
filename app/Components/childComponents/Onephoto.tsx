import Image from "next/image";
import { useState } from "react";

export default function Onephoto(props: any) {
  const e = props.e;
  const changeval = (pre: any)=> {
return {...pre, random: Math.random()};
  }
  const clicked = () => {
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
      <Image
        src={`  ${e.imgSrc == "/placeholder.svg" ? "https://gen-z-hub.vercel.app/placeholder.svg" : `https://exam.shekhauniexam.in/${e.imgSrc}`}  `}
        className="w-full h-full object-cover"
        alt="My Image"
        width={200}
        height={200}
        blurDataURL="/placeholder.svg"
        placeholder="blur"
      />
    </div>
  );
}
