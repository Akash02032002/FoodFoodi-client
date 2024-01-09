import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://foodfoodiserver.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
