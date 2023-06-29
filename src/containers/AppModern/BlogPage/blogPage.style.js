import Box from "common/components/Box";
import styled from "styled-components";

const GridPost = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 3rem;
`;

export const GridItem = styled.div`
  flex-basis: 50%;
  padding: 0 15px;
  flex-grow: 0;
  max-width: 50%;
  margin-bottom: 2rem;
`;
export const ContainerPost = styled.div`
  box-shadow: 0px 0px 1px 1px rgb(0 0 50 / 10%);
  border-radius: 5px;
  padding: 25px;
  @media only screen and (max-width: 576px) {
    padding: 25px;
  }
  & a {
    text-decoration: none;
  }
  & h3 {
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
    @media only screen and (max-width: 576px) {
      height: 58px;
    }
    &:hover {
      color: #2d58af;
    }
  }
  & p {
    margin: 0px;
    color: #5c5c5c;
    overflow: hidden;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 15px;
    @media only screen and (max-width: 576px) {
      height: 72px;
    }
  }
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 5px 5px 10px 5px rgb(0 0 50 / 15%);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  }
`;
export const TagBox = styled.div`
  overflow: hidden;
  flex-wrap: wrap;
  margin-bottom: 15px;
  height: 48px;
  @media only screen and (max-width: 576px) {
    height: 48px;
  }
  & a {
    text-decoration: none;
    color: #2d58af;
    font-size: 16px;
    margin-right: 10px;
    font-weight: 400;
    line-height: 1.5;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const AuthorPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoAuthor = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  box-shadow: 0px 0px 1px 1px rgb(0 0 50 / 5%);
  margin-right: 13px;
  border-radius: 100px;
`;
export const AvatarAuthor = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  width: 45px;
  height: 45px;
  background-color: #fff;
`;
export const TitleUser = styled.div`
  & a {
    color: #5c5c5c;
    font-size: 16px;
    line-height: 1.3;
    text-transform: capitalize;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const TimeUser = styled.div`
  & a {
    color: #5c5c5c;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    line-height: 1.3;
    text-transform: capitalize;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const ButtonRead = styled.button`
  color: #2d58af;
  cursor: pointer;
  border: 1px solid #7a99d9;
  height: 40px;
  border-radius: 5px;
  display: flex;
  padding: 5px 15px;
  align-items: center;
  font-weight: 400;
  text-transform: capitalize;
  &:hover {
    background: #2d58af;
    color: #fff;
  }
`;
export const DesBox = styled(Box)`
  margin: 0;
  font-size: 17px;
  color: #5c5c5c;
  height: 100px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export default GridPost;
