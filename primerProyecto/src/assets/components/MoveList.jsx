import { MovieCard } from "./MovieCard"


export const MoveList = (props) => 
{
    const { list } = props;
    const handleCheckTime = (movieName) => {
        console.log(`Check time clicked from ${movieName}`)
    }
    return(
        <ul>
            {
                list.map((movie) => (
                <MovieCard name={movie.name} onCheckTimeClick={handleCheckTime} />
                ))
            }
    </ul> 
    );
};