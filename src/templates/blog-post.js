import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostMeta from "../components/postMeta"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(0.5),
          }}
        >
          {post.frontmatter.title}
        </h1>
        <PostMeta
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
          post={post}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      ...PostMeta
      frontmatter {
        title
        description
      }
    }
  }
`
