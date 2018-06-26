import * as ACTIONS from "./actionTypes";

//list out all the applets by all users,i.e, global applets
export function showProject() {
	   return(
	   		type:ACTIONS.SHOW_PROJECT,
	   		payload:projects
	   	)
}
export function getProject(){
	return(
		type:ACTIONS.GET_PROJECT,
		payload:project
	)
}