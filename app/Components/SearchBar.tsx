"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MountainIconProps } from "./MountainIcon";
import { getStudents } from "@/apiCalls/getStudents";
import { useState } from "react";
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';
toastConfig({ theme: 'dark' });
export default function SearchBar(props: any) {
  const { input, setinput, user } = props;
  const [loading, setLoading] = useState(false);
  const clicked = async () => {
    if(user.picture < 5) {
      toast("Whoops! Looks like you need to log in");
      return;
    }
    setLoading(true);
    const res = await getStudents(input, null);
    props.set(res?.user);
    setLoading(false);
  };
  return (
    <div className="mx-auto w-full">
      <div className="px-5 sm:px-0 flex mx-auto items-center w-full max-w-md rounded-md bg-background">
        <Input
          type="search"
          onChange={(e) => setinput({ ...input, name: e.target.value })}
          placeholder="Name"
          className="flex-1 px-4 py-2 border"
        />
        <Input
          type="search"
          onChange={(e) => setinput({ ...input, fatherName: e.target.value })}
          placeholder="Father Name"
          className="flex-1 px-4 py-2 border"
        />
        

        <Input
          type="search"
          onChange={(e) => setinput({ ...input, mobile: e.target.value })}
          placeholder="Mobile"
          className="hidden sm:block flex-1 px-4 py-2 border"
        />



      </div>

      <div className="px-5 sm:px-0 flex mx-auto items-center w-full max-w-md rounded-md bg-background">


      <Input
          type="search"
          onChange={(e) => setinput({ ...input, mobile: e.target.value })}
          placeholder="Mobile"
          className="sm:hidden block flex-1 px-4 py-2 border"
        />


      <Input
          type="search"
          onChange={(e) => setinput({ ...input, address: e.target.value })}
          placeholder="Address"
          className=" hidden sm:block flex-1 px-4 py-2 border"
        />
        


        <select
          onChange={(e) => setinput({ ...input, course: e.target.value })}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select an course</option>
          <option value="B.A LL.B">B.A LL.B</option>
          <option value="B.A. ADDITIONAL">B.A. ADDITIONAL</option>
          <option value="B.A. B.ED">B.A. B.ED</option>
          <option value="B.A.">B.A.</option>
          <option value="B.B.A.">B.B.A.</option>
          <option value="B.C.A.">B.C.A.</option>
          <option value="B.COM">B.COM</option>
          <option value="B.ED">B.ED</option>
          <option value="B.P.ED">B.P.ED</option>
          <option value="B.SC">B.SC</option>
          <option value="LL.M">LL.M</option>
          <option value="M.A.">M.A.</option>
          <option value="M.A./M.SC.">M.A./M.SC.</option>
          <option value="M.COM.">M.COM.</option>
          <option value="M.Com">M.Com</option>
          <option value="M.ED">M.ED</option>
          <option value="M.SC">M.SC</option>
          <option value="P.G.">P.G.</option>
        </select>
        
      </div>

      <div className="px-5 sm:px-0 flex mx-auto items-center w-full justify-end max-w-md rounded-md">
      <Input
          type="search"
          onChange={(e) => setinput({ ...input, address: e.target.value })}
          placeholder="Address"
          className="sm:hidden block flex-1 px-4 py-2 border"
        />
      <Button onClick={clicked} className="mx-1 w-[140px] bg-primary text-primary-foreground hover:scale-105 transition-transform">{loading ? "Loading..." : "Search"}</Button>
        </div>
    </div>
  );
}

function SearchIcon(props: MountainIconProps) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
