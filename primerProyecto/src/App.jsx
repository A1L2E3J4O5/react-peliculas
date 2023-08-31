import Header from "./assets/components/Header"
import { MoveList } from "./assets/components/moveList"

const latestMovies = [
  {name: "The avengers 1"},
  {name: "fast and furios "},
  {name: "doctor strange"},
]
const childerMovies = [
  {name: "Minions"},
  {name: "Barbie "},
  {name: "ay no se"},
]

function App() {
  return (
    <>
      <Header />
      <MoveList list={latestMovies}/>
      <Header />
      <MoveList list={childerMovies}/>

    </>
  )
}

export default App
