import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
export async function GET(req: NextRequest) {
  try {
    const headersList = headers();
    const modifiedAuthorizationHeader = headersList.get("authorization");

    return new NextResponse(
      JSON.stringify({
        Message: "Header Modified successfully",
      }),
      {
        status: 200,
        headers: headersList,
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
