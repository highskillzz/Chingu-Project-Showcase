const initialState = {
	project: {
		allProjects: [],
		projectInfo: {
			keywordsList: ["XML", "HTTP", "NodeJs"],
			BrowserSupportList: [
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
			],
			details: [
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
			],
			features: [
				{
					descripton: "Find Partners for project"
				},
				{
					descripton: "Able to open source the project"
				},
				{
					descripton: "Supports pair programming"
				},
				{
					descripton: "Tracks specific user according to their skills"
				},
				{
					descripton: "Able to launch call for help in sorting issue"
				}
			],
			resources: [
				{
					title: "How to Contribute",
					link: "#"
				},
				{
					title: "Stacks Used",
					link: "#"
				}
			],
			installation: [
				{
					title: "Using npm",
					code: "npm start"
				},
				{
					title: "Using yarn",
					code: "yarn run"
				},
				{
					title: "On deployed version",
					code: "https://www.projectongithub.io"
				}
			],
			title: "Sample Project",
			overviews: [
				{
					name: "Version",
					content: "v18.0.0"
				},
				{
					name: "License",
					content: "MIT"
				},
				{
					name: "Open Issues",
					content: "4"
				},
				{
					name: "Repository",
					content: "Openbud"
				},
				{
					name: "Collabrators",
					content: "Vikranth, Anshul"
				}
			],
			description:
				"When an open source project starts, it is normally accompanied by a single person and only when that person does a lot of work and gets the project up and running, do other open source contributors come to"
		}
	}
};
export default initialState;
