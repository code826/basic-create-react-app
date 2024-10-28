// /**
//  * JS element creation
//  */
// // const h1 = document.createElement('h1');
// // h1.innerText = "Hi Welome to React By JS";
// // console.log('elemt-dom',h1);
// // document.getElementsByTagName('body')[0].append(h1);

// // React 

// {/* <div>
// <h1>Hello I am H1</h1>
// <p>i am p </p>
// </div> */}

// //JSX --> <h1> {} ,<CompanentName/>

// //const rootElement = React.createElement("h1",{},"Hi i am h1");
// // const rootElement = <React.Fragment>
// // <p>Hi</p> <h1>Hello</h1>
// // </React.Fragment>

// //h1,p
// // function WelcomeFunction(){
// //     return (
// //         <h1>Hello i am h1</h1>
// //     )
// // }

// // function App(){
// //     return (
// //         <div>
// //             <TitleBar heading="Header"/>
// //             <div className="card-group">
// //                 <Card text="1"/>
// //                 <Card text="2"/>
// //                 <Card text="3"/>
// //             </div>
           
// //             <TitleBar heading="Footer"/>
// //         </div>
// //     )
// // }

// // function TitleBar(props){
// //     return (
// //         <div>
// //             <h1>{props.heading}</h1>
// //         </div>
// //     )
// // }
// // function Footer(props){
// //     return (
// //         <div>
// //             <h1>Hi I am Footer</h1>
// //         </div>
// //     )
// // }

// // function Card(props){
// //     return (
// //         <div>
// //             <p>{props.text}</p>
// //         </div>
// //     )
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<App/>);






// // const h1ReactElem = React.createElement('h1',{},'Welcome To React World');

// // const h1Elem = React.createElement("h1",{id:"heading"},"Hello I am H1");
// // const pElem = React.createElement("p",null,"Hi I am p");
// // const divElem = React.createElement("div",{},[h1Elem,pElem]);

// // const jsxElem = <div>
// //     <h1>Hi I am H1</h1>
// //     <p>Hi I am p</p>
// //     </div>;
// //JSX --> Javascript  XML --> extension of javacsript , sugar coated
// //

// const App = () =>{
//     return (
//         <div>
//                <WelcomeMssg name="vikas" surname ={"singh"} block = "true" id = {1}/>
//                <WelcomeMssg name="vishal" surname="sharma" id = {2}/>
//         </div>
     
//     )
// }
// //props

// function sum(a,b){
//     return a +b;
// }
// const WelcomeMssg =(props) =>{
//     const {name,surname,block}= props;
//     if(block){
//         return (
//             <h1>You are blocked {sum(2,5)}</h1>
//         )
//     }
//     return (
//         <h1>Welcome To React {props.id + ":" + name + " " +surname}</h1>

//     );
// }
// 
const App = ()=>{
    var user = {'a':'hello'};
    var batmanImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhJRmK5nURW7l04Im5F-uisn9VGWFLj1S5A&s"
    const movieList = [
        {
            id:1,
            rating:7,
            imagUrl :batmanImgUrl,
            movieName:"batman"

        },
        {
            id:2,
            rating:10,
            imagUrl :batmanImgUrl,
            movieName:"superman"

        },
        {
            id:3,
            rating:6,
            imagUrl :batmanImgUrl,
            movieName:"ironman"

        },
        {
            id:4,
            rating:8.5,
            imagUrl :batmanImgUrl,
            movieName:"hulk"

        }
    ];
    return (
        <div className="movie-container">
            {!user && "User Not  Present"}
            <User/>
            {movieList.map((item)=>{
                return (
                    <MovieCard key ={item.id} rating = {item.rating} imgUrl= {item.imagUrl} movieName= {item.movieName}/>
                    )
                })
            };
    
        </div>
       
    )
}
const User= () =>{
    const email ="abc@gmail.com";
    const password = "123";
    // if(email == "abc@gmail.com"){
    //     if(password == "123"){
    //         return <h1>User Is Present</h1>
    //     }else{
    //         return <h1>Incorrect Passeord</h1>
    //     }
    // }else{
    //     return <h1>Invalid Email Id</h1>
    // }
    // return (
    //     <div>
    //         { (email == "abc@gmail.com")
    //         ?(password == "123")? <
    //             h1>User Is Present</h1>
    //                             :<h1>Incorrect Passeord</h1>
    //         :<h1>Invalid Email Id</h1>
    //         }
    //     </div>
        
    // );
    return email == "abc@gmail.com" && <h1></h1>;

}



const MovieCard = (props) =>{
    const {movieName,rating,imgUrl} = props;
    const imgrUrlThumpsUp = "data:image/jpeg;base64,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";
    const imgUrlThumpsDown = "data:image/jpeg;base64,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";
    let srcForIcon = imgUrlThumpsDown;
    if(rating >= 8){
        srcForIcon = imgrUrlThumpsUp;
    }
    return (
        <div className="movie-card">
            <img src= {imgUrl} height={100} width = {200} alt ="Movie"/>
            <h3>Movie Name : {movieName}</h3>
            {/* <p>Rating :{rating} <span><img src={srcForIcon} height={20} width={20}/></span></p> */}
            <p>Rating :{rating} <span>{rating >= 8.5?<img src={imgrUrlThumpsUp} height={20} width={20}/>:<img src={imgUrlThumpsDown} height={20} width={20}/>}</span></p>
            
        </div>
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(<App/>);