import {OPEN_NAVIGATION, CLOSE_NAVIGATION} from './actionTypes.js';

export default (state = {open: false}, action) => {
  switch(action.type) {
	  case OPEN_NAVIGATION:
			return {...state, open: true};
		case CLOSE_NAVIGATION:
			return {...state, open: false};
		default:
			return state;
	}
};
