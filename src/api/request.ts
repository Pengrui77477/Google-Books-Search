import axios from 'axios';
import { ElMessage } from 'element-plus';
import type { QueryBook } from '@/type/bookList'
const service = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    timeout: 5000
})
service.interceptors.request.use((config) => {
    if(config.params.q === ''){
        ElMessage.error('书籍名称不能为空')
    }
    return config
}, (err) => {

})



export const getBooks = (queryBook:QueryBook) => {
    return service({
        params: {
            key: import.meta.env.VITE_APP_API_KEY,
            q:queryBook.bookName,
            maxResults:queryBook.num
        }
    })
}

