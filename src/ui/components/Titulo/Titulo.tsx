import { TituloStyled, Subtitulo } from "./Titulo.style";

interface TituloProps{
    titulo: string;
    subtitulo?: string | JSX.Element;
}

export default function Tiulo(props: TituloProps){
    return (
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    )
}