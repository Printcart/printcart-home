import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Container from 'common/components/UI/Container';

import NewsletterWrapper, { ContactFormWrapper } from './newsletter.style';

const Newsletter = ({
  sectionWrapper = {},  // Set default value here
  textArea = {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px'],
  }, // Set default value here
  buttonArea = {
    zIndex: 1,
  }, // Set default value here
  buttonStyle = {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px',
  }, // Set default value here
  title = {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em',
  }, // Set default value here
  description = {
    fontSize: ['14px', '14px'],
    maxWidth: ['100%', '400px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left'],
  }, // Set default value here
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <NewsletterWrapper>
        <Container>
          <Box {...textArea}>
            <Heading content="Subscribe our newsletter" {...title} />
            <Text
              content="Please fill out the subscribe form if you need any questions or contacts."
              {...description}
            />
          </Box>
          <Box {...buttonArea}>
            <ContactFormWrapper>
              <Input
                inputType="email"
                label="Email address"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
              <Button {...buttonStyle} title="Get access" />
            </ContactFormWrapper>
          </Box>
        </Container>
      </NewsletterWrapper>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};


export default Newsletter;
