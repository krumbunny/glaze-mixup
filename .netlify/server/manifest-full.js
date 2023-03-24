export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.65d8b581.js","imports":["_app/immutable/entry/start.65d8b581.js","_app/immutable/chunks/index.3cd0ed1c.js","_app/immutable/chunks/singletons.66f3015d.js","_app/immutable/chunks/index.ab7fd3f0.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e70e5008.js","imports":["_app/immutable/entry/app.e70e5008.js","_app/immutable/chunks/index.3cd0ed1c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
