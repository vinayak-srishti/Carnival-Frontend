import React,{useState} from 'react'
import axios from 'axios'


function Demo() {
    const[data,setdata]=useState({name:'',email:''})
    const fun1=(a)=>{
        setdata({...data,[a.target.name]:a.target.value})
        console.log(data)
    }
    const submitfn=(Event)=>{
        Event.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)

        })
        
    }
  return (
    <div className='d'>
        <form onSubmit={submitfn}>
       
            <input type='text' placeholder='name' onChange={fun1} name="name" value={data.name}></input><br></br>
            <input type='text' placeholder='email' onChange={fun1} name="email" value={data.email}></input><br></br>
            
            <button type='submit'>ok</button>

            </form>
        
    </div>
  )
}

export default Demo