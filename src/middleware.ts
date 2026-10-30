import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isTemporaryVercelDomain(host: string): boolean {
  return host.endsWith(".vercel.app");
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (isTemporaryVercelDomain(request.nextUrl.hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
