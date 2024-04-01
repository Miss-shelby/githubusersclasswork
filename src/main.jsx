import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ClassWork} from './page/classwork.jsx'
import ViewImages from './page/imageView.jsx'
import LearnProps from './props/index.jsx'
import Count from './useState/index.jsx'
// import MyPromise from './promises/promise.jsx'
import {AxiosPageApi} from "./promises/promise.jsx"
import { InputFeild,CharacterCount } from './projects/project.jsx'
import {SearchItem} from  './projects/filter.jsx'
// import GithubUsers from './postman/postman.jsx'
import GithubUsers from './postman/api.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassWork/>  */}
    {/* <ViewImages/> */}
    {/* <LearnProps /> */}
    {/* <Count />
     */}
     {/* <MyPromise /> */}
     {/* <AxiosPageApi /> */}
     {/* <GithubUsers/> */}
     <SearchItem/>
     <InputFeild />
     <CharacterCount />
     {/* <ColorPicker /> */}
  </React.StrictMode>,
)
