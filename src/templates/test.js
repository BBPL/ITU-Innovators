import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ListMembers from "../components/Team/ListMembers";
import PodioForm from "../components/Form/PodioForm";
import Structure from "../components/Structure/Structure";

export const TestPageTemplate = ({
  title,
  content,
  contentComponent,
  members,
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

        <PodioForm />
        <ListMembers data={members} />
        <Structure />
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
      }
    }
  }
`;
