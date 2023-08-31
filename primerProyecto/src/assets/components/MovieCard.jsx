 export const MovieCard = (props) =>
 {
    const {name, onCheckTimeClick} = props;
    function handleClick (){
        console.log(`time for ${name}`);
        onCheckTimeClick(name);
    }
    return(
        <li>
            <article>
                <h3>{name}</h3>
                <button onClick={handleClick} >Check Time</button>
            </article>
        </li>
    );
 };