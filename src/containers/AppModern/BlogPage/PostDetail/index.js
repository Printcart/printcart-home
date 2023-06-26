import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import WrapperServices from "containers/AppModern/ServiceDetail/WrapperService";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import { useInView } from "react-intersection-observer";
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
  TitleUser
} from "../blogPage.style";

import Icon from "react-icons-kit";

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
  margin: 0px;
  margin-bottom: 35px;
  font-size: 45px;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const BoxPost = styled(Box)`
  padding: 40px 0;
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
  font-size: 19px;
  text-indent: 30px;
  line-height: 1.8;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 35px;
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
  padding-left: 30px;
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
  color: #444;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 30px;
  & p,
  span,
  ins,
  ul,
  li,
  a {
    line-height: 1.8;
  }
  & h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
  }
  & h1 {
    color: #444;
    font-size: 40px;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  & h2 {
    color: #444;
    font-size: 35px;
    font-weight: 500;
    padding-top: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  & h3 {
    color: #444;
    font-size: 25px;
    font-weight: 500;
    padding-top: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  & h4 {
    color: #444;
    font-size: 20px;
    font-weight: 500;
    padding-top: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  & a {
    color: #2d58af;
    font-weight: 300;
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
`;
const WrapRight = styled(Box)`
  position: sticky;
  top: 25px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 4px rgb(0 0 50 / 5%);
`;
const TableHeading = styled(Heading)`
  font-size: 16px;
  color: #444;
  text-transform: uppercase;
`;
const GridBlog = styled.div`
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
`;
const BoxRecap = styled(Box)`
  .texttitle {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #5c5c5c;
  }
  .text_h2 {
    cursor: pointer;
    font-size: 16px;
    color: #5c5c5c;
    display: -webkit-box;
    overflow: hidden;
    margin-top: 15px;
    font-weight: 400;
    text-overflow: ellipsis;
    letter-spacing: 0.3px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    &:hover {
      color: #2d58af;
      font-weight: 500;
    }
  }
  .textChoose_h3 {
    cursor: pointer;
    line-height: 1.4px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-left: 20px;
    color: #2d58af;
    letter-spacing: 0.3px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .textChoose_h2 {
    cusor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
    color: #2d58af;
    letter-spacing: 0.3px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    & svg {
      font-size: 8px;
      margin-right: 5px;
      margin-bottom: 1px;
    }
  }
  .text_h3n {
    cursor: pointer;
    display: none;
    line-height: 1.4px;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 20px;
    color: #5c5c5c;
    letter-spacing: 0.3px;
    &:hover {
      color: #2d58af;
      font-weight: 500;
    }
  }
  .text_h3b {
    cusor: pointer;
    line-height: 1.4px;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 20px;
    color: #5c5c5c;
    letter-spacing: 0.3px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    &:hover {
      color: #2d58af;
      font-weight: 500;
    }
  }
`;
const WrapRelated = styled(Box)`
  padding-top: 50px;
  margin-bottom: 50px;
  border-top: 1px solid rgb(0 0 50 / 15%);
`;
const RelatedHeading = styled(Heading)`
  font-size: 35px;
  color: #444;
  font-weight: 500;
  margin-bottom: 50px;
`;
const WrapContainer = styled(Box)`
  margin-bottom: 3rem;
`;
const PostDetail = (props) => {
  const { postData, relatedData } = props;
  const topicId = postData?.attributes?.post_type?.data?.id;
  const content = postData?.attributes?.content
    ?.replace(/&nbsp;?/gi, "")
    ?.replace(/<h2/g, '<h2 class="texttitle"')
    ?.replace(/<h3/g, '<h3 class="texttitle"')
    ?.replace(/<a/g, '<a rel="nofollow" target="_blank"')
    ?.replace(/<img/g, `<img alt="image ${topicId}"`);

  const [data, setData] = useState([]);
  const [block, setBlock] = useState([]);
  const [checkId, setCheckId] = useState();
  const [checkOffset, setCheckOffset] = useState();
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  function showItem(item) {
    const id = item.replace(/\D/g, "");
    const isH2 = item.startsWith("content-");
    if (isH2) {
      for (let i = 0; i < data.length; i++) {
        if (i > id) {
          if (data[i].label.slice(0, 9) === "texttitle") {
            setBlock((e) => [...e, data[i]]);
          } else {
            break;
          }
        }
      }
    }
  }

  function transferTo(event) {
    const id = event.target.id;
    const anchor = document.querySelector("#" + id);
    showItem(id);
    setCheckId(id);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  function handleScroll() {
    const headings = Array.from(
      document.querySelectorAll(
        ".texttitle[id^=content-], .texttitle[id^=texttitle-]"
      )
    );
    const firstVisibleHeading = headings.find((heading) => {
      const headingRect = heading.getBoundingClientRect();
      return headingRect.top >= 0 && headingRect.top <= window.innerHeight;
    });

    if (firstVisibleHeading) {
      showItem(firstVisibleHeading.id);
      setCheckId(firstVisibleHeading.id);
      setCheckOffset(firstVisibleHeading.id);
    }

    if (window.scrollY === 0) {
      setBlock([]);
      setCheckId("");
      setCheckOffset("");
    }
  }

  useEffect(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      const paragraph = document.getElementsByClassName("texttitle");
      setData([]);

      for (let index = 0; index < paragraph.length; index++) {
        paragraph[index].id =
          paragraph[index].localName === "h2"
            ? `content-${index}`
            : `texttitle-${index}`;
        setData((e) => [
          ...e,
          { label: paragraph[index].id, value: paragraph[index].textContent }
        ]);
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [content, checkOffset]);

  return (
    <>
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
                                  textIndent: "10000px"
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
                <WrapRight>
                  <TableHeading content="On this Page" />
                  <BoxRecap>
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <p
                          key={index}
                          ref={checkOffset === item.label ? ref : null}
                          id={item.label}
                          onClick={transferTo}
                          className={
                            (checkOffset || checkId) === item.label
                              ? item.label.slice(0, 4) === "texttitle"
                                ? "textChoose_h3"
                                : "textChoose_h2"
                              : item.label.slice(0, 4) === "texttitle"
                              ? block.length === 0
                                ? "text_h3n"
                                : block.map((e) =>
                                    e.label === item.label
                                      ? "text_h3b"
                                      : "text_h3n"
                                  )
                              : "text_h2"
                          }
                        >
                          {item.value}
                        </p>
                      ))
                    ) : (
                      <p className="texttitle">
                        {" "}
                        There is no table of contents for this article.
                      </p>
                    )}
                  </BoxRecap>
                </WrapRight>
              </RightDesc>
            </GridBlog>
            {relatedData?.data?.length > 0 && (
              <WrapRelated>
                <RelatedHeading content="Related Tutorial" />
                <GridPost>
                  {relatedData?.data.map((items, index) => (
                    <GridItem key={index}>
                      <ContainerPost>
                        <Box>
                          <Link href={`/blog/${items?.attributes?.alias}`}>
                            <a title={`View to ${items?.attributes?.title}`}>
                              <h3>{items?.attributes?.title}</h3>
                            </a>
                          </Link>
                        </Box>
                        <DesBox>
                          {ReactHtmlParser(items?.attributes?.content)}
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
                                          textIndent: "10000px"
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
                              <Link href={`/blog/${items?.attributes?.alias}`}>
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
    </>
  );
};

export default PostDetail;
