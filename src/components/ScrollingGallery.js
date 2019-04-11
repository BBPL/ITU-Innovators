import React from "react";
import PropTypes from "prop-types";
// #d8e8ea

let displayFrom = 0
let maxImages

const ScrollingGallery = ({ images }) => (
  <div className="gallery-container" onLoad={hide}>
    <script>{maxImages = images.length}</script>
    <div className="gallery-arrow" onClick={prev}>o-</div>
    <div className="gallery-image-container">
      {
        images.map((image,index) => (
          <img key={index} id={"image-"+index} className="gallery-image" alt={image.alt} src={image.src} />
          )
        )
      }
    </div>
    <div className="gallery-arrow" onClick={next}>o-</div>
  </div>
);

function hide(){
  for (let index = 0; index < maxImages; index++) {
    const image = document.getElementById("image-"+index)
    image.style.display= "none"
  }
  let tempPos = displayFrom
  for (let index = 0; index < 3; index++) {
    console.log(tempPos);

    const image = document.getElementById("image-"+tempPos)
    image.style.display= "inline"
    image.style.order= index
    tempPos = (tempPos + 1)% maxImages
  }
}

function prev(){
  displayFrom = (displayFrom-3) % maxImages
  hide()
}

function next(){
  displayFrom = (displayFrom+3) % maxImages
  hide()
}

ScrollingGallery.propTypes = {
  images: PropTypes.arrayOf({
    image: PropTypes.objectOf({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  })
};

export default ScrollingGallery;
