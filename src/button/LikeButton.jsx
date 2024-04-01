import React from "react";
import { useState } from "react";
export const LikeButton =({setLikes, addActive, user})=>{
  const[isLiked,setIsLiked] = useState(false)

  const handleIsLiked =()=>{
    if(!isLiked){
      setLikes(prev => prev + 1)
      addActive(user.id, user, true)
    }else{
      setLikes(prev => prev - 1)
      addActive(user.id, user, false)
    }
    setIsLiked(prev => !prev)
  }
    return (
        <>
      <button className="absolute top-[20px] left-[20px] h-[35px] w-[35px] cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill= {isLiked ? 'red': 'none'}
            onClick={handleIsLiked}
            stroke='#fff'
          >
            <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" className="text-[25px] cursor-pointer" />
        </svg>
      </button>
        </>
    )
}