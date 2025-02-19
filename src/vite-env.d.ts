/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string;
	readonly VITE_PAGENAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.svg' {
	import React from 'react';
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export { ReactComponent };
	export default ReactComponent;
}
