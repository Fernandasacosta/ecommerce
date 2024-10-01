import Especificacoes from "./Especificacoes"
import Precificavel from "./Precificavel"

// heranca
export default interface Produto extends Precificavel{
  id: number
  nome: string
  descricao: string
  marca: string
  modelo: string 
  imagem: string
  nota: number
  tags: string[]
  especificacoes: Especificacoes 
}