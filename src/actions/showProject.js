import * as ACTIONS from "./actionTypes";
import client from "../client";
import { projectsQuery } from "./graphql/queries";

export function getProjects() {return async dispatch => {

	dispatch({ type: ACTIONS.SHOW_PROJECT });
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
				payload: resp.data.projects
			});
		}
	});
};
}
// export function getProject() {
// 	return (type: ACTIONS.GET_PROJECT, payload: project);
// }
