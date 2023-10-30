import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import SecNav from '../components/SecNav'

// Export Template for use in CMS preview
export const GroundwaterModellingTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  accordion,  
  body, 
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
      <SecNav />
        <Content source={section1} />
      </div>
    </section>  
    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const GroundwaterModelling = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <GroundwaterModellingTemplate
      {...page}
      {...page.frontmatter}
      body={page.html}
    />
  </Layout>
)

export default GroundwaterModelling

export const pageQuery = graphql`
  query GroundwaterModelling($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1      
        accordion {
          title
          description
        }
      }
    }
  }
`
