//Responsavel para fazer integração com o banco de dados
import axios from 'axios'

const api = axios.create({
    //URL padrao em todas as chamadas
    baseURL: 'http://localhost:3333'
})

export default api;