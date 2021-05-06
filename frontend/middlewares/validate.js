import Validator from 'validatorjs'

const getAllProdutos = (req, res) => {
    const data = req.query
    const rules = {
        limite: 'required|integer|max:30|min:1',
        pagina: 'required|integer|min:1'
    }
    const validation = new Validator(data, rules)
    return validation.passes()
}
const addProduto = (req, res) => {
    const data = req.body
    const rules = {
        nome: 'required|string|max:255',
        descricao: 'required|string|max:512',
        preco: 'required|float',
        sku: 'required|string|max:255',
        highlight: 'bool',
        categoria: 'required|integer|max:30',
    }
    const validation = new Validator(data, rules)
    return validation.passes()
}
const removeProduto = (req, res) => {
    const data = req.body
    const rules = {
        sku: 'required|string|max:255',
    }
    const validation = new Validator(data, rules)
    return validation.passes()
}
const updateProduto = (req, res) => {
    const data = req.body
    const rules = {
        nome: 'required|string|max:255',
        descricao: 'required|string|max:512',
        preco: 'required|float',
        sku: 'required|string|max:255',
        highlight: 'bool',
        categoria: 'required|integer|max:30',
    }
    const validation = new Validator(data, rules)
    return validation.passes()
}

module.exports = {
    getAllProdutos,
    addProduto,
    removeProduto,
    updateProduto
}