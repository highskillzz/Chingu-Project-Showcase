import * as ACTIONS from "./actionTypes";
import client from "../client";
import { projectsQuery } from './graphql/queries';

export function getProjects() {
	return (dispatch, getState) => {
		console.log("Here");
		const state = getState();
		client
			.query({
				query: projectsQuery
			})
			.then(resp => {
				if (resp.data) {
					dispatch({
						type: ACTIONS.SHOW_PROJECT,
						payload: resp.data.projects
					});
				}
			});
	};
}
// export function getProject() {
// 	return (type: ACTIONS.GET_PROJECT, payload: project);
// }
