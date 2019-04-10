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
    if (index >= displayFrom && index <= displayFrom+2) {
      image.style.display= "inline"
    }
    else{
      image.style.display= "none"
    }
  }
}

function prev(){
  if(displayFrom > 0) displayFrom-=3
  hide()
}

function next(){
  if(displayFrom < maxImages-1) displayFrom+=3
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
