/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            devto
            slides
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0.25),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ textAlign: "justify" }}>
        <strong>{author}</strong> is a software engineer and instructor, focused
        on frontend performance and the craft of software since 2003. Mike makes
        it easier to Get Things Done on the web. He's contributed to many
        popular open source projects including npm, webpack, jQuery, ESLint, and
        JSCS. He lives in New York with his wife and 2 children.
        {` `}
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        {` `}
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        {` `}
        <a
          href={`https://dev.to/${social.devto}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          dev.to
        </a>
        {` `}
        <a
          href={`https://slides.com/${social.slides}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides.com
        </a>
      </p>
    </div>
  )
}

export default Bio
