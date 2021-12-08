//  ( Basic and variables )
//  import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const fname = "Nagma"; 
// const lname = "Queen";
// ReactDOM.render(
//   <>
//  <h1>Hello World !!</h1>
//  <p>My name is {fname + " "+lname}</p>
//  <p>{`My name is ${fname} ${lname}`}</p>
//  <p> my lucky no. is {1+1}</p>
//  <p> i am so happy ....</p>
//  </>
//  ,document.getElementById("root")
// );

// ( Current Date and Time Challenge )

// const name = "Nagma";
// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <div>
// <p>Current Date is = {currdate}</p>
// <p>Current Time is = {currtime}</p>
// </div>
// </>
// ,document.getElementById("root")
// );

// (  Greeting challenge  )

// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css";

// let curDate = new Date();
// curDate = curDate.getHours();
// let greeting = " ";
// const cssStyle = {};

// if(curDate >= 1){
//     greeting = "Good Morning";
//     cssStyle.color = "green";
// }
// else if (curDate >= 13){
//     greeting = "Good Afternoon";
//     cssStyle.color = "Orange";
// }
// else{
//     greeting = "Good Night";
//     cssStyle.color = "Blue";
// }
// ReactDom.render(
//     <>
//     <h1>
//         Hello Sir,<span style={cssStyle}> {greeting} </span> 
//     </h1>
//     </>
//         ,document.getElementById("root")
//     );

// ( Try to use component.. )

// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css"
// import {add,sub,mult,div} from "./cal";

// import List from "./List";
// import Para from "./Para";
// import Name from "./Name";


// ReactDom.render(
//     <>
//    <h1>Calculator</h1>
//    <br></br>
//    <ul>
//        <li>ADD of two no is {add(40,7)}</li>
//        <li>SUB of two no is {sub(40,4)}</li>
//        <li>MULT of two no is {mult(40,7)}</li>
//        <li>DIV of two no is {div(40,4)}</li>
//    </ul>
//    </>
//     ,document.getElementById("root")
// );


// social media app project

// import React from "react";
// import ReactDom from "react-dom";
// import Card from "./Card";
// import "./index.css"
// import Sdata from "./Sdata"
// ReactDom.render(
//     <>
//    <h1 className = "heading" >Top 5 social Media Apps....</h1>
//    <br></br>
//  {Sdata.map((val) => {
//      return (
//       <Card
//       imgsrc = {val.imgsrc}
//       title = {val.title}
//       sname = {val.sname}
//       link = {val.links}
//       />
//      );
//  })}
//    </>
//     ,document.getElementById("root")
// );


// props work.......(pending)

// Hooks Start..

// import React from 'react';
// import ReactDom from "react-dom";
// import Hook1 from "./Hook1";
// import "./index.css";

// ReactDom.render(
// <>

// <Hook1/>
// </>
// ,document.getElementById("root")
// );


// biodata

// import React from 'react';
// import ReactDom from "react-dom";
// import UseStateArray from "./UseStateArray";

// ReactDom.render(
// <>
// <h1>
//     hello
// </h1>
// <UseStateArray/>
// </>
// ,document.getElementById("root")
// );

// Gigs project

import React from 'react';
import ReactDom from "react-dom";
// import Project1 from "./Project1";
// import Form from "./Form";
// import Todo from './Todo';
import Crypto from './Crypto';
// import GuessNo from './GuessNo';
// import Newapi from "./Newapi";
// import Screenwidth from "./Screenwidth";
// import Startnum from "./Startnum";
import "./index.css";
// import Login from "./Login";

ReactDom.render(
<>
{/* <Project1/> */}
{/* <Todo/> */}
<Crypto/>
{/* <GuessNo/> */}
{/* <Screenwidth/> */}
{/* <Startnum/> */}
// <Newapi/>
</>
,document.getElementById("root")
);
