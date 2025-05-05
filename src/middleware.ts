import { NextRequest, NextResponse } from 'next/server';

// List of supported locales
const locales = ['en', 'lv'];
const defaultLocale = 'lv';

// Get the preferred locale from request headers
function getLocale(request: NextRequest) {
  // Check if there is a cookie with a locale preference
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check for Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',').map(locale => {
      const [lang, q = '1'] = locale.split(';q=');
      return { lang: lang.trim(), q: parseFloat(q) };
    }).sort((a, b) => b.q - a.q);

    for (const { lang } of parsedLocales) {
      const locale = locales.find(l => lang.startsWith(l) || lang.startsWith(l.split('-')[0]));
      if (locale) return locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  // Redirect if no locale in pathname
  if (pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  // For all other paths, add the default locale
  if (!pathname.startsWith('/_next') && 
      !pathname.startsWith('/api') && 
      !pathname.startsWith('/images') &&
      !pathname.includes('.')) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
