import { useMemo, useState } from "react"
import { AllUsers } from "../githubuser/github"

// import { UserCard } from "../githubusercard/githubuercard"
// import {LikeButton} from "../button/LikeButton"

const GithubUsers = ()=>{
    const [data, setData] = useState(AllUsers)

    const [search,setSearch] = useState('')

    let likes = useMemo(()=>{
      return data.filter((user)=>user.isLiked == true).length
    }, [data])

    let filteredData = data.filter((user)=>{
      return user.login.toLowerCase().startsWith(search)
    })

    let handleIsLiked = (id) => {
      let newData = data.map(item => {
        if(item.id == id){
          return {...item, isLiked:!item.isLiked}
        }
        return item
      })
      setData(newData)
    }
    const [view,setView] = useState(false)
    const changeView=()=>{
      setView(!view)
    }
    // let addActive = (id, user, action) => {
    //   if(action){
    //     setActive(prev => ({...prev, [id]:{...user}}))
    //   }else{
    //     let oldActive = {...active}
    //     delete oldActive[id]
    //     setActive(oldActive)
    //   }
    // }

  

    // const plusLikes = ()=>{
    //   if( !isLiked){
    //     setLikes((prev)=> prev +1)
    //   }else{
    //     setLikes((prev)=> prev -1)
    //   }
    //   setIsLiked(!isLiked)
    // }
    // console.log(search)
    // const[githubUsers,changeGitHubUsers] = useState(AllUsers)
    return (
        <>
        <nav className="bg-gray-900 flex flex-row justify-center items-center pt-[30px] pb-[30px] sticky top-0 w-full z-50">
        <input type="text" placeholder="Search for User" onChange={((e)=>setSearch(e.target.value))} className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-neutral mx-[10px]">Liked users <span>{likes}</span></button>
        <button className="btn btn-neutral" onClick={changeView}> Toggle View </button>
        </nav>
        <div className="text-white  bg-gray-900 py-[20px] flex flex-row">
          {data.map(item => {
            if(item.isLiked){
              return <p className="flex w-[100px] mx-[10px]  gap-5 justify-center bg-base-300 py-[10px] rounded-[15px]  px-[100px]" key={item.id}>{item.login} <button onClick={() => handleIsLiked(item.id)}>X</button></p>
            }
          })
          }
        </div>
        <div className={`bg-base-300  flex  justify-between ${view?'px-[50px]' :'px-[100px]'} flex-wrap pt-[150px] pb-[100px]`}>
       
        {
          filteredData.map((user) => 
            <div key={user.id} className={`flex border border-2 items-center  mt-[20px] px-[20px] ${view? 'flex-row px-[50px] ':'flex-col'}`}>
                <div className="relative ">
                    <img className={`rounded-2xl mt-[10px] h-[300px] w-[300px] relative ${view? 'rounded-full h-[75px] w-[75px] mr-[30px] ':''} `} src={user.avatar_url} alt="" />
                    <button className={`absolute top-[20px] ${view? 'hidden' :'block'} left-[20px]  h-[35px] w-[35px] cursor-pointer flex justify-center items-center`}>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill= {user.isLiked ? 'red': 'none'}
                          onClick={() => handleIsLiked(user.id)}
                          stroke='#fff'
                        >
                          <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" className="text-[25px] cursor-pointer" />
                      </svg>
                    </button>
                </div>
                <div>
                  <div className='flex flex-row items-center'>
                  <button className={` ${view?"block":'hidden'} h-[35px] w-[35px] mr-[10px] cursor-pointer flex justify-center items-center`}>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill= {user.isLiked ? 'red': 'none'}
                          onClick={() => handleIsLiked(user.id)}
                          stroke='#fff'
                        >
                          <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" className="text-[25px] cursor-pointer" />
                      </svg>
                    </button>
                      <h5 className='text-xl  text-white font-[700] pt-[3px] text-[18px]'>{user.id}.<span className="pl-[5px]">{user.login}</span></h5>
                  </div>
                  {/* <h6 className='text-xl pt-[10px] text-white  font-bold'>Role:{user.type}</h6> */}
                  <button className="btn bg-blue-500 border-none  text-black hover:bg-transparent  my-[10px]"><a href={user.url} target="_blank">vist my Github Profile </a></button>
                </div>
            </div>
          //  <UserCard key={user.id} user={user}  onClick={plusLikes} isLiked={isLiked} />
          )
        }
        </div>
        
        </>
    )
}
export default GithubUsers