const keywordsList = ["XML", "HTTP", "NodeJs"];

const BrowserSupportList = [
	{
		browserName: "Chrome",
		support: "true"
	},
	{
		browserName: "Firefox",
		support: "true"
	},
	{
		browserName: "InternetExplorer",
		support: "true"
	},
	{
		browserName: "Opera",
		support: "true"
	},
	{
		browserName: "Edge",
		support: "true"
	}
];

const details = [
	{
		name: "npm",
		content: "v18.0.0"
	},
	{
		name: "build",
		content: "failing"
	},
	{
		name: "chat",
		content: "gitter"
	},
	{
		name: "contributors",
		content: "4"
	}
];

const features = [
	{
		descripton: "Make XMLHttpRequests from the browser"
	},
	{
		descripton: "Make http requests from node.js"
	},
	{
		descripton: "Supports the Promise API"
	},
	{
		descripton: "Intercept request and response"
	},
	{
		descripton: "Transform request and response data"
	}
];

const resources = [
	{
		title: "How to Contribute",
		link: "#"
	},
	{
		title: "Stacks Used",
		link: "#"
	}
];


const installation = [
	{
		title: "Using npm",
		code: "npm install axios"
	},
	{
		title: "Using bower",
		code: "bower install axios"
	},
	{
		title: "Using cdn",
		code: "<script src='https://unpkg.com/axios/dist/axios.min.js'></script>"
	}
];

export {keywordsList,BrowserSupportList,details,features,resources,installation};