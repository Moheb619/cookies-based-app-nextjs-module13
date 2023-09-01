import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/redirecthomepage")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/api/authorizationheader")) {
    const newHeaders = new Headers(req.headers);
    const newAuthorizationHeader = "Bearer " + newHeaders.get("authorization");
    newHeaders.set("authorization", newAuthorizationHeader);
    return NextResponse.next({
      request: {
        headers: newHeaders,
      },
    });
  }
}
export const config = {
  matcher: ["/redirecthomepage", "/api/authorizationheader"],
};
