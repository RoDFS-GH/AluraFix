import styled from "styled-components";
import { ContenidoParcial, Logo } from "../UI/Estilos";
import logo from '../../assets/img/logo.svg'

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.oscuro};
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme.primero};
`;
const LinkExterno = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primero};
    font-weight: 700;
    padding: 15px;
`;

const FooterContenido = styled(ContenidoParcial)`
    text-align: center;
    color: ${({ theme }) => theme.texto};
`;

export function PieDePagina() {
    return (
        <Footer>
            <FooterContenido>
            <LinkExterno href="/"><Logo src={logo} alt=""/></LinkExterno>
                &copy; 2023. Desarrollado por 
                <LinkExterno href="https://github.com/RoDFS-GH">Rosana Rojas</LinkExterno>
            </FooterContenido>
        </Footer>
    );
}