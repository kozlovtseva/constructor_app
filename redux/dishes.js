import * as ActionTypes from './ActionTypes';

export const dishes = (state = { isLoading: true,
                                 errMess: null,
                                 dishes: [],
                                 resultList: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_DISH:
            var dish = action.payload;
            return { ...state, resultList: state.resultList.concat(dish)};

        default:
          return state;
      }
};