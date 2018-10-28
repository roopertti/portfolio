import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { getImageLinks } from '../projectData';

const ListWrapper = styled.div`
    padding: 50px 0;
`;

const ProjectWrapper = styled.article`
    box-shadow: 0 0 5px var(--dark);
    padding: 80px 100px;
    margin-bottom: 30px;
`;

const SliderImage = styled.img`
    display: inline-block;
    width: 100%;
`;

const ImageSlider = ({image}) => {

    const images = getImageLinks();
    console.log(image);

    if(typeof image === 'null') return null;

    if(image.constructor === Array) {
        const settings = {
            infinite: true,
            speed: 1000,
            autoplaySpeed: 5000,
            autoplay: true,
            dots: true
        }
        return (
            <div>
                <Slider {...settings}>
                    {image.map(
                        (img, i) => (
                            <div key={i}>
                                <SliderImage 
                                    src={images[img]}
                                    alt={img}></SliderImage>
                            </div>
                        )
                    )}
                </Slider>
            </div>
        );
    }

    if(typeof image === 'string') {
        return (
            <div>
                <SliderImage 
                    src={images[image]}
                    alt={image}></SliderImage>
            </div>
        );
    }

    return null;
}



const Taglist = styled.div`
    display: flex; 
    flex-wrap: wrap;

    span {
        display: inline-block;
        margin: 3px;
        background-color: var(--adjacent1);
        padding: 5px 7px;
        border-radius: 10px;
        color: white;
        font-size: 14px;
    }
`;

const titleStyle = {
    color: 'var(--primary)',
    margin: '0 0 10px'
}

const subTitleStyle = {
    color: 'var(--dark)',
    margin: '15px 0'
};

const ProjectList = ({projects}) => (
    <ListWrapper>
        {projects.map((project, i) => (
            <ProjectWrapper key={i}>
                <h1 style={titleStyle}>{project.name}</h1>
                <h3 style={subTitleStyle}>{project.type}</h3>
                <Taglist>
                    {project.tags.map((tag, i) => (<span key={i}>{tag}</span>))}
                </Taglist>
                <p>{project.text}</p>
                <div>
                    <ImageSlider image={project.image}></ImageSlider>
                </div>
            </ProjectWrapper>
        ))}
    </ListWrapper>
);

export default ProjectList;