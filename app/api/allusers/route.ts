import { connectDb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";
import { click } from "@/dbconnection/Schemas/click";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    connectDb();
    const find = await signup.find();
    const res = await click.find();

    if (find.length >= 1) {
      const result = await Promise.all(
        find.map(async (e) => {
          let count = 0;
          await Promise.all(
            res.map(async (element) => {
              if (element.user._id.equals(e._id)) {
                if (element.search?.imgSrc?.length > 4) {
                  count++;
                }
              }
            })
          );
          return { _id: e._id, name: e.name, picture: e.picture, count: count };
        })
      );
      const response = NextResponse.json({ success: true, find: result });
      return response;
    } else {
      const response = NextResponse.json({
        success: false,
        message: "No User Found",
      });
      return response;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
