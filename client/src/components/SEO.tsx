import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/assets/innofy-logo.svg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'InnofyAI',
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = `${title} | InnofyAI - Leading AI Solutions in Lagos, Nigeria`;
  const fullUrl = url ? `https://innofyai.com${url}` : 'https://innofyai.com';
  const fullImage = image.startsWith('http') ? image : `https://innofyai.com${image}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InnofyAI",
    "url": "https://innofyai.com",
    "logo": "https://innofyai.com/assets/innofy-logo.svg",
    "description": "Leading AI solutions provider in Lagos, Nigeria. Specializing in generative AI, automation, cybersecurity, and digital transformation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-XXX-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": ["English", "Yoruba", "Hausa", "Igbo"]
    },
    "sameAs": [
      "https://linkedin.com/company/innofyai",
      "https://twitter.com/innofyai",
      "https://facebook.com/innofyai"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="InnofyAI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@innofyai" />
      <meta name="twitter:creator" content="@innofyai" />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Additional Structured Data for WebPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": fullUrl,
          "publisher": {
            "@type": "Organization",
            "name": "InnofyAI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://innofyai.com/assets/innofy-logo.svg"
            }
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "InnofyAI",
            "description": "Leading AI solutions provider in Lagos, Nigeria",
            "url": "https://innofyai.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "Nigeria"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-XXX-XXX-XXXX",
              "contactType": "customer service"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
