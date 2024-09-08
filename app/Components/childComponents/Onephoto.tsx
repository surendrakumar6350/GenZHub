import { useState } from "react";
import { click } from "@/apiCalls/allApiCalls";
import LoadingBar from 'react-top-loading-bar'
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
toastConfig({ theme: "dark" });

export default function Onephoto(props: any) {
  const [loading, setLoading] = useState("");
  const [progress, setProgress] = useState(0)

  const e = props.e;
  const changeval = (pre: any)=> {
return {...pre, random: Math.random()};
  }
  const clicked = async() => {
    setProgress(50)
    setLoading("Loading");
   const result = await click(e);
   setProgress(80)
   if (result.message == "Rate limit exceeded") {
    toast("Daily limit exceeded! Don't worry, you can try again tomorrow!");
    setProgress(100)
    setLoading("");
    return;
  }
   if(!result.success) {
    setProgress(100)
    setLoading("");
    return;
   }
    if(e.imgSrc == props.curlog.imgSrc) {
      props.setlog((pre: any)=> changeval(pre));
    } else {
      props.setlog(e);
    }
    setLoading("");
    setProgress(100)
  };
  return (
    <div
      onClick={clicked}
      className="flex text-center bg-background cursor-pointer rounded-lg overflow-hidden shadow-sm"
    >
<LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {loading == "Loading" ? <img src="/loading.gif" className="m-auto justify-center w-10 h-10 rounded" /> : <img
        src={e.imgSrc == "/placeholder.svg" ? "/placeholder.svg" : `https://exam.shekhauniexam.in/${e.imgSrc}`}
        className="w-full h-full object-cover"
        alt="My Image"
        width={200}
        height={200}
      />}
      <img src="/loading.gif" className="m-auto hidden justify-center w-10 h-10 rounded" /> 
    </div>
  );
}
