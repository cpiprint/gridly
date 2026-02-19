import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = ["/dashboard", "/settings", "/ai"] as const;

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session && isProtectedPath(pathname)) {
    const signInUrl = new URL("/sign-in", request.url);
    const callbackURL = `${pathname}${search}`;
    signInUrl.searchParams.set("callbackURL", callbackURL);
    return NextResponse.redirect(signInUrl);
  }

  if (session && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*", "/ai/:path*", "/sign-in"],
};
