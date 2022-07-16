const HOST = 'http://localhost:4000';

const duRequest = (method, endPoint, body, successCB, errorCB) => {
  const url = `${HOST}/${endPoint}`;
  const options = {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch(url, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      errorCB('Something went wrong!');
    })
    .then(successCB)
    .catch(errorCB);
};

export default duRequest;
