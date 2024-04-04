import React from "react";
import { useState } from "react"
// const MyPromise = () => {
//     const checkValidNumber = () => {
//         let invalidNum;
//         return new Promise((resolve, reject) => {
//             for (let i = 0; i < 10; i++) {
//                 console.log(i);
//                 const number = Math.floor(Math.random() * 10) +1;  //checks for number between 1 and 10
//                 invalidNum= number
//                 if (number > 5) {
//                     resolve(`valid number ${number} ${i}`);
//                     return; // Exit the loop if a valid number is found and print it
//                 }
//             }
//             reject(`${invalidNum}:invalid number`);
//         });
//     };

//     checkValidNumber()
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((res) => {
//             console.log(res);
//         });

//     return (
//         <>
//             <div className="bg-white text-center h-[100vh]">
//                 <p className='text-2xl text-[red-500]'> my promise </p>
//             </div>
//         </>
//     );
// };
// export default MyPromise;
import axios from "axios"

export const AxiosPageApi=()=>{
    const [users,setUsers] = useState([])
    const [error,setError] = useState('')
    const [isLoading,setIsLoading]=useState(false)
    useEffect()
   const getGithubUsers = () =>{
    setIsLoading(true)
    setError('')
    axios.get(' https://api.github.com/users')
  .then( (response) => {
    // handle success
    console.log(response.data);
    setUsers(response.data)
    console.log(users)
    console.log(typeof users)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    setError(error.response.data.message)
  })
  .finally(function () {
    setIsLoading(false) //set our loading to false because it stops loading after we get data
    // always executed
  });
}
  return (
    <>
    <button className='bg-red-500 text-white btn' onClick={ getGithubUsers }>get user </button>
    
    { 
     isLoading? <p>LOADING </p>: 
     error.length > 0 ?  <p className='text-green-500 '>{error}</p>:
     users.map((user)=> <li className='text-white pt-[20px]' key={user.id}>{user.login}</li>)
    }
    </>
  )
}