import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ListMembers from "../components/Team/ListMembers";
import EventDiv from "../components/Event";

export const TestPageTemplate = ({
  title,
  content,
  contentComponent,
  members
}) => {
  const PageContent = contentComponent || Content;
  const events = [
    {name: "Event with small description", description: "lorem ipsum dolor ipsos custodes", src: "https://spectratherapies.com/wp-content/uploads/2017/06/LSS-Autism-Acceptance.jpg"},
    {name: "Women in Tech 25/2/19 18:00 - 21:00", description: "ARYZE proudly hosts Women in Tech which is the sequel to the popular Women in Fintech event.    The event will take place at the IT University of Copenhagen on the 25th of February and is hosted in cooperation with IT-Branchen and ITU Innovators with the goal of addressing the lack of female representation in the sector and asking why it is so.", src: "https://spectratherapies.com/wp-content/uploads/2017/06/LSS-Autism-Acceptance.jpg"}, 
    {name: "Event with overflowing description", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis, ipsum vel pellentesque sodales, massa risus vehicula odio, ac auctor eros ligula sit amet sapien. Cras et fermentum nisi. Praesent in bibendum risus. Curabitur maximus quam tellus, eget varius est auctor sit amet. Vivamus at tellus vitae lectus aliquam vehicula. Maecenas at libero sit amet lacus porta mattis fringilla id mi. Aenean tempus in orci in ullamcorper. Ut quis nunc non erat dictum fermentum. Curabitur varius sed arcu ut scelerisque. Vivamus hendrerit massa ac sapien tristique accumsan. Praesent volutpat, erat posuere fringilla aliquet, ex nunc pharetra mi, vel pulvinar nibh urna ac magna. Integer dictum, nulla at feugiat faucibus, mi enim laoreet erat, at gravida lectus tortor non turpis. Proin laoreet velit purus, vitae volutpat tortor aliquam quis. Maecenas tempus in nunc at fermentum. Suspendisse varius sapien libero, quis mollis sapien vestibulum quis. Cras laoreet mattis nisi et porta. Proin malesuada dolor eu nulla lobortis vestibulum nec sit amet orci.", src: "https://spectratherapies.com/wp-content/uploads/2017/06/LSS-Autism-Acceptance.jpg"} 
  ];

  return (
    <section>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {console.log(members)}
        <PageContent className="content" content={content} />
        {
          events.map((event, index) => (
              <EventDiv data={event} />
          ))
        }
        <ListMembers data={members} />
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
      studies: PropTypes.string
    })
  )
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
