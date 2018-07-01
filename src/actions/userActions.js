import * as ACTIONS from "./actionTypes";

//list out all the applets by all users,i.e, global applets
export function addUser() {
	   return(
	   		type:ACTIONS.ADD_USER,
	   		payload:user
	   	)
}

export function getUser(){
	return(
		type:ACTIONS.GET_USER,
		payload:user
	)
}