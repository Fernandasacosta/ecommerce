import Page from "@/components/template/Page";
import { ProvedorCarrinho } from "@/data/contextsapi/ContextoCarrinho";
import { ProvedorPagamento } from "@/data/contextsapi/ContextoPagamento";
import { ProvedorProdutos } from "@/data/contextsapi/ContextoProdutos";


export default function Layout(props: any) {
  return (
    <ProvedorProdutos>
      <ProvedorCarrinho>
        <ProvedorPagamento>
          <Page>
            {props.children}
          </Page>
        </ProvedorPagamento>
      </ProvedorCarrinho>
    </ProvedorProdutos>
  )
}