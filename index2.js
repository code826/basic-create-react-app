const h1 = document.createElement('h1');
h1.innerText="Hii";
document.getElementById("container").append(h1);

/**
 * JS element creation
 */
// const h1 = document.createElement('h1');
// h1.innerText = "Hi Welome to React By JS";
// console.log('elemt-dom',h1);
// document.getElementsByTagName('body')[0].append(h1);

// React 

{/* <div>
<h1>Hello I am H1</h1>
<p>i am p </p>
</div> */}

//JSX --> <h1> {} ,<CompanentName/>

//const rootElement = React.createElement("h1",{},"Hi i am h1");
// const rootElement = <React.Fragment>
// <p>Hi</p> <h1>Hello</h1>
// </React.Fragment>

//h1,p
// function WelcomeFunction(){
//     return (
//         <h1>Hello i am h1</h1>
//     )
// }

// function App(){
//     return (
//         <div>
//             <TitleBar heading="Header"/>
//             <div className="card-group">
//                 <Card text="1"/>
//                 <Card text="2"/>
//                 <Card text="3"/>
//             </div>
           
//             <TitleBar heading="Footer"/>
//         </div>
//     )
// }

// function TitleBar(props){
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//         </div>
//     )
// }
// function Footer(props){
//     return (
//         <div>
//             <h1>Hi I am Footer</h1>
//         </div>
//     )
// }

// function Card(props){
//     return (
//         <div>
//             <p>{props.text}</p>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);






// const h1ReactElem = React.createElement('h1',{},'Welcome To React World');

// const h1Elem = React.createElement("h1",{id:"heading"},"Hello I am H1");
// const pElem = React.createElement("p",null,"Hi I am p");
// const divElem = React.createElement("div",{},[h1Elem,pElem]);

// const jsxElem = <div>
//     <h1>Hi I am H1</h1>
//     <p>Hi I am p</p>
//     </div>;
//JSX --> Javascript  XML --> extension of javacsript , sugar coated
//

const App = () =>{
    return (
        <div>
               <WelcomeMssg name="vikas" surname ={"singh"} block = "true" id = {1}/>
               <WelcomeMssg name="vishal" surname="sharma" id = {2}/>
        </div>
     
    )
}
//props

function sum(a,b){
    return a +b;
}
const WelcomeMssg =(props) =>{
    const {name,surname,block}= props;
    if(block){
        return (
            <h1>You are blocked {sum(2,5)}</h1>
        )
    }
    return (
        <h1>Welcome To React {props.id + ":" + name + " " +surname}</h1>

    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
a?c:d
const email ="abc@gmail.com";
const password = "123";
if(email == "abc@gmail.com"){
    if(password == "123"){
        return <h1>User Is Present</h1>
    }else{
        return <h1>Incorrect Passeord</h1>
    }
}else{
    return <h1>Invalid Email Id</h1>
}