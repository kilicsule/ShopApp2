//category ye ait aksiyonlar yazılır.
//actionType ları import edilir.
import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories){
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

//dispatch: yakalamak, ele geçirmek.
export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
