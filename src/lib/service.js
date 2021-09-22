import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com";

async function getData(user_id) {
  try {
    //response data with userid
    const { data: user } = await axios(`${dataUrl}/users/${user_id}`);
    const { data: posts } = await axios(
      `${dataUrl}/posts?userId=${user_id}`
    );
    //create a new user object with fetched data
    const users = {
      ...user,
      posts,
    };

    //return user data that requested 
    return users;

  } catch (err) {
    //return error message
    return err.message;
  }
}

export default getData;
