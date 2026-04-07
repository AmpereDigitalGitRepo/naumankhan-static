export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nauman Khan',
  url: 'https://nauman-khan.com',
  sameAs: [
    'https://www.linkedin.com/in/naumankhan/',
    'https://twitter.com/naumankhan',
  ],
  jobTitle: 'Founder, Operator, Venture Partner',
  worksFor: {
    '@type': 'Organization',
    name: 'Ampere Digital',
  },
}

export const webPageSchema = (page: { title: string; description: string; url: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: page.title,
  description: page.description,
  url: `https://nauman-khan.com${page.url}`,
  author: {
    '@type': 'Person',
    name: 'Nauman Khan',
  },
})

export const articleSchema = (article: {
  headline: string
  datePublished: string
  dateModified: string
  authorName: string
  publisherName: string
  publisherLogo: string
  image: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.authorName,
  },
  publisher: {
    '@type': 'Organization',
    name: article.publisherName,
    logo: {
      '@type': 'ImageObject',
      url: article.publisherLogo,
    },
  },
  image: article.image,
})

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://nauman-khan.com${item.item}`,
  })),
})
