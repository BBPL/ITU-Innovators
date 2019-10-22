import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import HeroBanner from '../components/HeroBanner'
import ScrollingGallery from '../components/ScrollingGallery'
import FeatureGrid from '../components/Features'

export const FrontPageTemplate = ({ title, content, contentComponent, bannerUrl, mediaImages }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
        <HeroBanner url={bannerUrl}/>
        <ScrollingGallery images={mediaImages}/>
        <ScrollingGallery images={[]}/>
        <FeatureGrid gridItems={[]} />
    </section>
  )
}

FrontPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  bannerUrl: PropTypes.string.isRequired,
  mediaImages: PropTypes.any.isRequired
}

const FrontPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FrontPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
        bannerUrl={post.frontmatter.bannerUrl}
        mediaImages={post.frontmatter.mediaImages}
      />
    </Layout>
  )
}

FrontPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FrontPage

export const frontPageQuery = graphql`
  query FrontPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bannerUrl
        mediaImages {
          url
          alt
        }
      }
    }
  }
`
