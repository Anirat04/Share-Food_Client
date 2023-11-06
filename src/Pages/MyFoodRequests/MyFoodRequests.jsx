import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../../Provider/Provider";

const MyFoodRequests = () => {
    const {user} = useContext(ProviderContext)
    const [userRequests, setUserRequests] = useState([]);

    const url = `http://localhost:5000/foodRequests?User_email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUserRequests(data))
    },[])

    console.log(userRequests)
    return (
        <div>
            <h1>Your request are: {userRequests.length}</h1>
        </div>
    );
};

export default MyFoodRequests;