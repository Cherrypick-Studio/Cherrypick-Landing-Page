import { NextResponse } from 'next/server';

export function middleware(request) {
  // You can add logic here to redirect or handle default locales
  // For example, if you want to redirect `/` to `/?lang=en`
  
  const url = request.nextUrl.clone();
  const hasLangParam = url.searchParams.has('lang') || url.searchParams.has('locale');
  
  // Optionally redirect to default language
  if (url.pathname === '/' && !hasLangParam) {
    // Uncomment if you want to force a default language parameter
    // url.searchParams.set('lang', 'en');
    // return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};