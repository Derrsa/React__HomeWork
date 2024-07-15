import './App.css'
import Input from "./components/inputs/input.tsx";
import Select from "./components/inputs/Select.tsx";
import {Button} from "./components/buttons/Button.tsx";
import SelectTime from "./components/inputs/SelectTime.tsx";
import {useContext} from "react";
import {SettingsContext} from "./components/Context.tsx";

function App() {
    const {category} = useContext(SettingsContext)
  return (
      <>
          <h1>Quizabro Codabro!</h1>
          <h2>Settings:</h2>
          <div className='main__wrapper'>
              <Input/>
              <Select category={'Categories'} options={category}/>
              <Select category={'Difficulty'}/>
              <Select category={'Type'}/>
              <SelectTime/>

          </div>
          <div className="btns-group">
              <Button title='Start quiz'/>
              <Button title='See my stats'/>
          </div>
      </>
  )
}

export default App
