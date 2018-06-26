//reducer for all applets
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	const payload=action.payload;
	switch (action.type) {
		case ACTIONS.ADD_USER:
			//for listing out all projects
			return {
				...state,
				payload
			};
		case ACTIONS.GET_USER:
			return{
				...state,
				payload
			}
		default:
			return state;
	}
};

export default userReducer;
