import { useCount } from "./useCount"
import { useFetch } from "./useFetch";
const MyHooks = () => {
    const {count,increase,decrease} = useCount(1,10);
    const data = useFetch ("https://jsonplaceholder.typicode.com/users");
  
return (
    <div>MyHooks
        <h2>Count</h2>
        <button onClick={decrease}> - </button>
        <strong> {count} </strong>
        <button onClick={increase}> + </button>

        <hr />

        <h2>Fetch de datos</h2>
        {data && data.map ((usuario)=> <p key={usuario.id}>{usuario.name}</p>)}
    </div>
  )
}

export default MyHooks