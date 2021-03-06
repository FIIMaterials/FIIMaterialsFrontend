import axios from "axios";
import {
    BACKEND_URL, DELETE_RATING, GET_ABOUT, GET_CREDITS, GET_DIAGRAM, GET_FEEDBACK_URL,
    GET_LINKS_URL,
    GET_RESOURCES_URL,
    GET_USER_URL, LOGIN_URL, POST_FEEDBACK_URL, POST_VERIFICATION_TOKEN, SEND_TO_RECOVER,
    SET_RATING_URL,
    SIGNUP_URL, UPDATE_PROFILE_URL
} from "../Global/globals";
import {getCookie, USER_AUTH_TOKEN_COOKIE} from "../Global/cookie";


/**
 * An "API" class for making only backend requests
 * Each method returns a promise when the request is finished
 * This doesn't have access to redux store
 * Hope that is a good pattern
 */

class BackendAPI {
    public static instance: BackendAPI

    private constructor() {}

    public static getInstance() {
        if (!BackendAPI.instance) {
            BackendAPI.instance = new BackendAPI();
        }
        return BackendAPI.instance;
    }

    getUserData() {
        const userToken = getCookie(USER_AUTH_TOKEN_COOKIE);

        return axios({
            method: 'post',
            url: BACKEND_URL + GET_USER_URL,
            headers: {
                'Authorization': 'Token ' + userToken,
            },
        });
    }

    getClasses(sendRequestObject: any) {
        return axios(sendRequestObject);
    }

    setRating(classID: number, rating: number) {
        return axios({
            method: 'POST',
            url: BACKEND_URL + SET_RATING_URL,
            headers: {
                Authorization: "Token " + getCookie(USER_AUTH_TOKEN_COOKIE),
            },
            data: {
                class_id: classID,
                rating: rating,
            }
        });
    }

    getResources() {
        return axios({
            method: 'get',
            url: BACKEND_URL + GET_RESOURCES_URL,
        })
    }

    getLinks() {
        return axios({
            method: "get",
            url: BACKEND_URL + GET_LINKS_URL,
        });
    }

    signup(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + SIGNUP_URL,
            data: formData,
        });
    }

    sentVerificationToken(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + POST_VERIFICATION_TOKEN,
            data: formData,
        });
    }

    login(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + LOGIN_URL,
            data: formData,
        });
    }

    getFeedback() {
        return axios({
            method: 'get',
            url: BACKEND_URL + GET_FEEDBACK_URL,
        });
    }

    submitFeedback(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + POST_FEEDBACK_URL,
            headers: {
                'Authorization': 'Token ' + getCookie(USER_AUTH_TOKEN_COOKIE),
            },
            data: formData,
        });
    }

    deleteRating(classId: number) {
        return axios({
            method: "post",
            url: BACKEND_URL + DELETE_RATING,
            headers: {
                'Authorization': 'Token ' + getCookie(USER_AUTH_TOKEN_COOKIE),
            },
            data: {
                class_id: classId,
            }
        });
    }

    updateProfile(newUserData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + UPDATE_PROFILE_URL,
            headers: {
                'Authorization': 'Token ' + getCookie(USER_AUTH_TOKEN_COOKIE),
            },
            data: newUserData,
        });
    }

    sendToRecover(formData: any) {
        return axios({
            method: 'post',
            url: BACKEND_URL + SEND_TO_RECOVER,
            data: formData,
        });
    }

    getAbout() {
        return axios({
            method: 'get',
            url: BACKEND_URL + GET_ABOUT,
        });
    }

    getCredits() {
        return axios({
            method: 'get',
            url: BACKEND_URL + GET_CREDITS,
        });
    }

    getDiagram() {
        return axios({
            method: 'get',
            url: BACKEND_URL + GET_DIAGRAM,
        });
    }
}

export default BackendAPI;
