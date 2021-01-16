import HttpService from './HttpService';
import { API } from '../utils/config';
class UserServices extends HttpService {
  login = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.login,
      responseType: 'json',
      data: payload,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
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

  //   updateApplicant = async (uid, id, payload) => {
  //     return await this.sendRequest({
  //       method: 'PUT',
  //       url: API.user + '/' + uid + '/applicants/' + id,
  //       responseType: 'json',
  //       data: payload,
  //     });
  //   };
}

const userServices = new UserServices();
export default userServices;
