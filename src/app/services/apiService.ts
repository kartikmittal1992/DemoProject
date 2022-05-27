export async function getPostsFromApiAsync() {  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
  const responseJson = await response.json();
  return responseJson;  
}