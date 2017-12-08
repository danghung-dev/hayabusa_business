import { api_getListCompany } from "../../api/api";

export function getListCompany() {
  return async dispatch => {
    const result = await api_getListCompany();
    dispatch({
      type: "GET_LIST_COMPANY_SUCCESS",
      data: result.data,
      success: result.success
    });
  };
}
