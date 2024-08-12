import { connectDb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";
import { jwtDecode } from "jwt-decode";

export async function POST(request: Request): Promise<NextResponse> {
  let data = await request.json();

  if (!data || !data?.credential) {
    return NextResponse.json({
      sucess: false,
      message: "Bad Request",
    });
  }
  const decoded = jwtDecode(data.credential);
  data = decoded;

  try {
    connectDb();
    const find = await signup.findOne({ email: data.email });
    if (find?._id) {
      const response = NextResponse.json({ sucess: true });
      response.cookies.set("user", find._id, {
        expires: new Date(Date.now() * 160),
        path: "/",
      });
      return response;
    } else {
      const res = new signup(data);
      const saveduser = await res.save();

      const response = NextResponse.json({ success: true });
      response.cookies.set("user", saveduser._id, {
        expires: new Date(Date.now() * 160),
        path: "/",
      });
      return response;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
