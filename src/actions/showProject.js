import * as ACTIONS from "./actionTypes";
import client from "../client";
import { projectsQuery,allProjectsQuery } from "./graphql/queries";

export function getAllProjects(){
	return async dispatch=>{
		console.log("Getting all projects");
		await Promise.resolve(
		client.query({
			query: allProjectsQuery
		})
	).then(resp => {
		if (resp.data) {
			console.log("Data received");
			console.log(resp.data);
			dispatch({
				type: ACTIONS.LIST_PROJECT_FULFILLED,
				payload: resp.data.projects
			});
		}
	});	
	};
}

export function getProject() {return async dispatch => {

	// dispatch({ type: ACTIONS.SHOW_PROJECT });
	console.log("Invoking actions");
	await Promise.resolve(
		client.query({
			query: projectsQuery
		})
	).then(resp => {
		if (resp.data) {
			console.log("Data received");
			console.log(resp.data);
			dispatch({
				type: ACTIONS.SHOW_PROJECT_FULFILLED,
				payload: resp.data.project
			});
		}
	});
};
}
// export function getProject() {
// 	return (type: ACTIONS.GET_PROJECT, payload: project);
// }
