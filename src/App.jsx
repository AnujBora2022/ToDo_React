import { useEffect, useState } from 'react'


import {v4 as  uuidv4}  from 'uuid';
function App() {


 const [todo, setTodo] = useState("")//this todo is edit todo
 const [todos, setTodos] = useState([])//this todos is an array of todo
 const [showFinished, setShowFinished] = useState(true)
  

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
    
  },[])

  // const saveToLS = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  
  // }
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
      
    }, [todos])
    
 
  const toggleFinished= ()=>{
  }

  const handleEdit = (e, id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }



  const handleDelete = (e, id)=>{
    // console.log(`The id is ${id}`)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }
 
  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    
    setTodo("")
    saveToLS()
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  
  const handleCheckbox=(e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    
    setTodos(newTodos)
    saveToLS()
    
  }
  
  
  return (
    <>
    
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a ToDo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-1/2'/>
        <button className='bg-violet-800 p-2  py-1 hover:bg-violet-950 text-sm font-bold mx-6 text-white rounded-md disabled:bg-red-700' disabled={todo.length<= 3} onClick={handleAdd}>Save</button>
        
      </div>
      <input type='checkbox'checked={showFinished}/> Show Finished
        <h2 className='text-lg font-bold'>
          Your ToDos
        </h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'> No Todos to Display</div>}
          {todos.map(item=>{
            return <div key={item.id} className="todo flex w-1/2 my-3 justify-between">
            <div className='flex gap-5 mx-3'>
            <input type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted}  id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            
            <div className="buttons flex h-full">
              <button className='bg-violet-800 p-2  py-1 hover:bg-violet-950 text-sm font-bold mx-2 text-white rounded-md' onClick={(e)=>{handleEdit(e, item.id)}}>Edit</button><button className='bg-violet-800 p-2  py-1 hover:bg-violet-950 text-sm font-bold mx-2 text-white rounded-md'onClick={(e)=>{handleDelete(e,item.id)}}>Delete</button>
            </div>
          </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
