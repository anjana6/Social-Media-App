import HttpService from './HttpService';
import { API } from '../utils/config';

class PostService extends HttpService {
  createPost = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.post,
      responseType: 'json',
      data: payload,
    });
  };
}

export default new PostService();
