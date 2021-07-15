/**
 * 
 */

// 1.13.1
function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

// Using a Promise object
getData('https://jsonplaceholder.typicode.com/users/1')
  .then(data => {
    console.log('XHR Request Successful!');
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('XHR Request Failed!');
    console.log('Error:', error);
  });


// 1.13.2
username = 'Samantha';
fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
  .then(response => response.json())
  .then(users => {
    console.log('users:', users);   
  })
  .catch(error => {
    console.log('Request Error:', error);
  });


// 1.13.3
username = 'Samantha';
fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
  .then(response => response.json())
  .then(users => {
    console.log('user:', users[0]);   
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
  })
  .then(response => response.json())
  .then(posts => {
    console.log('posts:', posts);  
  })
  .catch(error => {
    console.log('Request Error:', error);
  });
