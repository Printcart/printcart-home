import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

import { designAndBuiltcode } from 'common/data/AppModern';

const DesignedAndBuiltcode = () => {
  const { image, title, slogan, description } = designAndBuiltcode;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
            <Text content={description} />
          </div>
          <div className="image">
            <NextImage src={image} alt="Built Logo" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuiltcode;
