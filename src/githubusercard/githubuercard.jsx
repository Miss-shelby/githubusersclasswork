import { useState } from "react"
import React from "react";

export const UserCard = ({user,onClick,isLiked})=>{
    console.log(isLiked)
    return <>
       <div  className="flex flex-col items-center mt-[20px] px-[20px]">
                <div className="relative">
                    <img className="rounded-2xl mt-[10px] h-[300px] w-[300px] relative" src={user.avatar_url} alt="" />
                    <div  className="absolute top-[20px] left-[20px] h-[35px] w-[35px] cursor-pointer" onClick={onClick}>
                    <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill= {isLiked ? 'red': 'none'}
                          stroke='#fff'
                        >
                          <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" className="text-[25px] cursor-pointer" />
                        </svg>
                    </div>
                </div>
                <h5 className='text-2xl pt-[20px] text-white font-bold'>{user.id}.<span className="pl-[5px]">{user.login}</span></h5>
                <h6 className='text-xl pt-[10px] text-white  font-bold'>Role:{user.type}</h6>
                <button className="btn bg-blue-500 border-none  text-black hover:bg-transparent  my-[10px]"><a href={user.url} target="_blank">vist my Github Profile </a></button>
            </div>
    </>
}
