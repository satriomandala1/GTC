import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const img = image || site.siteMetadata.image;
console.log("Keywords diterima di SEO:", keywords);

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:image`,
      content: `${site.siteMetadata.siteUrl}${img}`,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

if (Array.isArray(keywords) && keywords.length > 0) {
  metaTags.push({
    name: `keywords`,
    content: keywords.join(", "),
  });
} else if (typeof keywords === 'string' && keywords.length > 0) {
  metaTags.push({
    name: `keywords`,
    content: keywords,
  });
}

console.log("=== SEO DEBUG ===");
console.log("Title:", title);
console.log("Keywords:", keywords);
console.log("MetaTags:", metaTags);
console.log("SEO Keywords:", keywords)

  return (
    
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaTags.concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
