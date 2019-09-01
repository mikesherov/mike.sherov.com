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
          ({ title, summary, duration, tags, http_url, alternative_id }) => {
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
                <small style={{ marginRight: "15px" }}>
                  <span role="img" aria-label="duration">
                    🕒
                  </span>
                  {new Date(1000 * duration).toISOString().substr(14, 5)}{" "}
                </small>
                <small>
                  <span role="img" aria-label="tags">
                    🏷️
                  </span>
                  {tags.map(({ label }) => label).join(", ")}
                </small>
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
          duration
          tags {
            label
          }
        }
      }
    }
  }
`
