import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://server-taupe-three.vercel.app/'
});

const useAxiosSecure = () => {



    return [axiosSecure]
}
export default useAxiosSecure;