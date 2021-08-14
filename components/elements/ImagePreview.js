import React from "react";
import PropTypes from "prop-types";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  function OpenCamera() {}

  return (
    <div>
      <div className={"demo-image-preview " + classNameFullscreen}>
        <img src={dataUri} />
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;
