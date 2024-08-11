import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MountainIcon from "@/app/Components/MountainIcon";
import { GoogleLogin } from "@react-oauth/google";

interface MountainIconProps {
  className?: string;
}
const Header: React.FC = (props: MountainIconProps) => {
  return (
    <>
    <div {...props} className='h-20 w-full'>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center" prefetch={false} />
          <span className="mr-20 text-lg font-semibold">GenZHub</span>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
       
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
             
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
             
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              
            </Link>
          </nav>
          <GoogleLogin onSuccess={(credentialResponse) => {console.log(credentialResponse);}} onError={() => { console.log("Login Failed"); }}/>
        </div>
      </header>
      </div>
    </>
  )
}

export default Header