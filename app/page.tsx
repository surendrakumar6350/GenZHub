"use client"
import Image from "next/image";
import { redirect } from 'next/navigation'
import { useEffect } from "react";;

export default function Home() {


  useEffect(()=> {
    redirect('/v1/home');
  },[])


  return (
    
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center">
          <img className="h-[130px] w-30" src="/028d26275ff2b38.gif" />
        </div>
        <div className="animate-pulse text-primary-foreground">Loading...</div>
      </div>
    </div>
  );
}
