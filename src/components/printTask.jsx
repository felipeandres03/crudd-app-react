import {useState, useEffect} from 'react'
import  {DeleteStudent} from '../controller/Student.js'
import ChecTask from "./todoItem";



const PrintTask = ({tasks, state}) =>{

    const [work, setWork] = useState(tasks);

    useEffect( () =>{
        if(tasks){
            setWork(tasks)
        }        
    },[tasks])

    const handledelete = (event) =>{
        const value = event.target.value;
        DeleteStudent(value)
        .then(data =>{
            state(data)
        })
    }

   

   return (
       <div className="row">
           {work.map((element, index)=>{
               return(
                   <div className="col-sm-12 col-md-12 col-lg-12" key={index}>
                        <div className="row">
                            <div className="task" id="task">
                               <div className="row">
                                    <div className="col-2">
                                    <div>
                                    <i className="far fa-file-alt"></i>
                                    </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="rowTask">
                                            <div className="form-text">
                                                Name:  {element.student}
                                            </div>
                                            <div>
                                                Task:  {element.task}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                    <button value={element.id} onClick={handledelete}>delete</button>
                                    <i className="far fa-trash-alt"></i>
                                </div>   
                               </div>
                               <div className="rowTask">
                                    <div>
                                        <ChecTask checkElement={element} state={state}/>{String(element.isCompleted)}
                                    </div>
                                </div>

                            </div>
                        </div>
                   </div>
               )
           })}
       </div>
   )

   
    
}

export default PrintTask

