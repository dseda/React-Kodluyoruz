import axios from "axios";

const getUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (data) resolve(data);
    else reject("Kullanıcı bulunamadı");
  });
};

const getPosts = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (data) resolve(data);
    else reject("Kullanıcıya ait post bulunamadı");
  });
};

const userDetailsAndPosts = async (userId) => {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(userId);
    console.log(user, posts);
  } catch (err) {
    console.log(err);
  }
};

export default userDetailsAndPosts;
