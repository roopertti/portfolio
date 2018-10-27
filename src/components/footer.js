import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(120deg, var(--adjacent1), var(--adjacent2));
    padding: 60px 0 70px;
    color: white;

    @media (max-width: 500px) {
        flex-direction: column;
        padding: 40px;
    }

    div {
       width: 300px;

       @media (max-width: 700px) {
           width: 200px;
       }
    }

    div > ul {
        list-style: none;
        padding-left: 0;
        font-size: 18px;
    }

    div > a {
        margin-right: 15px;
        font-size: 1.6em;
    }

    div > ul > li {
        margin-bottom: 10px;
    }
`;

export default Footer;