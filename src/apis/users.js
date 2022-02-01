import axios from 'axios';

export const getData = async () => {
    const response = await axios('/getdata');
    return response.data;
}


export const getUsers = async () => {
    const response = await axios('/users');
    return response.data;
}
