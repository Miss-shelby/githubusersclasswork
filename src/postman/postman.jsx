import { useState } from "react"
import { Users } from "../githubuser/github"
const GithubUsers = ()=>{
    // const[githubUser,changeGitHubUser] = useState({
    //     name:"Theodore"
    // })
    const[githubUsers,changeGitHubUsers] = useState(Users)
    return (
        <>
        
        <div className="bg-white  h-screen flex flex-col justify-center items-center pt-[50px] pb-[100px]">
            <p className='text-3xl '> Github users </p>
            <div className="border border-red-500  mt-[20px] px-[20px]">
                <img className="rounded-2xl mt-[10px]" src={githubUsers.avatar_url} alt=""  />
                <h5 className='text-2xl pt-[20px] text-blue-500 font-bold'>{githubUsers.id}.<span className="pl-[5px]">{githubUsers.login}</span></h5>
                <button className="btn btn-info text-white hover:bg-transparent  my-[10px]"><a href={githubUsers.url} target="_blank">vist me </a></button>
            </div>
        </div>
        </>
    )
}
export default GithubUsers