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
    console.log('------------------------------------------')
}
//pega produtos pelo id

const qualId = pegarEntrada.question('Qual o id do produto que vc deseja?');
    if(qualId <= produtos.length){
        //adiciona no carrinho
        const produtosPorId = produtos.find(produtos => produtos.id === parseInt(qualId));
        console.log('Produto Encontrado: ', produtosPorId.nome);
        const quantosId = pegarEntrada.question('Quantos voce deseja adicionar no seu carrinho de compras?')
        const quantosProdutosId = parseInt(quantosId);
        //carrinho de compras
        const carrinho = [];
            for (let i = 0; i < quantosProdutosId; i++){
                carrinho.push(produtosPorId);
            }
        console.log('---------------------------------------------')
        console.log('Esse é o seu carrinho de compras: ')
        console.table(carrinho);
        console.log('---------------------------------------------')
        //Perguntar se a cliente possue cupom de desconto
        const cupom = pegarEntrada.question('Tem cupom de desconto?(S/N)');
        if(cupom.toLocaleUpperCase() === 'S'){
            const qualCupom = pegarEntrada.question('Seu cupom e de quantos porcentos?Digite apenas o numero:');
            const qualCupomInteiro = parseInt(qualCupom);
            if(qualCupomInteiro <= 10){
            console.log('---------------------------------------------')
            console.log('seu cupom é de',qualCupomInteiro,'%');
            // Valor total do carrinho
            total = carrinho.reduce((prox, atual) => prox + atual.preco, 0)
            console.log('---------------------------------------------')
            console.log('Valor total do carrinho de compras:',total,'Reais')
            console.log('---------------------------------------------')
            const totalDeconsto = total -qualCupomInteiro/100 * total ;
            console.log('Com desconto de', qualCupomInteiro,'% seu valor total deu: ', totalDeconsto);
            console.log('---------------------------------------------')
            }else{
            console.log('Digite um cupom valido')
            }
        }else{
            console.log('Ok! vc não possue cupom de desconto');
            // Valor total do carrinho
            total = carrinho.reduce((prox, atual) => prox + atual.preco, 0)
            console.log('Valor total do carrinho de compras:',total,'Reais')
        }
    }else{
        console.log('Digite um ID valido');
    }
const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataHoje = hoje.toLocaleDateString('pt-BR', options)
console.log('Data da Compra: ', dataHoje)
