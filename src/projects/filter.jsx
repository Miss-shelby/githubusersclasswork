import { useState } from "react"
import { FaCheck } from 'react-icons/fa';

const fruits=[
    "Apple","Banana","Carrot","Date","Eggplant","Fig","Grape",'kiwi','orange'
]
export const SearchItem =()=>{
    const [search,setSearch] = useState('')
    console.log(search)
    return <>
    <div className='bg-gray-500 text-gren-200 h-[500px] pt-[10px] pb-[10px]'>
    <p>FILTER </p>
    <input className="bg-white border border-x-stone-950 mt-[20px]" type='text' onChange={(e)=> setSearch(e.target.value)} />
       
        <ul>
          {fruits.filter((fruit)=>{
            return fruit.toLowerCase().includes(search.toLowerCase())
            // return fruit.toLowerCase().startsWith(search.toLowerCase()? fruit :'fruit not found')
          }).map((fruit,index)=>{
            return <li key={index}>{fruit}</li>
           })}
        </ul>
    </div>
    <ColorPicker/>
    </>
}

//created a color array of colors and name
const colors = [
    { "color": 'red', "colorName": 'bg-red-500' },
    { "color": 'green', "colorName": 'bg-green-500' },
    { "color": 'blue', "colorName": 'bg-blue-500' },
    { "color": 'yellow', "colorName": 'bg-yellow-500' },
];


export const ColorPicker = () => {
    //set our bgcolor to state
    const [bgColor, setbgColor] = useState('');
    
    const handleColor = (e) => {
        //get the value of our option element and use it to set the bgcolor
        const selectedColor = e.target.value;
        setbgColor(selectedColor);
    }

    return (
        <>
            <div className={`text-[#fff] py-[50px]`}>I am color picker</div>
                <select value={bgColor} onChange={handleColor} className='bg-white border-none w-[150px]' >
                    <option value="">select a color</option>
                    {colors.map((color, index) => (
                        <option key={index} value={color.colorName}> {color.color}
                         {bgColor === color.colorName && <FaCheck style={{ marginLeft: '4px' }} />} 
                          </option>
                    ))}   
                </select>
                <div className={` w-[150px] h-[150px] ${bgColor}`}>{bgColor}</div>
        </>
    );
};
