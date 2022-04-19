import Axios from 'axios';

const makeUrl = (path) => {
  const parts = [""];
  if (path) {
    parts.push(path.trim().replace(/(^\/+)|(\/+$)/g, ''));
  }
  return parts.join('/');
};

export const axiosErrors = (e) => {
  let { message } = e;
  const { response } = e;
  const { data } = response;
  const { type } = response;
  if (data) {
    const errorText = data.message;
    if (errorText) {
      if (typeof errorText === typeof []) {
        message = data.join('\n');
      } else if (typeof errorText === 'string') {
        message = errorText;
      }
    }
  }
  return { type, message: message || 'Error' };
};

export const axiosGet = (path, options = { isNeedSpinner: true }) => {
  const url = makeUrl(path);
  return (params) => {
    return Axios.get(url, { params, ...options });
  };
};

export const axiosPost = (path, options = { isNeedSpinner: true }) => {
  const url = makeUrl(path);
  return (body, reqOptions = {}) => {
    return Axios.post(url, body, { ...options, ...reqOptions });
  };
};

export const axiosPut = (path, options = { isNeedSpinner: true }) => {
  const url = makeUrl(path);
  return (body) => {
    return Axios.put(url, body, { ...options });
  };
};

export const axiosPatch = (path, options = { isNeedSpinner: true }) => {
  const url = makeUrl(path);
  return (body) => {
    return Axios.patch(url, body, { ...options });
  };
};

export const axiosDelete = (path, options = { isNeedSpinner: true }) => {
  const url = makeUrl(path);
  return (params) => {
    return Axios.delete(url, { params, ...options });
  };
};
