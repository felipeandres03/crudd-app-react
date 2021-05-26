import  {EditStudents} from '../controller/Student.js';


const ChecTask = ({checkElement, state}) => { 

     const handleCheked = (event) =>{
        
        let valueInput = event.target.checked;

        EditStudents(checkElement.id, checkElement.student, checkElement.task, valueInput)
            .then(data =>{
                state(data)
            })
            .catch(error => console.log(error))
     }

    return(
        <>
            <input type="checkbox" id="complete" onChange={handleCheked} autoFocus={true}/>
            <label htmlFor="complete"><i className="fas fa-pencil-alt Icheck"></i></label>
        </>
    )
}

export default ChecTask