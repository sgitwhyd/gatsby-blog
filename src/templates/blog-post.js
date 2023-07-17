import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogViewTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="">
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const post = data.markdownRemark
  return <Seo title={post.frontmatter.title} />
}

export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogViewTemplate
