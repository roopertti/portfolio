import styled from 'styled-components';

const Highlights = styled.div`
    display: flex;
    justify-content: space-around;
    color: var(--adjacent2);
    text-align: center;
    padding: 50px 0 30px;
    color: var(--adjacent2);
    border-bottom: 2px solid var(--adjacent2);

    & > div {
        width: 33.3%;
    }

    div > div {
        font-size: 2.2em;

        @media (max-width: 900px) {
            font-size: 1.8em;
        }
    }

    @media (max-width: 900px) {
        padding: 30px 0 10px;
    }

    @media (max-width: 600px) {
        padding: 15px 0 5px;
        flex-direction: column;
        align-items: center;
    }

    h5 {
        font-size: 1.2em;

        @media (max-width: 900px) {
            font-size: 1em;
        } 
    }
`;

export default Highlights;