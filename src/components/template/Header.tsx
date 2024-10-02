import IconeCarrinho from '../shared/IconeCarrinho'
import Link from 'next/link'
// import useCarrinho from '@/data/hooks/useCarrinho'

export default function Header() {
    const qtdeItens = 0
    // const { qtdeItens } = useCarrinho()
    return (
        <div
            className="flex flex-col h-20 bg-[#1E6E57] text-slate-100"
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    Logo
                    <Link href="/checkout/carrinho">
                        <IconeCarrinho qtdeItens={qtdeItens} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
