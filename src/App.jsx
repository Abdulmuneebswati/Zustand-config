
import './App.css'
import Courseform from './Components/Courseform'
import Courselist from './Components/Courselist'

function App() {

  return (
    <div className="main-container">
      <div className="main-container">
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course list</h1>
      <Courseform/>
      <Courselist/>
    </div>
    </div>
  )
}

export default App
