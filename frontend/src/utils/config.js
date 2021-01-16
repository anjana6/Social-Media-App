export const API_URL = process.env.API_URL;

export const API_PATH = API_URL + 'api/v1';

export const API = {
  addUserPassword: `${API_PATH}/user/temp`,
  login: `${API_PATH}/user/login`,
  createProfile: `${API_PATH}/user/profile`,
  findUser: `${API_PATH}/user`,

  addSubject: `${API_PATH}/subject`,
};
