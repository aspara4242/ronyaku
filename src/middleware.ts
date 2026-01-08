import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/azancia2022/special1") {
    return NextResponse.redirect(
      new URL("/articles/azancia-interview-part1", request.url),
    );
  }
  if (pathname === "/azancia2022/special2") {
    return NextResponse.redirect(
      new URL("/articles/azancia-interview-part2", request.url),
    );
  }

  if (pathname === "/senbi-ganbarou2023") {
    return NextResponse.redirect(
      new URL("/articles/senbi-ganbarou2023", request.url),
    );
  }

  if (pathname === "/kippo2023-interview") {
    return NextResponse.redirect(
      new URL("/articles/kippo-vol1-interview", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
