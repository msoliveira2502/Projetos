let lancamentos = [
  // Janeiro
  {data:"2026-01-05", descricao:"Cartão Hiper", categoria:"Cartões", valor:291.00},
  {data:"2026-01-06", descricao:"Cartão Nu", categoria:"Cartões", valor:3306.00},
  {data:"2026-01-10", descricao:"Cartão BB", categoria:"Cartões", valor:1792.00},
  {data:"2026-01-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:5071.00},
  {data:"2026-01-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-01-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-01-22", descricao:"Seguro", categoria:"Serviços", valor:341.00},
  {data:"2026-01-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-01-26", descricao:"Luz", categoria:"Serviços", valor:90.00},
  {data:"2026-01-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:63.00},
  {data:"2026-01-28", descricao:"Água", categoria:"Serviços", valor:119.00},
  {data:"2026-01-30", descricao:"IPVA/Multas", categoria:"Impostos", valor:195.00},

  // Fevereiro
  {data:"2026-02-05", descricao:"Cartão Hiper", categoria:"Cartões", valor:291.00},
  {data:"2026-02-06", descricao:"Cartão Nu", categoria:"Cartões", valor:3768.00},
  {data:"2026-02-10", descricao:"Cartão BB", categoria:"Cartões", valor:1712.00},
  {data:"2026-02-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:6242.00},
  {data:"2026-02-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-02-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-02-22", descricao:"Seguro", categoria:"Serviços", valor:341.00},
  {data:"2026-02-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-02-26", descricao:"Luz", categoria:"Serviços", valor:250.00},
  {data:"2026-02-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:61.00},
  {data:"2026-02-28", descricao:"Água", categoria:"Serviços", valor:119.00},
  {data:"2026-02-29", descricao:"IPVA/Multas", categoria:"Impostos", valor:2160.00},

  // Março
  {data:"2026-03-05", descricao:"Cartão Hiper", categoria:"Cartões", valor:290.00},
  {data:"2026-03-06", descricao:"Cartão Nu", categoria:"Cartões", valor:4563.00},
  {data:"2026-03-10", descricao:"Cartão BB", categoria:"Cartões", valor:3322.00},
  {data:"2026-03-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:3521.00},
  {data:"2026-03-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-03-18", descricao:"Curso de Inglês", categoria:"Educação", valor:900.00},
  {data:"2026-03-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-03-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-03-26", descricao:"Luz", categoria:"Serviços", valor:141.00},
  {data:"2026-03-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:60.00},
  {data:"2026-03-28", descricao:"Água", categoria:"Serviços", valor:170.00},
  {data:"2026-03-30", descricao:"Manutenção Veicular", categoria:"Casa/Transporte", valor:5254.00},

  // Abril
  {data:"2026-04-06", descricao:"Cartão Nu", categoria:"Cartões", valor:5342.00},
  {data:"2026-04-10", descricao:"Cartão BB", categoria:"Cartões", valor:5342.00},
  {data:"2026-04-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:3361.00},
  {data:"2026-04-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-04-18", descricao:"Curso de Inglês", categoria:"Educação", valor:900.00},
  {data:"2026-04-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-04-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-04-26", descricao:"Luz", categoria:"Serviços", valor:200.00},
  {data:"2026-04-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:60.00},
  {data:"2026-04-28", descricao:"Água", categoria:"Serviços", valor:251.00},
  {data:"2026-04-30", descricao:"IPTU", categoria:"Impostos", valor:900.00},

  // Maio
  {data:"2026-05-06", descricao:"Cartão Nu", categoria:"Cartões", valor:4651.00},
  {data:"2026-05-10", descricao:"Cartão BB", categoria:"Cartões", valor:1622.00},
  {data:"2026-05-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:3467.00},
  {data:"2026-05-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-05-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-05-22", descricao:"Cartão Porto", categoria:"Cartões", valor:360.00},
  {data:"2026-05-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-05-26", descricao:"Luz", categoria:"Serviços", valor:200.00},
  {data:"2026-05-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:60.00},


  // Junho
  {data:"2026-06-06", descricao:"Cartão Nu", categoria:"Cartões", valor:3209.00},
  {data:"2026-06-10", descricao:"Cartão BB", categoria:"Cartões", valor:4341.00},
  {data:"2026-06-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:3563.00},
  {data:"2026-06-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-06-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-06-22", descricao:"Cartão Porto", categoria:"Cartões", valor:321.00},
  {data:"2026-06-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-06-26", descricao:"Luz", categoria:"Serviços", valor:511.00},
  {data:"2026-06-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:140.00},
  {data:"2026-06-28", descricao:"Água", categoria:"Serviços", valor:239.00},

  // Julho
  {data:"2026-07-06", descricao:"Cartão Nu", categoria:"Cartões", valor:3515.00},
  {data:"2026-07-10", descricao:"Cartão BB", categoria:"Cartões", valor:2384.00},
  {data:"2026-07-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:7391.00},
  {data:"2026-07-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-07-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-07-22", descricao:"Cartão Porto", categoria:"Cartões", valor:321.00},
  {data:"2026-07-25", descricao:"Internet", categoria:"Serviços", valor:112.00},
  {data:"2026-07-26", descricao:"Luz", categoria:"Serviços", valor:543.00},
  {data:"2026-07-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:129.00},
  {data:"2026-07-28", descricao:"Água", categoria:"Serviços", valor:250.00},

  // Agosto
  {data:"2026-08-06", descricao:"Cartão Nu", categoria:"Cartões", valor:2780.00},
  {data:"2026-08-10", descricao:"Cartão BB", categoria:"Cartões", valor:2425.00},
  {data:"2026-08-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:4125.00},
  {data:"2026-08-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-08-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5530.00},
  {data:"2026-08-22", descricao:"Cartão Porto", categoria:"Cartões", valor:321.00},
  {data:"2026-08-25", descricao:"Internet", categoria:"Serviços", valor:112.00},
  {data:"2026-08-26", descricao:"Luz", categoria:"Serviços", valor:128.00},
  {data:"2026-08-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:61.00},
  {data:"2026-08-28", descricao:"Água", categoria:"Serviços", valor:150.00},
  {data:"2026-08-30", descricao:"Manutenção Veicular", categoria:"Casa/Transporte", valor:2000.00},

  // Setembro
  {data:"2026-09-06", descricao:"Cartão Nu", categoria:"Cartões", valor:5040.74},
  {data:"2026-09-10", descricao:"Cartão BB", categoria:"Cartões", valor:1061.89},
  {data:"2026-09-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:5127.75},
  {data:"2026-09-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-09-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-09-22", descricao:"Cartão Porto", categoria:"Cartões", valor:321.00},
  {data:"2026-09-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-09-26", descricao:"Luz", categoria:"Serviços", valor:225.52},
  {data:"2026-09-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:162.76},
  {data:"2026-09-28", descricao:"Água", categoria:"Serviços", valor:228.08},
  {data:"2026-09-30", descricao:"IPTU", categoria:"Impostos", valor:0.00},
  {data:"2026-09-30", descricao:"IPVA/Multas", categoria:"Impostos", valor:0.00},

  // Outubro
  {data:"2026-10-06", descricao:"Cartão Nu", categoria:"Cartões", valor:3150.21},
  {data:"2026-10-10", descricao:"Cartão BB", categoria:"Cartões", valor:1858.36},
  {data:"2026-10-12", descricao:"Cartão Bradesco", categoria:"Cartões", valor:4752.56},
  {data:"2026-10-15", descricao:"Escola Miguel", categoria:"Educação", valor:1112.00},
  {data:"2026-10-20", descricao:"Financiamento Imobiliário", categoria:"Casa/Transporte", valor:5275.00},
  {data:"2026-10-22", descricao:"Cartão Porto", categoria:"Cartões", valor:321.00},
  {data:"2026-10-25", descricao:"Internet", categoria:"Serviços", valor:110.00},
  {data:"2026-10-26", descricao:"Luz", categoria:"Serviços", valor:250.00},
  {data:"2026-10-27", descricao:"Vivo+TIM", categoria:"Serviços", valor:130.00},
  {data:"2026-10-28", descricao:"Água", categoria:"Serviços", valor:250.00},
  {data:"2026-10-30", descricao:"IPTU", categoria:"Impostos", valor:0.00},
  {data:"2026-10-30", descricao:"IPVA/Multas", categoria:"Impostos", valor:0.00},
];

lancamentos.forEach((item,index)=>{
  item.id = index + 1;
});

