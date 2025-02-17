import { instance } from '../../../api/instance';

export const postURL = async (body, url) => {
  let res;
  try {
    res = await instance.post('url', body);
  } catch (err) {
    alert(err);
  }
  return res;
};

export const postSignUpVerifyCode = async (body) => {
  const resData = { text: '', isSuccess: false };
  try {
    const res = await instance.post('/auth/verify-code', body);
    resData.isSuccess = res.data.success;
    resData.text = res.data.message;
  } catch (err) {
    alert(err);
  }
  return resData;
};

export const postApplicationSubmit = async (body) => {
  const resData = { text: '', isSuccess: false };
  try {
    const res = await instance.post('/application', body);
    resData.isSuccess = res.data.success;
    resData.text = res.data.message;
  } catch (err) {
    alert(err);
  }
  return resData;
};

export const postApplicationView = async (body) => {
  const resData = { text: '', isSuccess: false };
  try {
    const res = await instance.post('/application', body);
    resData.isSuccess = res.data.success;
    resData.text = res.data.message;
  } catch (err) {
    alert(err);
  }
  return resData;
};
