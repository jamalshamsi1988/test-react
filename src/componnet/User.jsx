import { useState } from "react";
import { useEffect } from "react";

const User = () => {
  const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
const[id,setId]=useState("")

  useEffect(() => {
    // setTimeout(()=>console.log("useEffect run"),3000)

    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));

    const fecthData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await res.json();
      setData(json);
    //   console.log(json)
    };
    fecthData();

//    try{
//      fetch("https://jsonplaceholder.typicode.com/photos")
//        .then((response) => response.json())
//       .then((json) => setData(json));
//    }catch(err){
//     setError(true)
//    }
console.log("useEffect Run")

  }, [id]);

const searchHandler=async()=>{
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
 const json = await res.json();
//  setData(json);
 console.log(json);
}

  return (
    <div>
      {/* {!data.length && <h1>Loading...</h1>} */}
      <h3>User</h3>
      <input type="text" value={id} onChange={e=>setId(e.target.value)} />
      <button onClick={searchHandler}>Search</button>
      <ul>
        {/* {data.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))} */}
      </ul>
      {/* {error && <h1>somthing went wrong</h1>
      } */}
    </div>
  );
};

export default User;
