import React from "react"

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
