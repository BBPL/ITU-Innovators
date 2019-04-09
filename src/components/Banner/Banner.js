import React from "react";
import PropTypes from "prop-types";
import "./Banner.sass"

const Banner = ({ banner }) => (
    <div class="hero-image">
        <div class="hero-header">
            <h3>{banner.info.bannerHeader}</h3>
            <div class="hero-para">
                <p>{banner.info.bannerParagraph}</p>
            </div>
        </div>
    </div>
);

Banner.PropTypes = {
    banner: PropTypes.objectOf({
        info: PropTypes.objectOf({
            bannerHeader: PropTypes.string,
            bannerParagraph: PropTypes.string,
        }),
    }),
};

export default Banner;