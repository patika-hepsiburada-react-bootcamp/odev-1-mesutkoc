import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com";

async function getData(user_id) {
  try {
    //response data with userid
    const { data: userInfo } = await axios(`${dataUrl}/users/${user_id}`);
    const { data: postInfo } = await axios(
      `${dataUrl}/posts?userId=${user_id}`
    );

    const users = {
      ...userInfo,
      postInfo,
    };

    return users;
  } catch (err) {
    return err.message;
  }
}

export default getData;
