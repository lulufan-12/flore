const produtosDao = require('../database/ProdutosDao')
const Validator = require('../middlewares/validate')

const getAllProdutos = async (req, res) => {
    if(!Validator.getAllProdutos(req, res)){
        res.status(400)
        .json({
            success: false,
            message: "Erro de validação",
            data: null
        })
    }
    else{
        const limite = req.query.limite
        const pagina = req.query.pagina
        const offset = limite * (pagina - 1)
        const produtos = await produtosDao.getAllProdutos(limite, offset)
        res.json({
            success: true,
            message: null,
            data: produtos
        })
    }
}

const addProduto = async (req, res) => {
    if(!Validator.addProduto(req, res)){
        res.status(400)
        .json({
            success: false,
            message: "Erro de validação",
            data: null
        })
    }
    else{
        const {nome, descricao, preco, sku, categoria, highlight} = req.body
        const produto = {
            nome,
            descricao,
            preco,
            sku,
            categoria,
            highlight
        }
        const success = await produtosDao.addProduto(produto)
        if(success){
            res.json({
                success: true,
                message: "Produto adicionado com sucesso",
                data: null
            })
        }
        else{
            res.json({
                success: false,
                message: "Falha ao adicionar o novo produto",
                data: null
            })
        }
        
    }
}

const updateProduto = async (req, res) => {
    if(!Validator.updateProduto(req, res)){
        res.status(400)
        .json({
            success: false,
            message: "Erro de validação",
            data: null
        })
    }
    else{
        const {nome, descricao, preco, sku, categoria, highlight} = req.body
        const produto = {
            nome,
            descricao,
            preco,
            sku,
            categoria,
            highlight
        }
        const success = await produtosDao.updateProduto(produto)
        if(success){
            res.json({
                success: true,
                message: "Produto alterado com sucesso",
                data: null
            })
        }
        else{
            res.json({
                success: false,
                message: "Falha ao alterar o novo produto",
                data: null
            })
        }
    }
}

const removeProduto = async (req, res) => {
    if(!Validator.removeProduto(req, res)){
        res.status(400)
        .json({
            success: false,
            message: "Erro de validação",
            data: null
        })
    }
    else{
        const sku = req.body.sku
        const success = await produtosDao.removeProduto(sku)
        if(success){
            res.json({
                success: true,
                message: "Produto excluído com sucesso",
                data: null
            })
        }
        else{
            res.json({
                success: false,
                message: "Erro ao excluir o produto",
                data: null
            })
        }
    }
}

module.exports = {
    getAllProdutos,
    addProduto,
    removeProduto,
    updateProduto
}