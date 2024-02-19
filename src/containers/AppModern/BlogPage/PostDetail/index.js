import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import WrapperServices from "containers/AppModern/ServiceDetail/WrapperService";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import styled from "styled-components";
import ImageLogo from "../../../../../src/common/assets/image/favicon.png";
import BlogPath from "../BlogPath";
import GridPost, {
  AuthorPost,
  AvatarAuthor,
  ButtonRead,
  ContainerPost,
  DesBox,
  GridItem,
  LeftContent,
  LogoAuthor,
  TagBox,
  TimeUser,
  TitleUser,
} from "../blogPage.style";

import { ContentWrapper } from "containers/AppModern/appModern.style";
import Icon from "react-icons-kit";
import TableOfContent from "./TableOfContent";

const WrapBox = styled(Box)`
  margin-bottom: 50px;
`;
const Banner = styled(Box)`
  height: auto;
  padding-top: 1px;
  background-repeat: no-repeat;
  background-image: url("/tutorial.jpg");
  background-size: cover;
  background-position: center;
`;
const PostHeading = styled(Heading)`
  color: #fff;
  margin-bottom: 35px;
  word-break: break-word;
  font-size: 45px;
  line-height: 1.2;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const BoxPost = styled(Box)`
  padding: 40px 30px;
`;
const BoxHead = styled(Box)`
  position: relative;
  bottom: 41rem;
  left: 8px;
  padding-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0px;
  padding-right: 0px;
`;
const PShort = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 35px;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
`;
const LeftDesc = styled(Box)`
  width: 70%;
  margin-bottom: 30px;
  @media only screen and (max-width: 1400px) {
    width: 70%;
  }
  @media only screen and (max-width: 1200px) {
    width: 65%;
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
`;
const RightDesc = styled(Box)`
  width: 30%;
  @media only screen and (max-width: 1400px) {
    width: 30%;
  }
  @media only screen and (max-width: 1200px) {
    width: 35%;
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
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 15px;
  margin-bottom: 55px;
  border-radius: 5px;
  onbject-fit: contain;
  box-shadow: 0 0px 10px 1px rgb(0 0 50 / 10%);
`;
const ContenBox = styled(Box)`
  margin-bottom: 5px;
  & p,
  span,
  ins,
  ul,
  li,
  a {
    line-height: 1.8 !important;
    font-family: heebo !important;
    word-break: break-word;
    text-decoration: none;
    letter-spacing: 0.5px;
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2 !important;
    word-break: break-word;
    text-decoration: none;
    letter-spacing: 0.5px;
  }
  & p,
  b,
  u,
  a,
  i,
  ins,
  span,
  ul,
  li {
    font-size: 18px !important;
    color: #444 !important;
    font-family: heebo !important;
    & strong {
      font-size: 18px !important;
      color: #444 !important;
    }
  }
  & p,
  ul,
  li {
    margin-bottom: 25px;
    font-weight: 300;
  }
  & h1 {
    color: #444;
    font-size: 45px !important;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 50px;
    & strong {
      color: #444;
      font-size: 45px !important;
      font-weight: 500;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
  & h2 {
    color: #444;
    font-size: 40px;
    font-weight: 500;
    padding-top: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
    & strong,
    span,
    a {
      font-size: 40px !important;
      font-weight: 500;
      color: #444;
      font-family: heebo !important;
    }
  }
  & h3 {
    color: #444;
    font-size: 30px !important;
    font-weight: 500;
    padding-top: 25px;
    margin-bottom: 50px;
    & strong,
    span,
    a {
      font-size: 30px !important;
      font-weight: 500;
      color: #444;
      font-family: heebo !important;
    }
  }
  & h4,
  h5,
  h6 {
    color: #444;
    font-size: 18px !important;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
    & strong,
    span,
    a {
      font-size: 18px !important;
      color: #444;
      font-weight: 500;
      font-family: heebo !important;
    }
  }
  & ul {
    list-style: unset;
    margin-left: 20px;
  }
  & a {
    color: #2d58af !important;
    margin-bottom: 5px;
    text-decoration: none;
    & u,
    li,
    strong,
    span {
      color: #2d58af !important;
      text-decoration: none;
      font-family: heebo !important;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  & a:hover {
    text-decoration: underline;
  }
  & img {
    width: 100% !important;
    height: auto;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 5px;
    onbject-fit: contain;
    box-shadow: 0 0px 10px 1px rgb(0 0 50 / 10%);
  }
  & iframe {
    max-width: 100%;
    margin-bottom: 30px;
  }
  & li {
    list-style-type: unset;
  }
`;

const GridBlog = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;

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
`;
const WrapRelated = styled(Box)`
  margin-left: 1rem;
  padding-top: 50px;
  margin-bottom: 50px;
  border-top: 1px solid rgb(0 0 50 / 15%);
`;
const RelatedHeading = styled(Heading)`
  font-size: 35px;
  color: #444;
  padding: 0 10px;
  font-weight: 500;
  margin-bottom: 50px;
`;
const WrapContainer = styled(Box)`
  margin-bottom: 3rem;
`;
const PostDetail = (props) => {
  const { postData, relatedData } = props;
  const topicId = postData?.id;
  const content = postData?.attributes?.content
    ?.replace(/&nbsp;?/gi, "")
    ?.replace(/<h1/g, '<h1 class="text2"')
    ?.replace(/<h2/g, '<h2 class="text2"')
    ?.replace(/<h3/g, '<h3 class="text2"')
    ?.replace(/<a/g, '<a rel="nofollow" target="_blank"')
    ?.replace(/<img/g, `<img alt="image ${topicId}"`);
  return (
    <ContentWrapper>
      <WrapperServices>
        <BlogPath postData={postData} />
        <WrapBox>
          <Banner>
            <Container>
              <BoxPost>
                <PostHeading
                  content={postData?.attributes?.title}
                  fontWeight="500"
                  lineHeight="1.8"
                />
                <PShort>{postData?.attributes?.short_intro}</PShort>
                <Box>
                  <AuthorPost>
                    <LeftContent>
                      <LogoAuthor>
                        <Link href={"#"}>
                          <a>
                            <AvatarAuthor>
                              <img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  textAlign: "center",
                                  objectFit: "cover",
                                  textIndent: "10000px",
                                }}
                                alt="Avatar"
                                src={
                                  postData?.attributes?.user_profile?.data
                                    ?.attributes?.avatar ?? ImageLogo.src
                                }
                              />
                            </AvatarAuthor>
                          </a>
                        </Link>
                      </LogoAuthor>
                      {postData?.attributes?.user_profile && (
                        <Box>
                          <TitleUser>
                            <Link href={"#"}>
                              <a style={{ color: "#fff", fontSize: "18px" }}>
                                {postData?.attributes?.user_profile?.data
                                  ?.attributes?.name ?? "Printcart"}
                              </a>
                            </Link>
                          </TitleUser>
                          <TimeUser>
                            <Link href={"#"}>
                              <a style={{ color: "#fff", fontSize: "18px" }}>
                                {new Date(
                                  postData?.attributes?.createdAt
                                ).toLocaleString()}
                              </a>
                            </Link>
                          </TimeUser>
                        </Box>
                      )}
                    </LeftContent>
                  </AuthorPost>
                </Box>
              </BoxPost>
            </Container>
          </Banner>
        </WrapBox>
        <WrapContainer>
          <Container>
            <GridBlog>
              {postData?.attributes?.banner?.data?.attributes?.url && (
                <Image
                  src={postData?.attributes?.banner?.data?.attributes?.url}
                  alt={postData?.attributes?.banner?.data?.attributes?.name}
                />
              )}
              <LeftDesc>
                {postData?.attributes?.feature_image?.data && (
                  <Image
                    src={
                      postData?.attributes?.feature_image?.data?.attributes?.url
                    }
                    alt={
                      postData?.attributes?.feature_image?.data?.attributes
                        ?.name
                    }
                  />
                )}
                <ContenBox>{ReactHtmlParser(content)}</ContenBox>
              </LeftDesc>
              <RightDesc>
                <TableOfContent content={content} />
              </RightDesc>
            </GridBlog>
            {relatedData?.data?.length > 0 && (
              <WrapRelated>
                <RelatedHeading content="Related Tutorials" />
                <GridPost>
                  {relatedData?.data.map((items, index) => (
                    <GridItem key={items?.id || index}>
                      <ContainerPost>
                        <Box>
                          <Link href={`/tutorial/${items?.attributes?.alias}`}>
                            <a title={`View to ${items?.attributes?.title}`}>
                              <h3>{items?.attributes?.title}</h3>
                            </a>
                          </Link>
                        </Box>
                        {items?.attributes?.banner?.data?.attributes?.formats
                          ?.small?.url && (
                          <Image
                            src={
                              items?.attributes?.banner?.data?.attributes
                                ?.formats?.small?.url
                            }
                            alt={
                              items?.attributes?.banner?.data?.attributes
                                ?.formats?.small?.name
                            }
                          />
                        )}
                        <DesBox>
                          {ReactHtmlParser(items?.attributes?.short_intro)}
                        </DesBox>
                        <Box>
                          <TagBox>
                            {items?.attributes?.tags?.data.map(
                              (tags, index) => (
                                <Link href="#" key={index}>
                                  <a>#{tags?.attributes?.alias}</a>
                                </Link>
                              )
                            )}
                          </TagBox>
                        </Box>
                        <Box>
                          <AuthorPost>
                            <LeftContent>
                              <LogoAuthor>
                                <Link href={"#"}>
                                  <a>
                                    <AvatarAuthor>
                                      <img
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          textAlign: "center",
                                          objectFit: "cover",
                                          textIndent: "10000px",
                                        }}
                                        alt="Avatar"
                                        src={
                                          items?.attributes?.user_profile?.data
                                            ?.attributes?.avatar ??
                                          "https://media-cloodo.s3.amazonaws.com/thumbnail_Icon_2d75277193.png"
                                        }
                                      />
                                    </AvatarAuthor>
                                  </a>
                                </Link>
                              </LogoAuthor>
                              {items?.attributes?.user_profile && (
                                <Box>
                                  <TitleUser>
                                    <Link href={"#"}>
                                      <a>
                                        {items?.attributes?.user_profile?.data
                                          .attributes?.name ?? "Printcart"}
                                      </a>
                                    </Link>
                                  </TitleUser>
                                  <TimeUser>
                                    <Link href={"#"}>
                                      <a>
                                        {new Date(
                                          items?.attributes?.user_profile?.data.attributes?.publishedAt
                                        ).toLocaleString()}
                                      </a>
                                    </Link>
                                  </TimeUser>
                                </Box>
                              )}
                            </LeftContent>
                            <Box>
                              <Link
                                href={`/tutorial/${items?.attributes?.alias}`}
                              >
                                <a>
                                  <ButtonRead>
                                    <Icon
                                      icon={ic_remove_red_eye}
                                      style={{ marginRight: "10px" }}
                                    />
                                    Read Tutorial
                                  </ButtonRead>
                                </a>
                              </Link>
                            </Box>
                          </AuthorPost>
                        </Box>
                      </ContainerPost>
                    </GridItem>
                  ))}
                </GridPost>
              </WrapRelated>
            )}
          </Container>
        </WrapContainer>
      </WrapperServices>
    </ContentWrapper>
  );
};

export default PostDetail;
