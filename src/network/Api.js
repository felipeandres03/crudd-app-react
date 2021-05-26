import axios from'axios';

export default class Api {
 
    constructor(){
        
        this.URLcore = "https://todos-go.herokuapp.com/api/todos";
    }

    
    post(data){

        return new Promise ((resolve, reject) =>{

            axios.post(this.URLcore, data)
                .then(result =>{
                    resolve(result)
                })
                .catch(error => reject(error))
        })
    }

    get(){
        return new Promise ((resolve, reject) =>{

            axios.get(this.URLcore)
                .then(data => {

                    resolve(data)
                })
                .catch(error => reject(error))
        })
    }


    delete(id){
        return new Promise( (resolve, reject) =>{

            axios({
                method: 'DELETE',
                baseURL: `${this.URLcore}/${id}`,
                data: {
                    id
                }
            })
            .then(data =>{
                resolve(data)
            })
            .catch(error => reject(error))
        })
    }


    put(id, data){
        return new Promise((resolve, reject)=>{
            axios({
                method:"PUT",
                baseURL: `${this.URLcore}/${id}`,
                data:{
                    student : data.name,
                    task: data.task,
                    isCompleted: data.isCompleted
                }
            })
            .then( data =>{
                resolve(data)
            })
            .catch(error => reject(error))
        })
    }


}