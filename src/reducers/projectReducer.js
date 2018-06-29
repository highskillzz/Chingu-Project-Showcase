//reducer for all applets
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	const payload = action.payload;
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
				projectList:payload
			};
		default:
			return state;
	}
};

export default projectReducer;
