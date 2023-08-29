import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const homeUrl = new URL("/", req.url);
  return NextResponse.redirect(homeUrl);
}
export const config = {
  matcher: "/redirecthomepage",
};
