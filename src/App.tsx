
import Headerkomp from "./konponets/Headerkomp"
import Mainkomp from "./konponets/Mainkomp"

function App() {
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experienceOne = 'Figma UI for customer X'
  const experienceTwo = 'Website for customer Y'
  const email = 'student@hiof.no'

  return (
    <div>
      <Headerkomp></Headerkomp>
      <Mainkomp></Mainkomp>
    </div>
  )
}

export default App
