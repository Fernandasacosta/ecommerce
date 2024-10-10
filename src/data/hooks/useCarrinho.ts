import { useContext } from 'react'
import ContextoCarrinho from '../contextsapi/ContextoCarrinho'

const useCarrinho = () => useContext(ContextoCarrinho)
export default useCarrinho
