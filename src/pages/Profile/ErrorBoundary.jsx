import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }; //return state object
  }

  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error);
    console.error(info.componentStack);
  }

  render() {
    return this.state.hasError ? (
      <div>
        {this.props.fallback}
        <p>{this.state.error.message}</p>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
