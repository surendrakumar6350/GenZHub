"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { googlesignup, logOut } from "@/apiCalls/allApiCalls";
import toast, { toastConfig } from "react-simple-toasts";
import { GoogleLogin } from "@react-oauth/google";
import { addduserdetails } from "@/app/redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "react-simple-toasts/dist/theme/dark.css";
import LoadingBar from "react-top-loading-bar";
toastConfig({ theme: "dark" });

const HeaderNew = (props: any) => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const {picture} = props;

  const success = async (credentialResponse: any) => {
    const data = await googlesignup(credentialResponse);
    if (data.success) {
      toast("Login successful 🎉");
      dispatch(addduserdetails(Math.random()));
    } else {
      toast("Error 😪😯");
    }
  };

  const handlelogOut = async()=> {
    const ans = await logOut();
    if(ans?.success) {
      window.location.reload();
    }
  }

  return (
    <>
     <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav className="flex h-[57px] items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <Link href="#" className="flex items-center space-x-2">
            {picture != "Loading" ? (
              <>
                {picture?.length > 5 ? (
                  <img
                    src={picture}
                    alt="GenZHub Logo"
                    className="w-8 h-8 mr-5"
                  />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
            <span className="text-xl font-bold text-gray-900">GenZHub</span>
          </Link>
        </div>

        {picture != "Loading" ? (
          <>
            {picture?.length > 5 ? (
              <Button onClick={handlelogOut} size={"sm"} variant="outline">
                Log Out
              </Button>
            ) : (
              <>
                <div className="flex items-center">
                  <GoogleLogin
                    size="medium"
                    text="signin"
                    onSuccess={success}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </>
            )}
          </>
        ) : (
          <img src="/loading.gif" className="w-6 h-6 rounded" />
        )}
      </nav>
    </>
  );
};

export default HeaderNew;
