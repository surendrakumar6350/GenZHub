import Image from "next/image";
import { useState } from "react";

export default function Onephoto(props: any) {
  const e = props.e;
  const clicked = () => {
    props.setlog(e);
  };
  return (
    <div
      onClick={clicked}
      className="bg-background rounded-lg overflow-hidden shadow-sm"
    >
      <Image
        src={`https://exam.shekhauniexam.in/${e.imgSrc}`}
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
