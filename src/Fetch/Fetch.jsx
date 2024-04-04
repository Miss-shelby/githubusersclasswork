import {useEffect, useState} from 'react'
import { PhotosUrl } from '../AppScript'
const Fetch = ()=>{
    const [photos,setPhotos] = useState([])
    useEffect (()=>{
        fetch(`${PhotosUrl}`)
        .then((response)=>{
           return response.json();
        })
        .then((data)=>{
            console.log(data)
            setPhotos(data)
        })
    },[])
    return <div>
        <p className='text-center text-orange-500'>PHOTOS FROM JSON PLACEHOLDER</p>
        <div className='flex flex-wrap justify-between px-[70px]'>
            {photos?.map((photo) => (
                <div className='flex flex-row items-center mt-4' key={photo.id}>
                    <img className='rounded-full h-20 w-20' src={photo.url} alt={`Photo ${photo.id}`} />
                </div>
    ))}
</div>

        
      
    </div>
}
export default Fetch