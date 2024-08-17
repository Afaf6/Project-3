import './Section1.css'
function Section1(props){
    return (
        <div id="cardstyle">
        <h4>{props.Title}</h4>
        <p>{props.Label}</p>
        <img id="icon" src={props.Icon}/>
    </div>
        
    );
}
export default Section1;