import styled, { css } from "styled-components";

export const CustomTable = styled.table`
  width: 100%;
  overflow: hidden;
  margin: 0 auto 55px;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #dadfe4;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
  }
  .setWidth {
    width: 384px;
  }
  .priceWrap {
    align-items: flex-end;
    justify-content: center;
    display: flex;
    min-width: 7.5rem;
    margin: 16px 0;
  }
  .align-top {
    text-align: center;
  }
  .cover-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .content-one {
    margin-bottom: 0.25rem;
    text-transform: uppercase;
  }
  .btnContact {
    font-weight: 400;
    color: #2f7bf8;
    border: 1px solid #2f7bf8;
    padding: 5px 20px;
    border-radius: 5px;
    &: hover {
      color: #f9fafb;
      background-color: #2f7bf8;
      border-color: #2f7bf8;
    }
  }
  .price {
    font-size: 2.625rem;
    line-height: 2rem;
    font-weight: 600;
  }
  .contact {
    font-size: 2.625rem;
    line-height: 2rem;
    font-weight: 600;
  }
  .isTierWrap {
    width: 100%;
    height: 0;
    position: relative;
  }
  .isTier {
    background-color: rgba(0, 128, 96, 1);
    border-radius: 1.25rem;
    display: inline-block;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1rem;
    padding: 0.125rem 0.5rem;
    position: absolute;
    z-index: 9;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
  .notButton {
    height: 47px;
  }
  .pcTable {
    display: grid;
  }

  .pcTable > thead > tr > th:not(:first-child) {
    text-align: center;
  }
  .pcTable > thead > tr > th {
    font-size: 1rem;
    text-align: center;
  }
  .pcTable > thead > tr > th:last-child {
    text-align: center;
  }
  .pcTable > thead > tr > th {
    text-align: center;
    text-transform: inherit;
  }
  .stickyTop {
    z-index: 999;
  }
  .pcTable > tbody > tr > td:first-child {
    max-width: 200px;
    white-space: normal;
  }
  .pcTable > tbody > tr > th {
    padding: 10px 20px;
  }
  .pcTable > tbody > tr > td:not(:first-child) {
    text-align: center;
  }
  .pcTable > tbody > tr > td {
    height: 40px;
    padding: 8px 10px;
    line-height: 18px;
    vertical-align: middle;
    text-transform: capitalize;
  }
  .value {
    text-align: center;
  }
  .value > i {
    color: #2f7bf8;
  }
  .pcTitle {
    padding: 10px 20px !important;
  }
  .text-name {
    text-transform: uppercase;
  }
  .pcTable {
    --bs-table-bg: white;
  }
  .pcPrice {
    font-weight: 400;
  }
  .text-value {
    font-weight: 500;
  }
`;
