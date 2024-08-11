import { connectDb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { forms } from "@/dbconnection/Schemas/forms";

export async function GET(request: Request): Promise<NextResponse> {
  const { url } = request;
  const queryParams = new URL(url).searchParams;
  const nameValue = queryParams.get("name");
  const fatherNameValue = queryParams.get("fatherName");
  const courseValue = queryParams.get("course");
  const mobile = queryParams.get("mobile");
  const address = queryParams.get("address");
  const page = queryParams.get("page");

  if (!nameValue && !fatherNameValue && !courseValue && !mobile && !address) {
    return NextResponse.json({});
  }
  try {
    await connectDb();
    let queryOR: any = [];
    let optionsADD: any = [];

    if (nameValue) {
      queryOR.push({
        studentName: {
          $regex: `.*${nameValue?.replace(/./g, "(?:$&)?")}.*`,
          $options: "i",
        },
      });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$studentName",
              regex: `.*${nameValue}.*`,
              options: "i",
            },
          },
          then: 3,
          else: 0,
        },
      });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$studentName",
              regex: `.*${nameValue?.replace(/./g, "(?:$&)?")}.*`,
              options: "i",
            },
          },
          then: 3,
          else: 0,
        },
      }); // fuzzy match
    }
    if (fatherNameValue) {
      queryOR.push({
        fatherName: { $regex: `.*${fatherNameValue}.*`, $options: "i" },
      });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$fatherName",
              regex: `.*${fatherNameValue}.*`,
              options: "i",
            },
          },
          then: 1,
          else: 0,
        },
      });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$fatherName",
              regex: `.*${fatherNameValue?.replace(/./g, "(?:$&)?")}.*`,
              options: "i",
            },
          },
          then: 1,
          else: 0,
        },
      }); // fuzzy match
    }

    if (courseValue) {
      queryOR.push({ course: { $regex: `.*${courseValue}.*`, $options: "i" } });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$course",
              regex: `.*${courseValue}.*`,
              options: "i",
            },
          },
          then: 2,
          else: 0,
        },
      });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$course",
              regex: `.*${courseValue?.replace(/./g, "(?:$&)?")}.*`,
              options: "i",
            },
          },
          then: 2,
          else: 0,
        },
      }); // fuzzy match
    }

    if (mobile) {
      queryOR.push({ mobile: { $regex: `.*${mobile}.*`, $options: "i" } });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$mobile",
              regex: `.*${mobile}.*`,
              options: "i",
            },
          },
          then: 3,
          else: 0,
        },
      });
    }

    if (address) {
      queryOR.push({ address: { $regex: `.*${address}.*`, $options: "i" } });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$address",
              regex: `.*${address}.*`,
              options: "i",
            },
          },
          then: 2,
          else: 0,
        },
      });
      optionsADD.push({
        $cond: {
          if: {
            $regexMatch: {
              input: "$address",
              regex: `.*${address?.replace(/./g, "(?:$&)?")}.*`,
              options: "i",
            },
          },
          then: 2,
          else: 0,
        },
      }); // fuzzy match
    }


    const query = {
        $or: queryOR,
      };
  
      const options = {
        score: {
          $add: optionsADD,
        },
      };

    let find = await forms.aggregate([
      { $match: query },
      { $addFields: { score: options.score } },
      { $sort: { score: -1 } },
      { $limit: 100 },
    ]);

    if(page) {
      if(page == "1") {
        find = find.slice(0, 20);
      }
      else if(page  == "2") {
        find  = find.slice(20, 40);
      }
      else if(page == "3") {
        find = find.slice(40, 60);
      }
      else if(page  == "4") {
        find = find.slice(60, 80);
      }
      else if(page == "5") {
        find = find.slice(80, 99);
      }
    } else {
      find = find.slice(0, 20);
    }

    if (find) {
      return NextResponse.json({
        success: true,
        user: find,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something wrong with your account",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "api error",
    });
  }
}
