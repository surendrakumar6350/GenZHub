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
        </div>
      </div>
      {get?.length < 2  && get[0]?.loading == true && <div className="w-[100%] m-auto flex justify-center items-center"> <img src="/loading.gif" className="my-20 justify-center w-20 h-20 rounded" /> </div>}
    </div>
  );
}
