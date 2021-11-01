export async function postLogin({ email, password }) {
  const url = 'https://eatgo-login-api.ahastudio.com/session';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const { accessToken } = await response.json();
  return accessToken;
}

export async function fetchTestaments() {
  const url = 'https://project-react-json-server.herokuapp.com/testaments';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchContents() {
  const url = 'https://project-react-json-server.herokuapp.com/contents';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchVerses({ testamentName, contentId }) {
  const url = 'https://project-react-json-server.herokuapp.com/verses'
    + `?testament=${testamentName}&content=${contentId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
