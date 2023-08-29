import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cookiesValue: any = req.cookies.get("theme");
    return new NextResponse(
      JSON.stringify({
        name: cookiesValue.name,
        value: cookiesValue.value,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error,
      }),
      { status: 500 }
    );
  }
}
