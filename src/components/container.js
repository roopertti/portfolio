import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    width: 900px;
    padding: 10px;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 1000px) {
        width: 800px;
    }

    @media (max-width: 900px) {
        width: 600px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default Container;