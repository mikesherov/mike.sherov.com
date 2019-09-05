import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import PostMeta from "./postMeta"

export default ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <PostMeta post={node} />
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

export const query = graphql`
  fragment Posts on Query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          ...PostMeta
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
