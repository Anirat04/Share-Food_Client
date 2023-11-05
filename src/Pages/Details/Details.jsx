import { useLoaderData } from "react-router-dom";

const Details = () => {
    // const [details , setDetails] = useState([])
    const takeDetails = useLoaderData()
    // const currentID = useParams()
 
    console.log(takeDetails)
    // console.log(takeDetails.id)
    // console.log(currentID)

    return (
        <div>
            <h1>This is details page donator name is: {takeDetails.Donator_name}</h1>
            <button>Request food</button>
        </div>
    );
};

export default Details;