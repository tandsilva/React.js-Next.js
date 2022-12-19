// // eh uma forma de uma funcao chamar outra O povo chama de MiddleWare patern
// //criou uma funcao que vai disparar outra 
 const passo1 = (funcionarios,next)=>{
    funcionarios.firstName='Julian'
     next()
 }
 const passo2 = (salarioFuncioanrios,next)=>{
    salarioFuncioanrios.Salario = 1200
     next()
 }

const passo3 = contratoTrabalho=> contratoTrabalho.tempo = '3 meses'  

// //vou tentar te facilatar ao  maximo no final das contas eu ja to ficando loco
//a funcao vai receber um array de funcoes vai trabalhar de acordo com seu tamanho
 //estes ... pontos sao o operador rest junta as funcoes
 function ArrayDeFuncoes(pegaArrayFuncoes, ...middlwares) {
     const execMiddleWare = indice => {
         middlwares && indice < middlwares.length &&
             middlwares[indice](pegaArrayFuncoes, () => execMiddleWare(indice + 1))
     }
     execMiddleWare(0) //quando terminar o tamanho do array cai aqui e sai
 }

 const BujaoDeFuncoes = {}
 ArrayDeFuncoes(BujaoDeFuncoes,passo1,passo2,passo3)

 console.log(BujaoDeFuncoes)


// const passo1 = (ctx ,next)=>{
//     ctx.valor1 = 'mid1'
//     next()
// }


// const passo2 =(ctx ,next)=>{
//     ctx.valor2 ='mid2'
//     next()
// }

// const passo3 = (ctx, ...middleware)=>{
//     const execPasso =indice =>{
//         middleware  && indice <middleware.length &&
//         middleware[indice](ctx,()= execPasso(indice+1))
//     }
//     execPasso(0)
// }

// const ctx ={

// }

// exc(ctx,passo1,passo2,passo3)
// console.log(ctx)