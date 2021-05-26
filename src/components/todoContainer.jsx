import {useEffect, useState} from 'react';
import {getStudenst} from '../controller/Student.js';
import CreateStudents from './CreateTodo';
import PrintTask from './printTask'
import '../css/styles.css'


const ContainerTodo = () =>{

    const [listTask, setListTalk] = useState("");
    const [state, setState] = useState("");

    useEffect( () => {  
        getStudenst()
            .then(data => {
                setListTalk(data.data.todos)
            })  
    },[state])    

        if(typeof listTask === "object"){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                           <PrintTask  tasks={listTask} state={setState}/>
                        </div>
                    </div>
        
                    <div className="createTask">
                        <CreateStudents state={setState}/>
                    </div>
                   
                </div>
             )
        }
        return null
    }


export default ContainerTodo