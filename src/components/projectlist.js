import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
    
`;

const ProjectWrapper = styled.article`

`;

const ProjectList = ({projects}) => (
    <ListWrapper>
        {projects.map((project, i) => (
            <ProjectWrapper key={i}>
                <h2>{project.name}</h2>
                <h4>{project.type}</h4>
                
            </ProjectWrapper>
        ))}
    </ListWrapper>
);

export default ProjectList;