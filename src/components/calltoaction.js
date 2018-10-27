import styled from 'styled-components';

const CallToAction = styled.div`
    background: linear-gradient(120deg, var(--adjacent2), var(--adjacent1));
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 60px 20px;
    color: white;

    div {
        text-align: center;
        width: 300px;
        

        @media (max-width: 800px) {
            width: 300px;
            margin: 10px 0;
        }
    }

    p {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
    }

    span {
        font-size: 3em;
        display: block;
        text-align: center;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export default CallToAction;