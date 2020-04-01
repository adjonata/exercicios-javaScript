// Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação:
// Todo aluno recebe uma nota de 0 a 100.
// Alunos com nota abaixo de 40 são reprovados.
// As notas possuem a seguinte regra de arredondamento:
// Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3,
// arredondar a nota para esse próximo múltiplo de 5.
// Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.
// Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40
// e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno.
// No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado

function aprovarOuReprovar(alunos) {
  alunos.forEach(aluno => {
    const { nome, nota } = aluno
    if(nota < 38) {
      console.log(`Aluno(a) ${nome} foi reprovado, nota ${nota}!`)
    }
    else {
      let diferenca = nota % 5
      let notaOficial = diferenca >= 3 ? (parseInt((nota / 5).toString().split('.')[0]) + 1) * 5 : nota
      console.log(`Aluno(a) ${nome} foi aprovado, nota ${notaOficial > nota ? `arredondada de ${nota} para ${notaOficial}` : notaOficial}!`)
    }
  })
}

const alunos = [
  { nome: 'Alex', nota: 70 },
  { nome: 'Diego', nota: 32 },
  { nome: 'Marcelo', nota: 74 },
  { nome: 'Maria', nota: 72 },
  { nome: 'Ana', nota: 38 },
  { nome: 'Amanda', nota: 62 },
  { nome: 'Cristiane', nota: 27 },
  { nome: 'Clariane', nota: 39 },
  { nome: 'Paulo', nota: 37.9 },
]

aprovarOuReprovar(alunos)