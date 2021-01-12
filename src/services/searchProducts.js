import axios from 'axios';


export const searchProductByText = (query) => {
    return axios.get(`http://localhost:4000/api/items?q=${query}`).then((response) => {
        const {categories, items}  = response.data; 
        return {categories, items};
    }).catch((error) => {
        console.error('Hubo un problema con la petición Fetch:' + error.message);
        throw error;
    });
}

export const searchProductById = (id) =>{
    return axios.get(`http://localhost:4000/api/items/${id}`).then((response) => {
        const {item} = response.data;
        return {item};
    }).catch((error) => {
        console.error('Hubo un problema con la petición Fetch:' + error.message);
        throw error;
    })
}