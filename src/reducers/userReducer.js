//reducer for all applets
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	const user=action.payload;
	switch (action.type) {
		case ACTIONS.ADD_USER:
			//for listing out all projects
			return {
				...state,
				name:user.name,
				username:user.username,
				githubProfile:user.githubProfile,
				email:user.email
			};
		case ACTIONS.GET_USER:
			return{
				...state,
				name:user.name,
				username:user.username,
				githubProfile:user.githubProfile,
				email:user.email,
				projects:user.projects
			}
		default:
			return state;
	}
};

export default userReducer;
