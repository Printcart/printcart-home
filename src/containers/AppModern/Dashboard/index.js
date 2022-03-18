import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../Particle';
import DashboardWrapper, { DashboardObject } from './dashboard.style';

import DashboardObject1 from 'common/assets/image/appModern/banner9.png';

const DashboardSection = ({ row, col, title, btnStyle, description }) => {
  const ButtonGroup = () => (
    <Fragment>
      {/* <a href="https://dashboard.printcart.com"><Button title="Printcart Dashboard" {...btnStyle} /></a> */}
    </Fragment>
  );
  return (
    <DashboardWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading className="subtitle" as="h5" content="CUSTOM DESIGNER" />
            <FeatureBlock
              title={
                <Heading
                  content="Integrate Product Designer into any storefonts."
                  {...title}
                />
              }
              description={
                <Text
                  content="With our Product Designer API and SDK, your client  can design and customize a product to fit their needs, which will drive customer satisfaction and additional revenue growth on your site."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <DashboardObject>
        <div className="dashboardWrapper">
          <NextImage src={DashboardObject1} alt="DashboardObject1" />
        </div>
      </DashboardObject>
    </DashboardWrapper>
  );
};

DashboardSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
};

DashboardSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '30px', '30px', '30px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '15px', '15px', '20px', '25px'],
    lineHeight: '1.3',
    maxWidth: ['100%', '400px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
};

export default DashboardSection;
