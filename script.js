console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('             Larissa Vilela          ')
console.log('--------------------------------------')
//Regras
// Validação de produto existente pelo id. Caso não encontre o produto, apresentar uma mensagem de erro e solicitar novamente um id válido.

// Validação de quantidade para não permitir valores negativos.

// Validação de cupom de desconto. Não aceitar cupom acima de 15% de desconto.

// Criação de uma classe chamada Pedido contendo no constructor pelo menos as seguintes informações:

// a lista de produtos
// o valor de cupom
// A classe Pedido deve conter os métodos:

// que calcule a quantidade de itens totais no carrinho
// que calcule o valor subtotal (quantidade de itens multiplicado pelo preço unitário)
// que calcule o valor de desconto (subtotal multiplicado pelo desconto)
// que calcule o valor total (subtotal menos o desconto)
//------------------------------------------------------------------------

//vamos instanciar, o nosso banco de dados
const db = require('./database')
const pegarEntrada = require('readline-sync')

const { produtos } = db
//verificar se veio
//console.table(produtos)
// Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo database.js
produtos.sort(function(a,b){return a.preco - b.preco});

const produtosCategoria = pegarEntrada.question('Voce deseja encontrar os produtos por categoria?(S/N)');
if (produtosCategoria.toLocaleUpperCase()=="S"){
    console.log('Essas sao as categorias disponiveis:') 
    console.log('alimento', 'informática', 'casa', 'higiene','bebida',)
    const qualCategoria = pegarEntrada.question('Qual vc escolheu?')
    const categorias = produtos.filter(produtos => produtos.categoria === qualCategoria)
    console.table(categorias)
}else{
    console.log('Esses são todos os produtos: ')
    console.table(produtos)
}
//pega produtos pelo id
const qualId = pegarEntrada.question('Qual o id do produto que vc deseja?(S/N)');
if (qualId <= 8){
    const idProduto = produtos.filter(produtos => produtos.id === qualId)
    console.table(idProduto)
}else{
    console.log("id não localizado")
}
//quantidade de produtos
const quantidade = pegarEntrada.question('quantos voce quer?'); //quero 3 x id
//tem cupom de desconto
//adicionar no carrinho 
//Calcular o valor do subtotal (sem considerar o desconto)
//Calcular o valor de desconto
//Calcular o valor total (considerando o desconto do cupom)
