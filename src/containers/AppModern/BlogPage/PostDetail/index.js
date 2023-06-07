import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import WrapperServices, {
  GridServicesDT
} from "containers/AppModern/ServiceDetail/WrapperService";
import { ContentWrapper } from "containers/AppModern/appModern.style";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import BlogPath from "../BlogPath";
import {
  AuthorPost,
  AvatarAuthor,
  LeftContent,
  LogoAuthor,
  TimeUser,
  TitleUser
} from "../blogPage.style";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const WraaperBox = styled(Box)`
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
  color: #444;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 30px;
  > p,
  span,
  ins,
  ul,
  li,
  a {
    line-height: 1.8;
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
const PostDetail = ({ postData }) => {
  const content = postData?.attributes?.content
    ?.replace(/&nbsp;?/gi, "")
    ?.replace(/<h2/g, '<h2 class="text"')
    ?.replace(/<h3/g, '<h3 class="text"')
    ?.replace(/<a/g, '<a rel="nofollow" target="_blank"');
  const [data, setData] = useState([]);
  const [block, setBlock] = useState([]);
  const [checkId, setCheckId] = useState();
  const [checkOffset, setCheckOffset] = useState();
  console.log(data);
  const { ref, inView } = useInView({
    threshold: 0.5
  });

  function showItem(item) {
    const id = item.replace(/\D/g, "");
    const isH2 = item.startsWith("content-");

    if (isH2) {
      setBlock([]);
      for (let i = 0; i < data.length; i++) {
        if (i > id) {
          if (data[i].label.slice(0, 4) === "text") {
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
      document.querySelectorAll(".text[id^=content-], .text[id^=text-]")
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
      const paragraph = document.getElementsByClassName("text");
      setData([]);

      for (let index = 0; index < paragraph.length; index++) {
        paragraph[index].id =
          paragraph[index].localName === "h2"
            ? `content-${index}`
            : `text-${index}`;
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
    <ContentWrapper>
      <WrapperServices>
        <BlogPath postData={postData} />
        <WraaperBox>
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
                                    ?.attributes?.avatar ??
                                  "https://media-cloodo.s3.amazonaws.com/thumbnail_Icon_2d75277193.png"
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
                                  .attributes?.name ?? "Printcart"}
                              </a>
                            </Link>
                          </TitleUser>
                          <TimeUser>
                            <Link href={"#"}>
                              <a style={{ color: "#fff", fontSize: "18px" }}>
                                {new Date(
                                  postData?.attributes?.user_profile?.data.attributes?.publishedAt
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
        </WraaperBox>
        <Container>
          <GridBlog>
            <LeftDesc>
              {postData?.attributes?.feature_image?.data && (
                <Image
                  src={
                    postData?.attributes?.feature_image?.data?.attributes?.url
                  }
                  alt={
                    postData?.attributes?.feature_image?.data?.attributes?.name
                  }
                />
              )}
              <ContenBox>{ReactHtmlParser(content)}</ContenBox>
            </LeftDesc>
            <RightDesc>
              <WrapRight>
                <TableHeading content="On this Page" />
                <Box inView={inView}>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <Box
                        key={index}
                        ref={checkOffset === item.label ? ref : null}
                        id={item.label}
                        onClick={transferTo}
                        className={
                          (checkOffset || checkId) === item.label
                            ? item.label.slice(0, 4) === "text"
                              ? "classes.textChoose_h3"
                              : "classes.textChoose_h2"
                            : item.label.slice(0, 4) === "text"
                            ? block.length === 0
                              ? "classes.text_h3n"
                              : block.map((e) =>
                                  e.label === item.label
                                    ? "classes.text_h3b"
                                    : "classes.text_h3n"
                                )
                            : "classes.text_h2"
                        }
                      >
                        {item.value}
                      </Box>
                    ))
                  ) : (
                    <Box> There is no table of contents for this article.</Box>
                  )}
                </Box>
              </WrapRight>
            </RightDesc>
          </GridBlog>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};

export default PostDetail;
