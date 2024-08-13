"use client"
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useEffect, useRef,useState } from "react";
import React from "react";
import html2canvas from 'html2canvas';
import { redirect } from 'next/navigation'

export default function PopUp(props : any) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { get, count, setcount } = props;
  const [base64image, setBase64image] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const myElementRef = useRef(null);

  useEffect(() => {
    if (count != 0) {
      buttonRef?.current?.click();
    }
    setcount(1);
  }, [get]);





  const download = () => {
    const screenshotTarget: any = myElementRef.current;
    console.log(screenshotTarget)
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      setBase64image(base64image);
      const a = document.createElement('a');
      a.href = base64image;
      a.download = 'image.jpg';
      a.click();
    });
  };

  return (
    <div >
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden" ref={buttonRef} variant="outline"></Button>
      </DialogTrigger>

      <DialogContent ref={myElementRef} className="text-xs max-h-full sm:max-w-[400px] sm:max-h-[700px]">
        <div className="flex flex-col space-y-1.5 bg-primary text-primary-foreground p-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20">
                  <img
                    className="aspect-square h-full w-full"
                    alt="John Doe"
                    src={
                      get.imgSrc
                        ? `https://exam.shekhauniexam.in/${get.imgSrc}`
                        : "/placeholder-user.jpg"
                    }
                  />
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{get.studentName}</h3>
                  <p className="text-sm text-primary-foreground/80">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Father's Name</p>
              <p>{get.fatherName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Mother's Name</p>
              <p>{get.motherName}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Course</p>
              <p>{get.course}</p>
            </div>
            <div className="space-y-1">
              <p className="text-wrap break-words text-sm text-muted-foreground">
                College
              </p>
              <p>{get.college}</p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Address</p>
            <p>{get.address}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-wrap space-y-1">
              <p className=" text-wrap text-sm text-muted-foreground">Email</p>
              <p className="text-wrap break-words">{get.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Mobile</p>
              <p>{get.mobile}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">ABCID</p>
              <p>{get.abcId}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Aadhaar</p>
              <p>{get.aadharNo}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mt-4">
            <div className="bg-gray-200 h-10 w-40 rounded flex justify-center items-center">
              <img
                src={
                  get.imgSrc
                    ? `https://exam.shekhauniexam.in/${get.imgSrcSign}`
                    : ""
                }
                alt="Photo"
                className="h-full w-full object-cover rounded"
              />
            </div>
            <Button
              onClick={download}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
}
