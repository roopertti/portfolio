import styled from 'styled-components';

const Landing = styled.div`
    padding: 80px 60px;
    display: flex; 
    align-items: center;
    justify-content: space-around;

    h1 {
        font-size: 3.5em;
        font-weight: 600;
        margin: 20px 0;
        color: var(--primary);

        @media (max-width: )
    }

    div > img {
        width: 350px;

        @media (max-width: 1100px) {
            width: 300px;
        }

        @media (max-width: 995px) {
            width: 250px;
        }
    }

    div > a {
        display: inline-block;
        border: 1px solid var(--primary);
        border-radius: 3px;
        color: var(--primary);
        background: none;
        transition-duration: 0.5s;
        padding: 10px 10px;

        :hover {
            background: var(--primary);
            color: white;
        }
    }

    div {
        width: 550px;
        @media (max-width: 610px) {
            width: 100%;
        }
    }

    @media (max-width: 995px) {
        flex-direction: column-reverse;
        padding: 60px 40px
    }

    @media (max-width: 600px) {
        padding: 40px 20px;
    }
`;

export default Landing;