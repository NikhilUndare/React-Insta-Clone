
// const BASE_URL = process.env.NODE_API
 const BASE_URL = "https://instaclone-nodejs-nikhil.onrender.com"

export function getAllPost(){

    return fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .catch(err => alert(err.message));
}

export function addNewPost(post){
      return fetch(`${BASE_URL}/post`,{
        method : "POST",
        body : post
      })
      .then(res => res.json())
      .catch(err => alert(err.message));
}