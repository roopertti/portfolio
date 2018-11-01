import styled from 'styled-components';

const BigTitle = styled.h1`
    font-size: 2.8em;
    color: var(--primary);

    @media (max-width: 600px) {
        font-size: 2em;
    }
`;

export default BigTitle;