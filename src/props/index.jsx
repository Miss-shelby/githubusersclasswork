const LearnProps=()=>{
    const names = [
        {name:'clara',os:'ubuntu'},
        {name:'shelby',os:'windows'},
        {name:'salem',os:'mac'}
    ]
    const students= names.map((item)=>   ({...item,pcItem:`${item.name} ${item.os}`}))
    return (
        <>
        <div>
          {students.map((item,i)=>(
            <div key={i}>
                <h1>{item.pcItem}</h1>
            </div>
          ))}
        </div>
        <User fname='silas' lname='okoli' country='uk'/>
        </>
    )
}
export default LearnProps 
export const User =(props)=>{
  return <>
  <div className='bg-gray-500 mt-10 h-[400px]'>
    {props.fname}
    {props.lname}
    <small>He lives in {props.country}</small>
    <Skills skill={skills} />
    <Header data= {data}/>
    <Button onClick={sayHello} text='hi welcome' />
    <Button onClick={greetUser} text='compliments of the season' />
    </div>
   
    
    </>
}
export const Header = (props)=>{
  console.log(props)
  return <>
    <div>
      {/* <p>{props.welcome} </p> */}
      <p>{props.data.welcome}</p>
      <p>{props.data.title}</p>
      <p>{props.data.subtitle}</p>
      <Status status={status}/>
    </div>
  </>
}
const data = {
  welcome: 'Welcome to 30 Days Of React',
  title: 'Getting Started React',
  subtitle: 'JavaScript Library',
}
const welcome ='welcome to 30days of react Ammie'
//boolean props
export const Status =(props)=>{
  let stats= props.status? 'old enough to drive':'you are still young'
  return <p>{stats}</p>
}
const currrentYear = 2024
const birthYear = 2017
const age = currrentYear - birthYear
const status = age >=18
//array props
export const Skills = (props)=>{
  const skillsList = props.skill.map((skill)=><li>{skill}</li>)
  return  <>
  <ul>{skillsList}</ul>
  
 </>
}
const skills=['html','css','javascript','inshalla']
//passing props as a function using a button component
export const Button = (props)=>{
  return <>
   <button className='btn btn-secondary' onClick={props.onClick}>{props.text}</button>
  </>
}
const sayHello=()=>{
  alert("Hello smarty Ammie")
}
const greetUser=()=>{
  alert("Happy Easter BigTee")
}