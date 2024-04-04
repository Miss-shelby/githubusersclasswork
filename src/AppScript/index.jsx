import{ AppScriptUrl }from './index.js'
import {useState} from 'react'
import axios from "axios"
const AppScriptData=()=>{
    const [user,setUser] = useState([])
    const handleData=()=>{
        axios.get(`${AppScriptUrl}`)
        .then(function (response) {
            setUser(response.data.data)
            console.log(response,'response from api');
            // console.log(response)
            console.log(user,'USERS')
        })
        .catch(function (error) {
            setUser(error.data)
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
     }
    // console.log(AppScriptData)
    return (
        <>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-center text-[22px] text-pink-500 mt-[20px]'>my data from spreadsheet</p>
            <div className='flex'>
                <button onClick={handleData} className='btn btn-info my-[50px]'>view data</button>
            </div>
            {
                user?.map((user,idx)=>{
                   return <div className='flex flex-row  items-center justify-between mx-[auto] rounded-[20px] p-[20px] text-[20px] w-[500px] bg-gray-900' key={idx}>
                            <p className='text-yellow-600 ' >Name: {user.Name}</p>
                            <p className='text-yellow-600'>Email: {user.Email}</p>
                   </div>
                    
                })
            }
           
        </div>
        </>
    )
}
export default AppScriptData