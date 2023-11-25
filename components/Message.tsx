import React from "react";

const Loading = ({ label }: { label: string }) => {
	return (
		<div className="h-[80vh] min-w-screen flex-center">
			<p className="text-lg italic">{label}</p>
		</div>
	);
};

export default Loading;
