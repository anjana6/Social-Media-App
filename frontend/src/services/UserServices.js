import HttpService from './HttpService';
import { API } from '../utils/config';
class UserServices extends HttpService {
  login = async (payload) => {
    console.log(payload);
    return await this.sendRequest({
      method: 'POST',
      url: API.login,
      responseType: 'json',
      data: payload,
    });
  };
  createProfile = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.createProfile,
      responseType: 'json',
      data: payload,
    });
  };

  getUserById = async (id) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.createProfile + '/' + id,
      responseType: 'json',
    });
  };

  // uploadPost = async (payload) => {
  //   return await this.sendRequest({
  //     method: 'POST',
  //     url: API.createProfile + '/' + id,
  //     responseType: 'json',
  //     data: payload,
  //   });
  // };

  updateProfile = async (id, payload) => {
    return await this.sendRequest({
      method: 'PUT',
      url: API.updateProfile + '/' + id,
      responseType: 'json',
      data: payload,
    });
  };
}

const userServices = new UserServices();
export default userServices;
