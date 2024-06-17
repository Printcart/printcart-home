import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterArea = styled.footer`
  padding: 96px 0 60px;
  padding-right: 300px;
  background-color: ${themeGet('colors.secondary', '#09142E')};
  @media only screen and (max-width: 1800px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .logo {
    img {
      width: 128px;
      height: auto;
    }
  }
`;

export const WidgetAreaLeft = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .title {
    color: ${themeGet('colors.white', '#ffffff')};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
  }
   a {
      text-decoration: none;
      color: inherit;
    }

  .col {
    text-align: left;
    margin-bottom: 5px;
    width: 40%;
    
    @media only screen and (max-width: 400px) {
      padding: 0 15px;
    }
    @media only screen and (max-width: 667px) {
      padding: 0 20px;
    }

    h3 {
      color: ${themeGet('colors.white', '#ffffff')};
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
      width: 280px;
      @media only screen and (max-width: 1866px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 18px;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
      @media only screen and (max-width: 480px) {
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
`;

export const WidgetAreaRight = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .title {
    color: ${themeGet('colors.white', '#ffffff')};
    font-size: 24px;
    font-weight: bold;
    padding-left: 600px;
    margin-bottom: 20px;
    text-align: left;
  }
   a {
      text-decoration: none;
      color: inherit;
    }

  .col {
    text-align: left;
    margin-bottom: 5px;
    width: 40%;
    padding-left: 600px;
    
    @media only screen and (max-width: 400px) {
      padding: 0 15px;
    }
    @media only screen and (max-width: 667px) {
      padding: 0 20px;
    }

    h3 {
      color: ${themeGet('colors.white', '#ffffff')};
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
      width: 280px;
      @media only screen and (max-width: 1866px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 18px;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
      @media only screen and (max-width: 480px) {
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
`;

export const WidgetAreaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-left: 350px;
  @media only screen and (max-width: 1366px) {
    padding-top: 50px;
  }
  > a {
    margin-right: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 37px;
  margin-bottom: 15px;
  @media only screen and (max-width: 667px) {
    margin-top: 30px;
  }
`;

export const MenuItem = styled.li`
  margin: 0 18px;
  @media only screen and (max-width: 667px) {
    margin: 5px 15px;
  }
  a {
    color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.3s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0;
  font-size: 14px;
`;

export default FooterArea;
