interface Api {
  apiGet: (url: string) => Promise<any>;
  apiPost: (url: string, data: Object) => Promise<any>;
}

export default (): Api => {

  const getPostOptions = (data: Object) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  const apiGet = async (url: string) => {

    return await fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      return data;
    });
  }

  const apiPost = async (url: string, data: Object) => {

    return await fetch(url, getPostOptions(data)).then((response) => {
      return response.json();
    }).then((data) => {
      return data;
    });
  }

  return {
    apiGet,
    apiPost
  }
};
