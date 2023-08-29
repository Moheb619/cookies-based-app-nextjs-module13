import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return new NextResponse(
      JSON.stringify({
        Message: "Cookies set successfully",
      }),
      {
        status: 200,
        headers: { "Set-Cookie": `theme=dark;` },
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
