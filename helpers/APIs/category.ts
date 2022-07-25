import api from '.'

export const addCategory = async (category) => {
    await api.post('/category', category);
}