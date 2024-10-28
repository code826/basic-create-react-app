var totalRuns = 0;
var totalWickets = 0;
const runs = [0,1,2,3,4,5,6,'w'];
const defaultCommentary = {
    0:"it's zero no run",
    1:"single",
    2:"double",
    3:"three",
    4:"four",
    5:"five",
    6:"it's a huge six",
    'w':"wickt"
}
const historyScores = [];
var hit = "";
let commentaryRef = React.createRef();

const App = () => {
    return (
        <div id="main-container">
            <ScoreCard/>
            <HistoryScoreCard/>
        </div>
       
    )
}
//event-handling
//

function handleFormSubmit(e){
    e.preventDefault();
    if(hit === ""){
        return;
    }
    let commentaryVal = commentaryRef?.current?.value;
    if(!commentaryVal){
        commentaryVal = defaultCommentary[hit] ? defaultCommentary[hit] :'';
    }
      if(hit == 'w'){
        totalWickets++;
    }
    if(!Number.isNaN(Number(hit))){
        totalRuns += Number(hit);
    }
    historyScores.unshift({
        score:hit,
        commentary:commentaryVal
    });
    hit = "";
    commentaryRef.current.value = "";
    renderTheApp();
}

function handleScore(val){
    if(totalWickets == 10){
        alert("No changes in score");
        return;
    }
    // if(val == 'w'){
    //     totalWickets++;
    // }
    // if(!Number.isNaN(Number(val))){
    //     totalRuns += Number(val);
    // }
    hit = val;
    //historyScores.unshift(val);
    renderTheApp(); 
}
const Test = () =>{
    console.log("hello");
    return (
        <h1>Test</h1>
    )
}

const  ScoreCard = () =>{
    return (
        <>
         <span className="score-card">
            <h1>Score : <span id="total-runs">{totalRuns}</span>/{totalWickets}</h1>
        </span>
            <div className="runs">
                {runs.map((item,index) =>{
                    return (
                        <button key ={index} onClick={()=>{handleScore(item)}}>{item}</button>
                    );
                })}
            </div>
            <form  className="score-form">
                <input type ="text" name="score" value = {hit}/>
                <input type= "text" ref={commentaryRef} placeholder = "Enter the commentary"/>
                <button type="submit" onClick={(e)=>{ handleFormSubmit(e)}}>Submit</button>
            </form>
        </>
       
    )
}
const HistoryScoreCard = () =>{
    return (
        <div className = "history-scorecard">
            {historyScores.length == 0 ? <h1>No History</h1> : historyScores.map((item,index) =>{
                return (
                    <div key = {index}>
                        <span className="left">{item.score}</span>:<span className="right">{item.commentary}</span>
                    </div>
                )
            })}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderTheApp(){
    root.render(<App/>);
}

renderTheApp();