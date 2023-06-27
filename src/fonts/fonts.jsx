import { createGlobalStyle } from 'styled-components';

//Composant permettant l'utilisation de la police Montserrat sur tout le site facilement

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        font-weight: 300;
        font-style: normal;
    }
`;