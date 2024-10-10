import { useContext } from 'react'
import ContextoPagamento from '../contextsapi/ContextoPagamento'

const usePagamento = () => useContext(ContextoPagamento)
export default usePagamento
