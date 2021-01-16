import axios from 'axios';

class HttpService {
  service = null;

  constructor() {
    this.service = axios.create({
      baseURL: process.env.API_URL,
    });
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  sendRequest = (config) => {
    return this.service.request(config);
  };

  handleSuccess = (res) => {
    return {
      success: true,
      data: res.data,
    };
  };

  handleError = (e) => {
    if (!e.response) {
      return {
        success: false,
        error: 'Network Failure',
      };
    }

    switch (e.response.status) {
      case 400:
        return {
          success: false,
          error: e.response.data.message,
        };
      case 401:
        return {
          success: false,
          error: 'Unauthorized',
        };
      case 403:
        return {
          success: false,
          error: 'Forbidden',
        };
      case 500:
        return {
          success: false,
          error: 'Internal Server Error',
        };
      default:
        return {
          success: false,
          error: 'Unknown Error',
        };
    }
  };
}

export default HttpService;
