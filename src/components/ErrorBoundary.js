import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (this.props.onError) {
      this.props.onError(error, info);
      return;
    }

    // Fallback: log to console to aid debugging in production.
    console.error("UI error boundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            padding: "24px",
            margin: "24px",
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            background: "#fff",
            color: "#1b1c1d",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
            Maaf, terjadi masalah.
          </h1>
          <p style={{ margin: 0 }}>
            Silakan refresh halaman atau hubungi kami jika masalah ini terus berulang.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  onError: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  onError: null,
};

export default ErrorBoundary;
