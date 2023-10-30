import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'

// Export Template for use in CMS preview
export const GroundwaterDewateringTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  section3,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section3} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Our GroundwaterDewatering</h2>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1>Exquisite Rock Crystals Available for Purchase</h1>
        <Content source={section2} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h3>We have these beautiful Gemstones for sale</h3>
      </div>
      <div
        style={{
          paddingTop: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <h4>
          Call or Whatsapp <a href="tel:+27615895614">061 589 5614</a> Today for
          more information!
        </h4>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const GroundwaterDewatering = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <GroundwaterDewateringTemplate
      {...page}
      {...page.frontmatter}
      body={page.html}
    />
  </Layout>
)

export default GroundwaterDewatering

export const pageQuery = graphql`
  query GroundwaterDewatering($id: String!) {
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
        section2
        section3
        accordion {
          title
          description
          image
        }
      }
    }
  }
`
