import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import Gallery from '../components/Gallery'
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: 'https://ucarecdn.com/69116013-17db-48c3-b411-99949d6e1d82/',
    thumbnail: 'https://ucarecdn.com/69116013-17db-48c3-b411-99949d6e1d82/'
  },
  {
    original: 'https://ucarecdn.com/4d6096ed-d15a-414c-862b-e3699eae3197/',
    thumbnail: 'https://ucarecdn.com/4d6096ed-d15a-414c-862b-e3699eae3197/'
  },
  {
    original:
      'https://ucarecdn.com/57003939-0f42-4ac8-b66a-af0e1c93e32f/Rock3.jpg',
    thumbnail:
      'https://ucarecdn.com/57003939-0f42-4ac8-b66a-af0e1c93e32f/Rock3.jpg'
  },
  {
    original:
      'https://ucarecdn.com/98b96426-5cf4-4c3f-9f27-b6f1430af5bd/Rock8.jpg',
    thumbnail:
      'https://ucarecdn.com/98b96426-5cf4-4c3f-9f27-b6f1430af5bd/Rock8.jpg'
  },
  {
    original:
      'https://ucarecdn.com/9637f648-8941-4bb5-acfe-4a43d2e51d81/Rock1.jpg',
    thumbnail:
      'https://ucarecdn.com/9637f648-8941-4bb5-acfe-4a43d2e51d81/Rock1.jpg'
  },
  {
    original:
      'https://ucarecdn.com/77f227f4-2340-40d3-b062-d8b3c7927645/Rock10.jpg',
    thumbnail:
      'https://ucarecdn.com/77f227f4-2340-40d3-b062-d8b3c7927645/Rock10.jpg'
  },
  {
    original:
      'https://ucarecdn.com/e8933897-9a2d-400a-bc76-d0fb912822ac/Rock5.jpg',
    thumbnail:
      'https://ucarecdn.com/e8933897-9a2d-400a-bc76-d0fb912822ac/Rock5.jpg'
  },
  {
    original:
      'https://ucarecdn.com/492c167a-178b-47f4-b3bc-d798482787ac/Rock4.jpg',
    thumbnail:
      'https://ucarecdn.com/492c167a-178b-47f4-b3bc-d798482787ac/Rock4.jpg'
  },
  {
    original:
      'https://ucarecdn.com/7041ccd5-c8e1-4ecd-b11d-6bd75e1bbcec/Rock6.jpg',
    thumbnail:
      'https://ucarecdn.com/7041ccd5-c8e1-4ecd-b11d-6bd75e1bbcec/Rock6.jpg'
  },
  {
    original:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg'
  },
  {
    original:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg'
  },
  {
    original:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg'
  },
  {
    original:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/cd9ed9f1-f3f5-44dc-9316-84f25672c4be/Rock9.jpg'
  }
]

// Export Template for use in CMS preview
export const ServicesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
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
        <Content source={section2} />
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
        <h1>Exquisite Rock Crystals Available for Purchase</h1>
        <Content source={section2} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h3>We have these beautiful Gemstones for sale</h3>
        <ImageGallery items={images} />
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
