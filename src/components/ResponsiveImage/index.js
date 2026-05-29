import PropTypes from "prop-types";
import MKBox from "components/MKBox";

function ResponsiveImage({ src, alt, width, height, ...props }) {
  const baseName = src.split('/').pop().replace('.webp', '');
  const basePath = src.replace(/[^/]+\.webp$/, 'optimized/');
  
  return (
    <MKBox
      component="img"
      src={`${basePath}${baseName}-255w.webp`}
      srcSet={`
        ${basePath}${baseName}-255w.webp 255w,
        ${basePath}${baseName}-325w.webp 325w,
        ${basePath}${baseName}-454w.webp 454w,
        ${basePath}${baseName}-700w.webp 700w
      `}
      sizes="(max-width: 600px) 255px, (max-width: 900px) 325px, 454px"
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ResponsiveImage.defaultProps = {
  alt: "",
  width: "100%",
  height: "auto",
};

export default ResponsiveImage;
