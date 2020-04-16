import { ADD_ARTICLE,CHECK_AUTH } from "../constants/Actiontypes";

export const selectUser = (user) => {
console.log("you click on user: ", user.first);
return {
    type: "USER_SELECTED",
    payload: user
}
};


    export function addArticle(payload) {
        return { type: ADD_ARTICLE, payload };
      }
  

export function checkauth(payload) {
    return {type: CHECK_AUTH, payload}
}