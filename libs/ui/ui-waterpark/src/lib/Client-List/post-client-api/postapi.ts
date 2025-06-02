import { error } from "console"
import { axios } from 'axios'            

export const postClientApi = async () => {

    const response = await axios.get("https://localhost:7240/WaterParkClient")
    if(!response.ok)
    {
        throw error("failed to fetch post postClientApi")
    }
    return response.json();
}