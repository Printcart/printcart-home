import styled, { css } from "styled-components";

const WrapperServices = styled.section`
  padding: 88px 0 0;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    padding: 76px 0 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 76px 0 0;
  }
  .contentMain {
    position: relative;
    padding: 50px 0;
  }
  .banner {
    height: 400px;
    background-image: url("/product_image.jpg");
    background-size: cover;
    background-position: center;
  }

  .paginateWrap {
    display: inline-block;
    text-align: center;
    width: 100%;
    margin: 50px 0 30px 0;
    > li {
      display: inline-block;
    }
    > li a {
      padding: 8px 13px;
      margin: 0 4px;
      border: 1px solid #ddd;
      border-radius: 3px;
      cursor: pointer;
    }
    > .paginate-active {
      color: #2d58af;
      > .paginate-a {
        border: 1px solid #2d58af !important;
      }
    }
  }
  .contProduct {
    align-items: flex-start;
    flex-direction: row;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1440px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .contenLeft {
    display: flex;
    row-gap: 2rem;
    flex-direction: column;
    width: 100%;
  }
  .wrappImage {
    align-items: flex-start;
    display: flex;
    position: relative;
  }
  .wrapperChild {
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    top: 5rem;
    position: sticky;
  }
  .btnchange {
    border-width: 1px;
    width: 3rem;
    height: 3.5rem;
    position: relative;
    cursor: pointer;
  }
  .imageProduct {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .wrappbig {
    margin-left: 4rem;
    margin-right: 4rem;
    row-gap: 1rem;
    flex-direction: column;
    flex: 1 1 0%;
    display: flex;
  }
  .contImage {
    width: 100%;
    aspect-ratio: 29 / 34;
    position: relative;
  }
  .spanImage {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    inset: 0px;
  }
  .imageProductBig {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .contentRight {
    max-width: 400px;
    padding-top: 0px;
    padding-bottom: 0px;
    top: 5rem;
    position: sticky;
    row-gap: 3rem;
    flex-direction: column;
    width: 100%;
    display: flex;
  }
  .info-child {
    max-width: 500px;
    row-gap: 3rem;
    flex-direction: column;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  .info-main {
    row-gap: 0.5rem;
    flex-direction: column;
    display: flex;
  }
  .linktitle {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    text-decoration: inherit;
  }
  .titleProduct {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 36px;
    margin: 0;
  }
  .descProduct {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0;
  }
  .selectSize {
    row-gap: 1.5rem;
    flex-direction: column;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .cont-size {
    row-gap: 0.75rem;
    flex-direction: column;
    display: flex;
  }
  .title-size {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
  .valueSize {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.5rem;
    display: grid;
  }
  .btnvalue {
    border-width: 1px;
    background-color: transparent;
    height: 50px;
    font-size: 10px;
    font-weight: 400;
    line-height: 1rem;
    cursor: pointer;
  }
  .contPrices {
    margin-bottom: 1rem;
  }
  .pricesDetail {
    color: #374151;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 36px;
  }
  .tabList {
    border-color: #374151;
    border-bottom: 1px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    display: grid;
  }
  .tabChecked {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    text-transform: uppercase;
    text-align: left;
    padding-bottom: 0.5rem;
    border-color: rgb(17 24 39 / 1);
    border-bottom-width: 1px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.25rem;
    cursor: pointer;
    margin: 1px;
  }
  .tabDefault {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    text-transform: uppercase;
    text-align: left;
    padding-bottom: 0.5rem;
    border-color: rgb(229 231 235 / 1);
    border-bottom-width: 1px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.25rem;
    cursor: pointer;
    margin: 1px;
  }
  .tabPanel {
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
  .wrapperProduct {
    column-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    display: grid;
  }
  .wrapperShipping {
    row-gap: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    display: grid;
  }
  .titleShipping {
    font-weight: 500;
  }
  .descShipping {
    max-width: 24rem;
    margin: 0;
  }
  .shippingDetail {
    column-gap: 0.5rem;
    align-items: flex-start;
    display: flex;
  }
  .infoLeft {
    row-gap: 1rem;
    flex-direction: column;
    display: flex;
  }
  .valuematerial {
    font-weight: 500;
  }
  .infoRight {
    row-gap: 1rem;
    flex-direction: column;
    display: flex;
  }
  .container-related-products {
    padding-bottom: 1.5rem;
  }
  .wrapperPOC {
    margin: 0 auto 65px;
  }
  .cont-vendor {
    margin-top: 3.5rem;
    display: block;
  }
  .headerVendor {
    align-items: center;
    flex-direction: row;
    margin-bottom: 1.5rem;
    .title {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  .info-vendor {
    display: block;
    border: 1px solid #e3e4e5;
    border-radius: 3px;
    background-color: #f7f7f7;
  }
  .info-head {
    align-items: center;
    padding: 0px 24px 16px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .info-head-left {
    display: flex;
    align-items: center;
    margin-top: 16px;
    position: relative;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  .info-head-left-title {
    display: inline;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 700;
  }
  .iflt-star {
    position: relative;
  }
  .iflt-star-title {
    display: inline-flex;
    align-items: center;
    font-size: 1.25rem;
    padding: 0 0.25rem 0.25rem;
    margin-left: 0.5rem;
    border-radius: 3px;
    background-color: #403568;
    color: #fff;
    cursor: pointer;
  }
  .star-icon {
    display: flex;
    align-items: center;
    color: inherit;
    font-size: 0.875em;
    margin-right: 0.125rem;
    margin-bottom: 0.125rem;
  }
  .underlined {
    border-top: 1px solid #ffffff;
    position: absolute;
    bottom: 50px;
    width: 75%;
    left: 12px;
  }
  .info-head-right {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    max-width: 100%;
    min-height: 1px;
    flex-basis: 0;
    flex-grow: 1;
  }
  .btn-more-details {
    margin-top: 16px;
    display: inline-block;
  }
  .cont-btn {
    padding: calc(0.5rem - 1px) calc(1.5rem - 1px);
    height: 40px;
    color: #17262b;
    background-color: #fff;
    border-color: #c4c7c8;
    width: 100%;
    display: inline-block;
    position: relative;
    border: 1px solid transparent;
    text-align: center;
    border-radius: 3px;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    overflow: hidden;
    transition: .15s;
    vertical-align: top;
    line-height: 1.5rem;
    font-family: inherit;
    white-space: nowrap;
    outline: none;
  }
  .cont-start-design {
    margin-left: 1rem;
    margin-top: 16px;
  }
  .href-btn-design {
    color: #29ab51;
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: color .15s ease;
  }
  .con-btn-design {
    display: inline-block;
  }
  .btn-start-design {
    padding: calc(0.5rem - 1px) calc(1.5rem - 1px);
    height: 40px;
    color: #fff;
    background-color: #29ab51;
    width: 100%;
    display: inline-block;
    position: relative;
    border: 1px solid transparent;
    text-align: center;
    border-radius: 3px;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    overflow: hidden;
    transition: .15s;
    vertical-align: top;
    line-height: 1.5rem;
    font-family: inherit;
    white-space: nowrap;
    outline: none;
  }
  .info-detail {
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-template-columns: repeat(4,1fr);
    display: grid;
    grid-gap: 24px;
    gap: 24px;
    padding: 16px 16px;
    border-top: 1px solid #e3e4e5;
    overflow: hidden;
  }
  .catalog-title {
    margin-bottom: 8px;
    white-space: nowrap;
    color: #686f71;
    font-size: .875em;
    line-height: 1.25rem;
    font-weight: 400;
  }
  .desc-price {
    color: #29ab51;
    font-size: .875em;
    line-height: 1.25rem;
    font-weight: 400;
  }
  .wrapper-print-area {
    grid-column-end: span 2;
  }
  .container-features {
    padding-top: 40px;
    padding-bottom: 40px;
    display: block;
    border-bottom: 1px solid #e3e4e5;
  }
  .wrapper-feature {
    display:flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .feature-title {
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
    line-height: 2rem;
    position: relative;
    flex: 0 0 33.3%;
    max-width: 33.3%;
  }
  .about-desc {
    margin-top: 0;
    position: relative;
    width: 100%;
    flex: 0 0 66.6%;
    max-width: 66.6%;
  }
  .wrapper-content {
    margin-top: 0;
    position: relative;
    width: 100%;
    flex: 0 0 66.6%;
    max-width: 66.6%;
  }
  .key-features-desc {
    margin-bottom: calc(1rem * -2);
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: calc(1rem * -1);
    margin-right: calc(1rem * -1);
    padding: 0px;
  }
  .wrapper-desc {
    margin-bottom: calc(1rem * 2);
    position: relative;
    width: 100%;
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .img-feature {
    display: block;
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
  .desc-title {
    font-weight: 400;
    margin-bottom: 8px;
  }
  .desc-detail {
    color: #9fa4a5;
    font-size: .875em;
    line-height: 1.25rem;
    font-weight: 400;
  }
  .care-icons {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: calc(8px * -1);
    margin-right: calc(8px * -1);
    padding: 0px;
  }
  .icon-image {
    position: relative;
    flex: 0 0 auto;
    width: auto;
    padding-left: 8px;
    padding-right: 8px;
  }
  .table-header {
    p {
      color: #29ab51;
      border-bottom: 1px solid #d3d3d3;
      cursor: pointer;
    }
  }
  }
`;

export const GridServicesDT = styled.div`
  display: flex;
  flex-wrap: wrap;
  .boxLeft {
    width: 66%;
    margin-bottom: 30px;
    @media only screen and (max-width: 1400px) {
      width: 65%;
    }
    @media only screen and (max-width: 1200px) {
      width: 60%;
    }
    @media only screen and (max-width: 992px) {
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
  }
  .boxRight {
    width: 34%;
    padding-top: 30px;
    padding-left: 30px;
    @media only screen and (max-width: 1400px) {
      width: 35%;
    }
    @media only screen and (max-width: 1200px) {
      width: 40%;
    }
    @media only screen and (max-width: 992px) {
      width: 100%;
      padding-left: 0px;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      padding-left: 0px;
    }
    @media only screen and (max-width: 576px) {
      width: 100%;
      padding-left: 0px;

    }
  }

  .sumReviews {
    margin-top: -10px;
    font-size: 25px;
    font-weight: 500;
    color: #444;
    margin-bottom: 0px;
  }
  .totalreviews {
    display: flex;
    align-items: center;
     & p {
      display: inline-block;
      padding-left: 10px;
      font-weight: 500;
      color: #444;
     }
  }
  .containerReviews {
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    padding: 5px 25px;
  }
  .infoReview {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    & svg {
      width: 30px;
      height: 25px;
      color: #f7941e;
    }
  }
  .contentReview {
    padding-left: 10px;
    & h4 {
      font-size: 16px;
      font-weight: 500;
      color: #5c5c5c;
    },
    & span {
      line-height: 0.2;
      color: #777;
      font-size: 16px;
    }
  }
  .buttonRequest {
    width: 100%;
    margin-top: 35px;
    background-color: #f90;
    &:hover {
      box-shadow: #f90 0px 12px 24px -10px;
    }
  }
  .mainPA {
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid #f2f2f2;
  }
  .imagePA {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 5px;
  }
  .boxTopPA {
    & a {
      font-size: 18px;
      font-weight: 600;
      color: #444;
    },
    & p {
      font-size: 16px;
      font-weight: 500;
    },
    & span {
      font-size: 14px;
      margin-left: 5px;
      font-weight: 400;
    },
  }
  .boxSkills {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    & button {
      cursor: pointer;
      border: none;
      padding: 5px 10px;
      font-size: 13px;
      border-radius: 3px;
      text-transform: capitalize;
      color: #5c5c5c;
      background: #e9e9e9;
      margin: 0 5px 5px 0;
      &:hover {
        background: #2d58af;
        color: #fff;
      }
    }
  }

  .boxAssistant {
    line-height: 0.8;
    padding-bottom: 30px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
  .titleAssistant {
    font-size: 20px;
    font-weight: 600;
    color: #444;
  }
  .verified {
    display: flex;
    align-items: center;
    margin: 20px 0 5px 0;
    & p {
      margin-left: 5px;
      font-size: 18px;
      color: #444;
    },
  }
  .review {
    margin-top: -10px;
    margin-bottom: 25px;
    font-size: 16px;
    color: #888;
  }
  .intro {
    margin-top: 15px;
    & p {
      font-size: 15px;
      color: #5c5c5c;
    }
  }
  .buttomSendMes {
    width: 100%;
    margin-top: 35px;
    
  }
  
  
  .cardItem {
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
    &:hover {
      box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
      transform: translate(0, -7px);
      transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    }
    @media only screen and (max-width: 480px) {
      padding: 25px 25px 30px;
    }
  }

  .content {
    padding: 20px;
  }

  .title {
    font-size: 36px;
    font-weight: 400;
    color: #fff;
    line-height: initial;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .boxInfo {
    display: flex;
    align-items: center;
    margin-top: 20px;
    & p {
      padding-left: 10px;
      color: #fff;
      font-size: 16;
    }
    ,
    & a {
      color: #ff9800;
    }
  }

  .text {
    > h2 {
      font-size: 17px;
      margin-bottom: -15px;
    }
    height: 90px;
    margin: 5px;
    font-size: 15px;
    line-height: 1.3;
    color: #5c5c5c;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .info {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 5px;
      padding-bottom: 1px;
    }
  }
  .boxBtn {
    text-align: end;
    border-top: 1px dashed #cdcdcd;
    margin-top: 15px;
    padding-top: 20px;
  }
  button {
    padding: 10px 10px;
    display: flex;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    margin-right: 18px;
    border-radius: 5px;
    text-transform: capitalize;
  }
  .boxImage {
    position: relative;
    background: #fff;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    border-radius: 4px;
    margin-top: 50px;
    margin-bottom: 50px;
    &:hover {
      & button {
        display: block;
      },
      & img {
        padding: 5px 10px;
        transition: padding .5s ease-out;
      },
    },
    & img {
      padding: 10px 15px;
      object-fit: cover;
    },
    & div {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 5px;
      textTransform: capitalize;
    }
  }
  .btnFull {
    display: none;
    position: absolute;
    right: 0%;
    top: 0%;
    color: #fff;
    cursor: pointer
  }
  .ItemCard {
    background: #fff;
    padding: 30px;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    border-radius: 4px;
    margin-bottom: 20px;
    &:hover {
      box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
      transform: translate(0, -7px);
      transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    }
    .titleDes {
      font-size: 24px;
      font-weight: 500;
      color: #444;
      padding-bottom: 20px;
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: 30px;
    }
    .description {
      line-height: 1.5;
      color: #5c5c5c;
      & h1, h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.3;
        text-transform: capitalize;
        margin: 20px 0;
      }
      & strong {
        line-height: 1.4;
        font-size: 16px;
        font-weight: 500;
        color: #5c5c5c;
      }
    }
  }
 
`;

export default WrapperServices;

export const ContainerServicesDT = styled.div`
  padding-bottom: 30px;
  margin-top: -390px;
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 0px;
      padding-right: 0px;
    `};

  .ItemCardRelated {
    background: #fff;
    margin-top: 50px;
    padding: 10px;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    padding-bottom: 40px;
  }
  .titlerelated {
    font-size: 24px;
    font-weight: 500;
    color: #444;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
export const GridServicesRelated = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: calc(100% / 3 - 34px);
    margin: 20px 17px 10px;

    @media only screen and (max-width: 1400px) {
      width: calc(100% / 3 - 34px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 3 - 34px);
    }
    @media only screen and (max-width: 992px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    @media only screen and (max-width: 576px) {
      width: 100%;
      margin-top: 15px;
    }
  }
  .cardItem {
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
    &:hover {
      box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
      transform: translate(0, -7px);
      transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    }
    @media only screen and (max-width: 480px) {
      padding: 25px 25px 30px;
    }
  }

  .content {
    padding: 20px;
  }

  .title {
    margin-top: 0px;
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #444;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    cursor: pointer;
  }
  .text {
    & h2 {
      font-size: 17px;
      margin-bottom: -15px;
    }
    & strong {
      line-height: 1.2;
      font-size: 17px;
      margin-bottom: -15px;
    }
    & p {
      line-height: 1.2;
      font-size: 17px;
      margin-bottom: -15px;
    }
    & ul {
      line-height: 1.2;
      font-size: 17px;
      padding: 16px;
      margin-left: -16px;
    }
    height: 80px;
    font-size: 17px;
    color: #5c5c5c;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .avataruser {
    display: flex;
    align-items: center;
    & img {
      border-radius: 5px;
      margin-right: 10px;
      border: 1px solid #cdcdcd;
      width: 40px;
      height: 40px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    display: -webkit-box;

    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 3px;
      padding-bottom: 1px;
    }
    & p {
      font-size: 16px;
    }
  }
  .infodate {
    display: flex;
    align-items: center;
    color: #5c5c5c;
    display: -webkit-box;

    & strong {
      font-size: 16px;
      font-weight: 500;
      margin-right: 3px;
      padding-bottom: 1px;
    }
    & p {
      font-size: 16px;
    }
  }
  .boxBtn {
    text-align: end;
    border-top: 1px dashed #cdcdcd;
    margin-top: 15px;
    padding-top: 20px;
  }
  button {
    padding: 5px 10px;
    border: 1px solid #2d58af;
  }
`;
