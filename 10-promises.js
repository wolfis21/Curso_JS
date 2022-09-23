
// Promises

const getData1 = (error) => new Promise((resolve, reject)=>{
    if(!error){
        setTimeout(()=>{
            resolve({
                nombre: 'Isaac',
                apellido: 'alejandr',
                cedula: 232324
            })
        },3000)
    }else{
        reject('No pudimos obtener los datos')
    }
    })

    console.log("Ïnicio");
getData1(false)
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    console.log("Fin");

    // const getData2 = new Promise((resolve, reject) =>{

// }) 

//estudiar y repasar un poco mas, poco entendimiento