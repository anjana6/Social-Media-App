import axios from 'axios';

class HttpService {
  service = null;
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000',
    });
  }
}

export default HttpService;
