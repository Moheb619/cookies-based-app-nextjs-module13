import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("Hit korse");
    const homeUrl = new URL("/", req.url);
    console.log(homeUrl);
    return NextResponse.redirect(homeUrl);
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
