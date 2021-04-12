import { apiSettings } from "./config";

class Api {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }
  _checkResponse(res) {
    if (res.statusText === "Created" ) {
      return res;
    }
    return Promise.reject(res);
  }
  sendEmail(data) {
    
    return fetch(`${this._baseURL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          "telephone": data.telephone,
          "email": data.email,
          "credentials": data.credentials
      }),
    }).then(this._checkResponse);
  }
}

export const api = new Api(apiSettings.baseURL);
