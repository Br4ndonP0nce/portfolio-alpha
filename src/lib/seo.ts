// Create a new file: src/lib/seo.ts
export const defaultMetadata = {
  title: "Decode Next | Software development and Consulting",
  description: "Engineering, Fullstack Developer,web/app development, and software consultancy",
  keywords: [
    "developer",
    "web3",
    "web2",
    "consultant",
    "fullstack",
    "next.js",
    "blockchain",
  ],  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://decodenext.dev',
    siteName: 'Decode Next ',
    images: [
      {
        url: '/images/og-image.png',
        width: 1000,
        height: 525,
        alt: 'Decode Next | Development and Consulting',
      },
    ],
  },

}

// Function to generate page-specific metadata
export function generateMetadata(pageTitle: string, pageDescription?: string) {
  return {
    ...defaultMetadata,
    title: `${pageTitle} | Decode Next `,
    description: pageDescription || defaultMetadata.description,
  }
}

