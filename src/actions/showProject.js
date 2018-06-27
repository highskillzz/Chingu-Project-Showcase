import * as ACTIONS from "./actionTypes";
import client from "../client";
// import { projectsQuery } from './graphql/queries';
import { gql } from "graphql-tag";

console.log(gql);
const projectsQuery=gql`
  query ProjectInfo{
  projects {
    id
    name
    description
    image
    contributors {
      name
    }
    resources {
      title
      url
    }
  }
}
`
//list out all the applets by all users,i.e, global applets
export function getProjects() {
	return (dispatch, getState) => {
		const state = getState();
		client
			.query({
				query: projectsQuery,
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
