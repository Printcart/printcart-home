import React from 'react';
import styled from 'styled-components';
import { MaximumCard, CardText } from './productspod.style';
import Image from 'next/image';

const StepNumber = styled.div`
  color: blue;
  font-size: 24px;
`;

const MaximumStepCard = ({ stepNumber, title, src, alt, width, height, text }) => {
  return (
    <MaximumCard>
      <Image src={src} alt={alt} width={width} height={height} style={{ overflow: 'hidden'}} />
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

export default MaximumStepCard ;
