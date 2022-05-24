export default {
  github: 'https://github.com/Kiotlin/workshop.guide',
  docsRepositoryBase: 'https://github.com/Kiotlin/workshop.guide/blob/main',
  titleSuffix: ' — ri1ken',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Workshop.guide
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
      A tookit handbook. 🔨
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en, zh" />
      <meta name="description" content="Workshop.guide: A tookit handbook." />
      <meta name="og:description" content="Workshop.guide: A tookit handbook." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://workshop-guide.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="workshop-guide.vercel.app" />
      <meta name="twitter:url" content="https://workshop-guide.vercel.app/" />
      <meta name="og:title" content="Workshop.guide: A tookit handbook." />
      <meta name="og:image" content="https://workshop-guide.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Workshop.guide" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Workshop.guide.</>
}
