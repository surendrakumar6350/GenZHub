import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MountainIcon from "@/app/Components/MountainIcon";
import { GoogleLogin } from "@react-oauth/google";
import { googlesignup } from '@/apiCalls/getStudents';


interface MountainIconProps {
  className?: string;
}
const Header: React.FC = (props: MountainIconProps) => {



const success = async(credentialResponse: any)=> {
  const data = await googlesignup(credentialResponse);
  console.log(data);
}


  return (
    <>
    <div {...props} className='h-20 w-full'>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <GoogleLogin onSuccess={success} onError={() => { console.log("Login Failed"); }}/>
          {/* <span className=" text-lg font-semibold">GenZHub</span> */}
        </div>
      </header>
      </div>
    </>
  )
}

export default Header