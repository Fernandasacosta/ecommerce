import { IconDevicesPcOff } from '@tabler/icons-react'
import Link from 'next/link'

export interface ProdutoNaoEncontradoProps {
    semBotaVoltar?: boolean
}

export default function ProdutoNaoEncontrado(props: ProdutoNaoEncontradoProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-gray-300">
            <IconDevicesPcOff size={180} stroke={0.5} />
            <span className="text-slate-800 font-light">Produto não encontrado</span>
            {!props.semBotaVoltar && (
                <Link href="/" className="button bg-white text-slate-900 mt-5">
                    Voltar
                </Link>
            )}
        </div>
    )
}
