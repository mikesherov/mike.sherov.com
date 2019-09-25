import React from "react"
import { graphql } from "gatsby"

export default ({ post, style }) => {
  return (
    <small style={style}>
      <span style={{ marginRight: "15px" }}>
        <span role="img" aria-label="date">
          📅
        </span>
        {post.frontmatter.date}
      </span>
      <span>
        <span role="img" aria-label="duration">
          🕒
        </span>
        {post.fields.readingTime.text}
      </span>
    </small>
  )
}

export const query = graphql`
  fragment PostMeta on MarkdownRemark {
    fields {
      readingTime {
        text
      }
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
