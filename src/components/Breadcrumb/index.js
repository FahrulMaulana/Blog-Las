import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

function Breadcrumb({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <MKBox component="nav" aria-label="Breadcrumb" py={1} px={2}>
        {items.map((item, i) => (
          <MKTypography
            key={item.name}
            variant="button"
            color="text"
            component="span"
            sx={{ fontSize: "0.875rem" }}
          >
            {i < items.length - 1 ? (
              <MKTypography
                component={Link}
                to={item.path}
                variant="button"
                color="info"
                sx={{
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item.name}
              </MKTypography>
            ) : (
              item.name
            )}
            {i < items.length - 1 && " › "}
          </MKTypography>
        ))}
      </MKBox>
    </>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
