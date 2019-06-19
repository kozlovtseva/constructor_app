import * as ActionTypes from './ActionTypes';

export const dishes = (state = { isLoading: true,
                                 errMess: null,
                                 dishes: [],
                                 breakfastList: [],
                                 lunchList: [],
                                 dinnerList: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_DISH_TO_BREAKFAST:
            var dish = action.payload;
            return { ...state, breakfastList: state.breakfastList.concat(dish)};

        case ActionTypes.ADD_DISH_TO_LUNCH:
            var dish = action.payload;
            return { ...state, lunchList: state.lunchList.concat(dish)};

        case ActionTypes.ADD_DISH_TO_DINNER:
            var dish = action.payload;
            return { ...state, dinnerList: state.dinnerList.concat(dish)};

        default:
          return state;
      }
};