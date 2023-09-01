import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const homeUrl = new URL("/", req.url);
    const homeUrlString = homeUrl.toString();
    return NextResponse.redirect(homeUrlString);
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
