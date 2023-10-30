import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import Gallery from '../components/Gallery'
import ImageGallery from 'react-image-gallery'
import SecNav from '../components/SecNav'

const images = [
  {
    original: 'https://ucarecdn.com/8039114d-bfaa-41db-a329-d3a8f8dfe08c/',
    thumbnail: 'https://ucarecdn.com/8039114d-bfaa-41db-a329-d3a8f8dfe08c/',
    description: 'Vanadinite'
  },
  {
    original: 'https://ucarecdn.com/83c7911a-24f9-406d-900a-cc780c15eef6/',
    thumbnail: 'https://ucarecdn.com/83c7911a-24f9-406d-900a-cc780c15eef6/',
    description: 'Calcite and Stibnite'
  },
  {
    original:
      'https://ucarecdn.com/b36debf6-0842-4376-90d8-caca780b0da6/Rock3.jpg',
    thumbnail:
      'https://ucarecdn.com/b36debf6-0842-4376-90d8-caca780b0da6/Rock3.jpg',
    description: 'Pyrite'
  },
  {
    original:
      'https://ucarecdn.com/31a4a5e2-4944-43b1-a4c6-093522102e08/Rock8.jpg',
    thumbnail:
      'https://ucarecdn.com/31a4a5e2-4944-43b1-a4c6-093522102e08/Rock8.jpg',
    description: 'Celestite'
  },
  {
    original:
      'https://ucarecdn.com/df30265e-1888-4c1a-98a7-3f36a4e38a41/Rock1.jpg',
    thumbnail:
      'https://ucarecdn.com/df30265e-1888-4c1a-98a7-3f36a4e38a41/Rock1.jpg',
    description: 'Chrysoprase'
  },
  {
    original:
      'https://ucarecdn.com/20dc7dca-b244-42a5-9c66-60e171e30b3f/Rock10.jpg',
    thumbnail:
      'https://ucarecdn.com/20dc7dca-b244-42a5-9c66-60e171e30b3f/Rock10.jpg',
    description: 'Emerald'
  },
  {
    original:
      'https://ucarecdn.com/d5a994bd-fcc5-4c0d-bb72-723ccebcf205/Rock4.jpg',
    thumbnail:
      'https://ucarecdn.com/d5a994bd-fcc5-4c0d-bb72-723ccebcf205/Rock4.jpg',
    description: 'Lamp Quartz'
  },
  {
    original:
      'https://ucarecdn.com/31b9857b-97f1-4bb4-a11e-715ac3e81ee9/Rock6.jpg',
    thumbnail:
      'https://ucarecdn.com/31b9857b-97f1-4bb4-a11e-715ac3e81ee9/Rock6.jpg',
    description: 'Garnite'
  },
  {
    original:
      'https://ucarecdn.com/c39d383f-2194-433c-9ad8-d6473e89c350/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/c39d383f-2194-433c-9ad8-d6473e89c350/Rock9.jpg',
    description: 'Azurite'
  },
  {
    original:
      'https://ucarecdn.com/ae091b61-888a-41d1-b352-cfcf8941e01c/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/ae091b61-888a-41d1-b352-cfcf8941e01c/Rock9.jpg',
    description: 'Calcite'
  },
  {
    original:
      'https://ucarecdn.com/79c38c87-7164-4e21-b885-8ca7ea79b098/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/79c38c87-7164-4e21-b885-8ca7ea79b098/Rock9.jpg',
    description: 'Biotite'
  },
  {
    original:
      'https://ucarecdn.com/b05ed7d4-2b38-4e3e-b69c-902303f4f61d/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/b05ed7d4-2b38-4e3e-b69c-902303f4f61d/Rock9.jpg',
    description: 'Aventurine'
  },
  {
    original:
      'https://ucarecdn.com/0d9d49b3-4062-4be0-93b5-1ace99a868f5/Rock9.jpg',
    thumbnail:
      'https://ucarecdn.com/0d9d49b3-4062-4be0-93b5-1ace99a868f5/Rock9.jpg',
    description: 'Malachite'
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
        <SecNav />
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
        <h1>Exquisite Rock Crystals Available for Purchase</h1>
        <Content source={section2} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h3>We have these beautiful Gemstones for sale</h3>
        <ImageGallery
          items={images}
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          item={images.description}
        />
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
        section3
        accordion {
          title
          description
          to
        }
      }
    }
  }
`
