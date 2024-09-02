"use client"
import Onephoto from "./childComponents/Onephoto";

export default function Photos(props: any) {
  const { curlog, get, setlog} = props;

  return (
    <div className={props.className}>
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <div className="mx-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {get?.length > 1  && get?.map((e: any) => {
            return (
              <Onephoto key={e.imgSrc} curlog={curlog} e={e} setlog={setlog} />
            );
          })}
          {get?.length > 1  && get[0]?.loading == true && <div className="w-full flex justify-center items-center"> <img src="/loading.gif" className="my-10 ml-[46vw] sm:ml-[55vw] md:ml-[70vw] lg:ml-[55vw] justify-center w-20 h-20 rounded" /> </div>}
        </div>
      </div>
    </div>
  );
}
