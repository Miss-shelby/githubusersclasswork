import { useState } from "react";
export const ClassWork = () => {
 const randomColors=[
    'bg-red-500',
    'bg-green-200',
    'bg-pink-200',
    'bg-yellow-200'
 ]
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [bgColor, setbgColor] = useState("bg-blue-500");
  const increment = () => {
    setValue((prevValue) => {
      let prev = prevValue + 1;
    //   prev == 5 ? setbgColor("bg-yellow-400") : "bg-blue-500";
       let index = Math.floor(Math.random()*randomColors.length) //wont give you the maximum value ,,,,,,
      setbgColor(randomColors[index])
      return prev;
      
    });
    
    // setValue((prevValue) => prevValue +1);
    console.log(value);
  };
  const changeName = () => {
    setName((prevValue) => (prevValue = "Ammie"));
  };
  return (
    <>
      <div className={`flex flex-col items-center justify-center h-screen ${bgColor}`}>
       <p>{bgColor}</p>
       <p>{value}</p>
        <button onClick={increment} className="btn btn-outline btn-secondary">
          COUNT
        </button>
        <button onClick={changeName} className="btn btn-outline btn-secondary">
          name
        </button>
        <p>newname:{name}</p>
      </div>
    </>
  );
};
