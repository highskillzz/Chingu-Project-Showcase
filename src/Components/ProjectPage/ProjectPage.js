import React,{Component} from "react";

const details=[
	{
		name:"npm",
		content:"v18.0.0"
	},
	{
		name:"npm",
		content:"v18.0.0"
	},
	{
		name:"npm",
		content:"v18.0.0"
	},
	{
		name:"npm",
		content:"v18.0.0"
	}
];

class ProjectPage extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {

		const DetailsRow=details.map((detail)=>
			<DetailComponent name={detail.name} content={detail.content} />
		);

		return (
			<div className="project-page">
				<h1 className="project-name-redundant">Sample Project</h1>
				{DetailsRow}
			</div>
		);
	}
}

class DetailComponent extends Component{
	render() {
		return (
			<div className="detail">
				<span className="name">npm</span>
				<span className="content">v18.0.0</span>
			</div>
		);
	}
}

export default ProjectPage;