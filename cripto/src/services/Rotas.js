import axios from "axios";

export async function postUser(user) {
  try {
    const response = await axios.post("http://localhost:3000/postUser", user);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(email) {
  try {
    const response = await axios.get(`http://localhost:3000/getUser/${email}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getLogin(userLogin) {
  try {
    const response = await axios.post(
      `http://localhost:3000/getLogin`,
      userLogin,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function LogarUser(user) {
  try {
    const response = await axios.post("http://localhost:3000/getLogin/autentic", user,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function PostNotify(notify) {
  const response = axios.post("http://localhost:3000/postNotify", notify)
  return response
}