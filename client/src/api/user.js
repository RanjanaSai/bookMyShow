import { axiosInstance } from "./index";
//const BASE_URL = "/api/user";
//const BASE_URL = 'http://localhost:8080/api/user';

export const RegisterUser = async (values) => {
    try {
        // const response = await axiosInstance.post(`${BASE_URL}/register`, values);
        const response = await axiosInstance.post("/api/user/register", values);

        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}
export const LoginUser = async (values) => {
    try {
        // const response = await axiosInstance.post(`${BASE_URL}/login`, values);
        const response = await axiosInstance.post("/api/user/login", values);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}
export const GetCurrentUser = async () => {
    try {
        // const resp = await axiosInstance.get(`${BASE_URL}/get-current-user`);
        const resp = await axiosInstance.get("/api/user/get-current-user");
        return resp.data;
    }
    catch (err) {
        console.log(err);
    }
}
export const ForgotPassword = async (values) => {
    try {
        const response = await axiosInstance.patch(
            "/api/user/forgot-password",
            values
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const ResetPassword = async (values) => {
    try {
        const response = await axiosInstance.patch(
            "/api/user/reset-password",
            values
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
};