//reducer for all applets
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	const payload = action.payload;
	switch (action.type) {
		case ACTIONS.LIST_PROJECT:
			//for listing out all projects
			return {
				...state,
				projectList:payload
			};
		case ACTIONS.LIST_PROJECT_FULFILLED:
		console.log("Project fulfilled");
			//for listing out all projects
			return {
				...state,
				projectList:payload
			};
		case ACTIONS.SHOW_PROJECT:
			return {
				state
			};
		case ACTIONS.SHOW_PROJECT_FULFILLED:
			return {
				...state,
				projectInfo:payload
			};
		default:
			return state;
	}
};

export default projectReducer;
