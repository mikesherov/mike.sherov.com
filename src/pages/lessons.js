import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Lessons extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const lessons = data.allEggheadlessons.edges
      .map(({ node }) => node)
      .filter(node => node.state === "published")
      .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Lessons" />
        {lessons.map(
          ({ title, summary, published_at, http_url, alternative_id }) => {
            const date = new Date(Date.parse(published_at)).toLocaleDateString(
              "default",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            )
            return (
              <div key={alternative_id}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a
                    style={{ boxShadow: `none` }}
                    href={http_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </h3>
                <small>{date}</small>
                <p>{summary}</p>
              </div>
            )
          }
        )}
      </Layout>
    )
  }
}

export default Lessons

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allEggheadlessons(limit: 10, filter: { id: { ne: "dummy" } }) {
      edges {
        node {
          title
          alternative_id
          state
          http_url
          summary
          published_at
        }
      }
    }
  }
`
