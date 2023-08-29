import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
export async function GET(req: NextRequest, res: NextResponse) {
  // Get the authorization header from the request
  const newHeaders = new Headers(req.headers);

  // Prefix the token with "Bearer "
  const newAuthorizationHeader = "Bearer " + newHeaders.get("authorization");

  newHeaders.set("authorization", newAuthorizationHeader);

  // Add the new authorization header to the response
  return new NextResponse(
    JSON.stringify({
      Message: "Authorization header modified successfully",
      newAuthorizationHeader: newHeaders.get("authorization"),
    }),
    {
      status: 200,
      headers: newHeaders,
    }
  );
  // return NextResponse.next({
  //   request: {
  //     // New request headers
  //     headers: newHeaders,
  //   },
  // });
}
