import {useState} from 'react'
import Header from  './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [addclosestatus,setAddCloseStatus] = useState(false);
  const  [tasks,setTasks] = useState([
    {id:1,
      text:"doctor's appointmet",
      day:'2021-11-28',
      reminder:false
    },

    {id:2,
      text:"Board Meeting",
      day:'2021-12-9',
      reminder:false
    },
    {id:3,
      text:"Soccer game",
      day:'2021-12-25',
      reminder:false
    }

  ]);
  //delte a task
  const deleteTask = (id)=>{
    setTasks(
      tasks.filter((task)=>task.id !==id)
    )

  };
  //toggle reminder
  const toggleReminder = (id)=>{
    setTasks(
      tasks.map((task)=>(
        task.id === id ? {...task,reminder:!task.reminder} : task
      ))
    )
  }
  //add Task
  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newtask = {id,...task};
    setTasks([...tasks,newtask]);
  }

  return (
    <div className="container">
      <Header title = 'my-todo-list' addclosestatus = {addclosestatus} onToggleAddClose = {()=>setAddCloseStatus(!addclosestatus)}/>
      {addclosestatus && <AddTask onAddTask = {addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDeleteTask = {deleteTask} onToggleReminder = {toggleReminder}/>) : ('No Tasks to show')}
    </div>
  );
}

export default App;
