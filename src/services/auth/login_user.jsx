import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

import http from "../../utils/http";

import { useMutation } from "@tanstack/react-query";

const reduxLogin = async (input)=> {
  return await http.post(API_ENDPOINT.LOGIN_USER, input) 
}

// const LoginUser = async (input) => {
//   return await http.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
//     CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
//     return result;
//   });
// };

const useLoginUser = () => {
  return useMutation(reduxLogin);
};

export { useLoginUser, reduxLogin };
