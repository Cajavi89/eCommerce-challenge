const URL = "/data.json"

const Fetch = async () =>{

  return fetch(URL)
    .then(res=>res.json())
    .catch((e)=>console.log(`Error: ${e.message}`))


}

export default Fetch
