import React from 'react';
import styled from 'styled-components';
import { MaximumCard, CardText } from './productspod.style';
import Image from 'next/image';

const StepNumber = styled.div`
  color: blue;
  font-size: 24px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MaximumStepCard = ({ stepNumber, title, src, alt, text }) => {
  return (
    <MaximumCard>
      <ImageWrapper>
        <StyledImage src={src} alt={alt} layout="fill" />
      </ImageWrapper>
      <CardText>
        <StepNumber>{stepNumber}.</StepNumber>
        <div>
          <b>{title}</b>
          <br />
          <br />
          {text}
        </div>
      </CardText>
    </MaximumCard>
  );
};

export default MaximumStepCard;
