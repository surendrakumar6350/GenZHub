import { connectDb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";

export async function POST(req) {
  const usercookie = await req?.cookies?.get("user");
  const userid = usercookie?.value;
  if (!userid) {
    return NextResponse.json({
      success: false,
      message: "login first",
    });
  }
  try {
    await connectDb();
    const res = await signup.findOne({ _id: userid });
    if (!res) {
      return NextResponse.json({ sucess: false });
    } else {
      return NextResponse.json({ name: res.name, picture: res.picture });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
