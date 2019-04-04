import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ListMembers from "../components/Team/ListMembers";
import Footer from "../components/Footer/Footer";

export const TestPageTemplate = ({
  title,
  content,
  contentComponent,
  members,
  footer,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {console.log(members)}
        <PageContent className="content" content={content} />
        <ListMembers data={members} />
      </div>
      <div>
        <Footer footer={footer} />
      </div>
    </section>
  );
};

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      imageInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string,
      studies: PropTypes.string,
    })
  ),
  footer: PropTypes.arrayOf({
    info: PropTypes.objectOf({
      address: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      links: PropTypes.arrayOf({
        link: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
};

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TestPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        members={post.frontmatter.members}
        footer={post.frontmatter.footer[0]}
      />
    </Layout>
  );
};

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TestPage;

export const testPgeQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        members {
          imageInfo {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          name
          position
          studies
        }
        footer {
          info {
            email
            address
            phone
            links {
              link
              title
            }
          }
        }
      }
    }
  }
`;
