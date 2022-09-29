import axios from "axios";


let API_URL ="http://localhost:1337/api"

export async function LoginApi(username, password) {
    let payload = {
      identifier : username,
      password: password
    }
    let result = await axios.post(
      `${API_URL}/auth/local`,
        payload,
    );
    return result.data;
  }
  
  export async function getAxios(url) {
    const config = {
      method: "get",
      url: `${API_URL}/${url}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }
  
  export async function postAxios(url, payload) {
    const config = {
      method: "post",
      url: `${API_URL}/${url}`,
      data: payload,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }
  export async function putAxios(url, payload) {
    const config = {
      method: "put",
      url: `${API_URL}/${url}`,
      data: payload,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }
  