import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_ACC_TKN = " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTRhODllNzQyM2JiMDQ4YzA1YmNhZjJjOTc0ZDIyMSIsInN1YiI6IjY0YzIwYjhmMDk3YzQ5MDExZDgzMzQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJkFX9LJ6tRPqB8PCCMbgjm3qjCuT7KsPjyZd4pfKq0";

const headers = {
    Authorization:"bearer "+TMDB_ACC_TKN
};

export const fetchDataFromAPI = async (url,params) => {
    try{
        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    }catch(e){
        console.log(e);
        return e;
    }

}