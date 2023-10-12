import mysql from 'mysql2/promise';
// Ở đây, bạn đang import module mysql2/promise từ thư viện mysql2. 
// Module này cho phép bạn tạo kết nối đến MySQL và sử dụng Promises trong JavaScript, giúp việc xử lý bất đồng bộ trở nên dễ dàng 
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sakila',
};

const createPool = () => {
    return mysql.createPool(dbConfig);
};

export default createPool;