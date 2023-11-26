import fetch from "node-fetch";

const api = (req:Request,res:Response) =>{
    const url = 'https://api.themoviedb.org/3/discover/movie';
const queryParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc'
};

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmU4ZDllMzdkM2MxOTIzMTkyY2JmYzc4YTQzMTUyOCIsInN1YiI6IjY1NjJiYjcwNzA2ZTU2MDBjNGJiNTI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MKaMIq2Idzkt_z7sq2LNRcZaD5yUqCLXtogQTUdslx4'
    }
};
console.log(queryParams)
const queryString = new URLSearchParams({
    ...queryParams,
    include_adult: String(queryParams.include_adult),
    include_video: String(queryParams.include_video),
    page: String(queryParams.page)
}).toString();
const fullUrl = `${url}?${queryString}`;

fetch(fullUrl, options)
    // .then(data => res.send(data))
    // .then(json => console.log(json))
    // .catch(err => console.error('error:' + err));

}

export default api;