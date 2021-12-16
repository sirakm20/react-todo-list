import {useState,useEffect} from 'react'
import Header from  './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [addclosestatus,setAddCloseStatus] = useState(false);
  const  [tasks,setTasks] = useState([]);
  useEffect(()=>{
      const getTasks = async ()=>{
        const tasks_from_server = await fetchTasks();
        setTasks(tasks_from_server)
      }
      getTasks();
    },[]
  )
  //fetch tasks
  const fetchTasks = async ()=>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  //delte a task
  const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE'
    })
    setTasks(
      tasks.filter((task)=>task.id !==id)
    )

  };
  //toggle reminder
  const toggleReminder = async(id)=>{
    const task_to_toggle = await fetchTask(id);
    const updated_task = {...task_to_toggle,reminder:!task_to_toggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers : {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updated_task)
    })
    const data = await res.json();
    setTasks(
      tasks.map((task)=>(
        task.id === id ? {...task,reminder:data.reminder} : task
      ))
    )
  }
  //add Task
  const addTask = async (task)=>{
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newtask = {id,...task};
    // setTasks([...tasks,newtask]);
    const res = await fetch('http://localhost:5000/tasks',{
      method : 'POST',
      headers : {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks,data]);

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
