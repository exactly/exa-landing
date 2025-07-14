import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/store",
};

export default function middleware({ headers, nextUrl }: NextRequest) {
  if (nextUrl.pathname !== "/store") return NextResponse.next();

  const userAgent = headers.get("user-agent") ?? "";
  const url = nextUrl.clone();
  url.protocol = "https:";
  url.port = "";
  if (/android/i.test(userAgent)) {
    url.hostname = "play.google.com";
    url.pathname = "/store/apps/details";
    url.searchParams.set("id", "app.exactly");
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    url.hostname = "apps.apple.com";
    url.pathname = "/app/exa-app/id6572315454";
  } else {
    url.hostname = "web.exactly.app";
    url.pathname = "/";
  }
  return NextResponse.redirect(url);
}
