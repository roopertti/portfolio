import React from 'react';
import styled from 'styled-components';

const SeparatorWrapper = styled.div`
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;

    span {
        height: 8px;
        width: 18px;
        background-color: var(--primary);
        display: inline-block;
    }
`;

const Separator = () => (
    <SeparatorWrapper>
        <span></span>
    </SeparatorWrapper>
);

export default Separator;