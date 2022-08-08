import api from '.'

export const addCategory = async (category) => {
    return await api.post('/category', category);
}

export const getCategories = async () =>{
    return await api.get('/category').then(res => res.data);
}