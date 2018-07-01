const initialState = {
	project: {
		allProjects: [
			{
				likes: 0,
				features: [
					"Can partner with other people",
					"Just some project work"
				],
				keywords: ["XML", "HTTP"],
				browserSupport: ["Yes", "Yes", "Yes", "Yes", "Yes"],
				contributors: ["Anshul", "Vikranth"],
				name: "Random Project",
				description: "When an open source project starts, it is normally accompanied by a single person and only when that person does a lot of work and gets the project up and running, do other open source contributors come to....",
				image: "data:image/jpeg;base64,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",
				resources: [
					{
						title: "How to contribute",
						url: "www.google.com"
					}
				],
				build: "v18.0.0",
				version: "v1.0.0"
			}
		],
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
	},
	projects: {
		projectInfo: []
	}
};
export default initialState;
