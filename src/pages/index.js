import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
`

const index = ({ data }) => {
  return (
    <Layout>
      <h1>Sigit's Blog</h1>
      <h5>{data.allMarkdownRemark.totalCount} Posts</h5>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} | {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default index
