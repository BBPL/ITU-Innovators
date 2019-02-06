import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ListMembers from "../components/Team/ListMembers";

export const TestPageTemplate = ({
  title,
  content,
  contentComponent,
  members
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <PageContent className="content" content={content} />
        {console.log(content)}
        <ListMembers data={members} />
        {console.log(members.toJS())}
      </div>
    </section>
  );
};

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  members: PropTypes.instanceOf(ListMembers)
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
  data: PropTypes.object.isRequired
};

export default TestPage;

export const testPgeQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        members {
          name
          position
          studies
        }
      }
    }
  }
`;
