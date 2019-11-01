import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ListMembers from "../components/Team/ListMembers";
import PodioForm from "../components/Form/PodioForm";
import Structure from "../components/Structure/Structure";
import Footer from "../components/Footer/Footer";
import ScrollingGallery from "../components/ScrollingGallery";

export const FrontPageTemplate = ({
  title,
  content,
  contentComponent,
  members,
  footer,
}) => {
  const PageContent = contentComponent || Content;
  const images = [
    {alt:"1", src:"https://image.freepik.com/free-vector/namaste-hand-posture-background_23-2147707402.jpg"},
    {alt:"2", src:"https://res.cloudinary.com/teepublic/image/private/s--dl0i1k6z--/t_Preview/t_Watermark/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1530334342/production/designs/2840849_0.jpg"},
    {alt:"3", src:"https://cdn.schedulicity.com/usercontent/e8c1bf56-23e9-4fc6-9115-3514f13fc007.jpg"},
    {alt:"4", src:"https://images-na.ssl-images-amazon.com/images/I/61tGQ%2BxA0%2BL._UY395_.jpg"},
    {alt:"5", src:"https://image.freepik.com/free-vector/namaste-background-with-pretty-hand-drawn-mandala_23-2147690384.jpg"},
    {alt:"6", src:"https://ae01.alicdn.com/kf/HTB1AzbyFASWBuNjSszdq6zeSpXa7/DCTAL-Hand-Yoga-Lotus-Wall-Sticker-Buddha-Quotes-Namaste-Wall-Decal-For-Living-Rooms-DIY-Home.jpg_640x640.jpg"},
    {alt:"7", src:"https://metizapps.com/ageverification/uploads/popuplogos/1527626419_namaste_small_gold_no_background.png"},
  ];
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
        <ScrollingGallery images={images} />
        <Structure />
      </div>
      <div>
        <Footer footer={footer} />
      </div>
    </section>
  );
};

FrontPageTemplate.propTypes = {
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

const FrontPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FrontPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        members={post.frontmatter.members}
        footer={post.frontmatter.footer[0]}
      />
    </Layout>
  );
};

FrontPage.propTypes = {
  //data: PropTypes.object.isRequired,
};

export default FrontPage;

export const testPgeQuery = graphql`
  query FrontPage($id: String!) {
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
