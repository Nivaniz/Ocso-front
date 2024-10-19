import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocations";

const LocationsPage = async () => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;

    const {data} = await axios.get<Location[]>("http://127.0.0.1:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data}></SelectLocation>
                </div>   
            </div>
            
        </div>
    );
}

export default LocationsPage;