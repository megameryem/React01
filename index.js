import axios from 'axios';


 async function getUserAccount(number) {
    const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)

    const {data: post} = await axios( "https://jsonplaceholder.typicode.com/posts?userId=/"+number)
    console.log(data);
    console.log(post);

  }
  
  
  function getData(number) {
    return getUserAccount(number);
    }
    

export default{
    getData
 }