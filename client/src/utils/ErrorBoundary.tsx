import React from "react";

type ErrorBoundaryProps = { children: React.ReactNode };

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
	state = { hasError: false };
	componentDidCatch(error: Error, info: React.ErrorInfo) {
		console.error(error, info);
	}
	render() {
		return this.state.hasError ? <ErrorFallback /> : this.props.children;
	}
}

const ErrorFallback = () => {
	return (
		<div className="text-4xl text-white bg-[#333] h-screen w-screen flex items-center justify-center font-semibold">
			An Error Has Occured!
		</div>
	);
};

export default ErrorBoundary;
