"use client"
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { googlesignup } from "@/apiCalls/allApiCalls";
import toast, { toastConfig } from "react-simple-toasts";
import { addduserdetails } from "@/app/redux/Slice";
import { useDispatch, useSelector } from 'react-redux'
import "react-simple-toasts/dist/theme/dark.css";
toastConfig({ theme: "dark" });
interface MountainIconProps {
  className?: string;
}
const Header = (props: any) => {
  const dispatch = useDispatch();
  const { uupdateuser, arrow, name, picture, succ } = props;

  const success = async (credentialResponse: any) => {
    const data = await googlesignup(credentialResponse);
    if (data.success) {
      toast("Login successful 🎉");
      dispatch(addduserdetails((Math.random())));
    } else {
      toast("Error 😪😯");
    }
  };

  return (
    <>
      <div {...props} className="h-20 w-full">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
          <div className="container flex items-center justify-between h-16 px-4 md:px-6">
            {picture != "Loading" ? (
              <>
                {picture?.length > 5 ? (
                  <img
                    className="w-10 h-10 rounded"
                    src={picture}
                    alt="Default avatar"
                  ></img>
                ) : (
                  <>
                    <GoogleLogin
                      onSuccess={success}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                    <img
                      src="/arrow.gif"
                      className={`relative ${arrow} right-[15px] sm:right-[150px] lg:right-[300px] xl:right-[400px] w-16 h-16 rounded`}
                    />
                  </>
                )}
              </>
            ) : (
              <img src="/loading.gif" className="w-6 h-6 rounded" />
            )}

            <img
              src="/logoo.png"
              className="h-14 w-22 lg:h-20 lg:w-32 text-lg font-semibold"
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
