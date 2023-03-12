import React, { Component } from "react";

interface ErrorBoundaryProps {
	fallback: React.ReactNode;
	children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
	state = { hasError: true };

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		console.error(error, info);
	}

	render() {
		return this.state.hasError ? this.props.fallback : this.props.children;
	}
}

export default ErrorBoundary;
