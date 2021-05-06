const connect = async () => {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection
    
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_URL,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_SECRET,
        database: process.env.DATABASE_NAME
    })
    console.log("Conectado ao banco de dados.")
    global.connection = connection
    return connection
}
const getAllProdutos = async (limite, offset) => {
    const conn = await connect()
    const sql = "SELECT * FROM produtos LIMIT ? OFFSET ?"
    try{
        const [rows, fields] = await conn.execute(sql, [limite, offset])
        return rows
    }
    catch(err){
        return err
    }
}
const addProduto = async (produto) => {
    const conn = await connect()
    const sql = "INSERT INTO produtos (nome, descricao, sku, cod_categoria, preco, highlight) VALUES (?,?,?,?,?,?)"
    const data = [
        produto.nome,
        produto.descricao,
        produto.sku,
        produto.categoria,
        produto.preco,
        produto.highlight
    ]
    try{
        await conn.execute(sql, data)
        return true
    }
    catch(err){
        console.log(err)
        return false
    }
}

const removeProduto = async (sku) => {
    const conn = await connect()
    const sql = "DELETE FROM produtos WHERE sku = ?"
    try{
        await conn.execute(sql, sku)
        return true
    }
    catch(err){
        console.log(err)
        return false
    }
}

const updateProduto = async (produto) => {
    const conn = await connect()
    const sql = "UPDATE produtos SET nome = ?, descricao = ?, sku = ?, cod_categoria = ?, preco = ?, highlight = ? WHERE sku = ?"
    const data = [
        produto.nome,
        produto.descricao,
        produto.sku,
        produto.categoria,
        produto.preco,
        produto.highlight,
        produto.sku
    ]
    try{
        await conn.execute(sql, data)
        return true
    }
    catch(err){
        console.log(err)
        return false
    }
}

module.exports = {
    getAllProdutos,
    addProduto,
    removeProduto,
    updateProduto
}