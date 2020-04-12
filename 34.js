// Construa uma função que receberá duas Strings de tamanhos variados e que retornará
//True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verificarChars(string1, string2) {
  let caracIguais = 0
  string1.split('').forEach(char1 => {
    string2.split('').forEach(char2 => {
      if(char1 === char2) caracIguais++
    })
  })

  return caracIguais === string1.length
}

console.log(verificarChars('abc', 'accc'))