const ProdutosController = require('../../../controllers/ProdutosController')

const handler = async (req, res) => {
    switch(req.method){
        case "GET":
           ProdutosController.getAllProdutos(req, res)
        break;
        case "POST":
            ProdutosController.addProduto(req, res)
        break;
        case "PUT":
            ProdutosController.updateProduto(req, res)
        break;
        case "DELETE":
            ProdutosController.removeProduto(req, res)
        break;
        default:
            res.status(400)
            .json({
                success: false,
                message: "Método HTTP inválido",
                data: null
            })
    }
}
export default handler