import {useState} from 'react'
const AddTask = ({onAddTask}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const  [reminder,setReminder] = useState(false);
    const onSubmitButton = (e)=>{
        e.preventDefault();
        if(!text || !day){
            alert('please add task!');
            return;
        }
        onAddTask({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className = 'add-form' onSubmit ={onSubmitButton}>
            <div className = 'form-control'>
                <label >Task</label>
                <input  type="text" placeholder = 'add task' value = {text} onChange = {(e)=>setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label >Date</label>
                <input type="text" placeholder = 'add date' value = {day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className = 'form-control form-control-check'>*
                <label>Reminder</label>
                <input type="checkbox" checked = {reminder} value = {reminder} onChange = {(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input className = 'btn btn-block' type="submit" value = 'save' />
        </form>
    )
}

export default AddTask
