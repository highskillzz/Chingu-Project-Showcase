//reducer for all applets
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	const payload = action.payload;
	console.log("Inside reducer");
	console.log(payload);
	switch (action.type) {
		case ACTIONS.LIST_PROJECT:
			//for listing out all projects
			return {
				...state,
				loading: true,
				projectList:payload
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
