import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

type Environment = "production" | "development" | "other";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const currentEnv = process.env.NODE_ENV as Environment;

  // http://paperware.kr 를 https://paperware.kr로 리다이렉트 시 사용
  if (
    currentEnv === "production" &&
    req.headers.get("x-forwarded-proto") !== "https"
  ) {
    return NextResponse.redirect(
      `https://paperware.kr${req.nextUrl.pathname}`,
      301
    );
  }
  return NextResponse.next();
}
