import { Helmet } from "react-helmet";
import BasicTable from "../../ReactTable/BasicTable";

const ManageMyFoods = () => {
    return (
        <div>
            <Helmet>
                <title>ShareFood | Manage My Foods
                </title>
            </Helmet>
            <BasicTable></BasicTable>
        </div>
    );
};

export default ManageMyFoods;