import controllerStudent  from '../controller/Student.js'

const CreateStudents = ({state}) => { 

    const handleSubmit = (event) =>{
        
        if(document.getElementById("name") && document.getElementById("taskadd")){
            
            const valueInputName = document.getElementById("name").value;
            const valueInputTask = document.getElementById("taskadd").value;
            controllerStudent(valueInputName, valueInputTask)
            .then((result) =>{
                state(result)
            })
            .catch(error => console.log(error))
        }
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <form onSubmit={(event) => {event.preventDefault()}}>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">STUDENTS</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="taskadd" className="form-label">TASK</label>
                            <input type="text" className="form-control" id="taskadd" required/>
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit}>ADD</button>
                    </form>
                </div>
            </div>
             
        </div>
    )
}

export default CreateStudents