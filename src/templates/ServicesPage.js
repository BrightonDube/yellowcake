import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const ServicesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
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
        <h2>Our Services</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1>Buy Crystal Rocks From Us</h1>
        <h>We have these beautiful Gemstones for sale</h>

        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Gallery images={gallery} />
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
            Call or Whatsapp <a href="tel:+27615895614">061 589 5614</a> Today
            for more information!
          </h4>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const ServicesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ServicesPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPage($id: String!) {
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
        accordion {
          title
          description
        }
      }
    }
  }
`
