"use client"
import Onephoto from "./childComponents/Onephoto";

export default function Photos(props: any) {
  const { curlog, get, setlog} = props;


  return (
    <div className={props.className}>
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <div className="mx-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {get?.map((e: any) => {
            return (
              <Onephoto curlog={curlog} e={e} setlog={setlog} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
