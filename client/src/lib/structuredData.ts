// Structured Data utilities for SEO

export interface ServiceStructuredData {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string;
  serviceType: string;
}

export interface ArticleStructuredData {
  headline: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: {
      url: string;
    };
  };
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export interface OrganizationStructuredData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    addressLocality: string;
    addressCountry: string;
  };
  contactPoint: {
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

export function generateServiceStructuredData(data: ServiceStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": data.provider.name,
      "url": data.provider.url
    },
    "areaServed": {
      "@type": "Country",
      "name": data.areaServed
    },
    "serviceType": data.serviceType
  };
}

export function generateArticleStructuredData(data: ArticleStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.headline,
    "description": data.description,
    "author": {
      "@type": "Person",
      "name": data.author.name,
      ...(data.author.url && { "url": data.author.url })
    },
    "publisher": {
      "@type": "Organization",
      "name": data.publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": data.publisher.logo.url
      }
    },
    "datePublished": data.datePublished,
    ...(data.dateModified && { "dateModified": data.dateModified }),
    ...(data.image && { "image": data.image }),
    "url": data.url
  };
}

export function generateOrganizationStructuredData(data: OrganizationStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
    "logo": data.logo,
    "description": data.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.address.addressLocality,
      "addressCountry": data.address.addressCountry
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": data.contactPoint.contactType,
      "email": data.contactPoint.email
    },
    "sameAs": data.sameAs
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
} 