import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return new NextResponse(
      JSON.stringify({
        message: "Welcome to our API!",
        version: "1.0",
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
