import React from 'react';

import CardInfo from './CardInfo';
import styled from 'styled-components'

const StyledCard = styled.div`
    &:hover {
        cursor: pointer;
    }
`

function Portfolio(props) {
    return (
        <StyledCard className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image border img-fluid" style={{ objectFit: "cover", height: '190px', width: '100%' }}
                src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </StyledCard>
    );
}

export default Portfolio;