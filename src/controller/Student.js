import Model from '../models/Student';
import Edit from '../models/EditStudents'
import Api  from '../network/Api';


const CreateStudent = async (name, task) => {

    const student = new Model (name,task);
    const api = new Api();

    let result = await api.post({
        student: student.name,    
        task: student.task,
    })

    return result
}

export const getStudenst = async () => {
    
    const api  = new Api();

    let allstudents = await api.get();

    return(allstudents)
}


export const DeleteStudent = async (id) =>{

    const api = new Api();

    let deleteStudent = await api.delete(id)

    return(deleteStudent)
}

export const EditStudents = async (id, name, task, isCompleted) =>{

    const api = new Api(); 
    const complete = new Edit(name, task, isCompleted);
   
    let result = await api.put(id, complete);

    return(result)

}


export default CreateStudent;
