import { useEffect, useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [todos,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); // state update
  }

  const addToDoHandler = (item) => {
    // console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <div className="bg-black h-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-teal-400">
            <h1 className='p-2 text-center text-4xl '>To Do App</h1>
            <Input handler={addToDoHandler} />
            <Box data={todos} removeHandler={removeToDo}/>
        </div>
    </div>
  );
}

export default App;