import { 
    CabecalhoContainer,
    Logo
} from './Cabecalho.style';

export default function Cabecalho() {
    return (
        <CabecalhoContainer>
            MENSAGEM DE TESTE
            <Logo src="/imagens/logo.svg" alt="Adote um Pet" />
            MENSAGEM DE TESTE
        </CabecalhoContainer>
    );
}