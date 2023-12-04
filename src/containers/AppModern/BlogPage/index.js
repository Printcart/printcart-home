import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import Link from "next/link";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import Icon from "react-icons-kit";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import SectionWrapperServices from "../InfoServices/GridServices";
import { SectionHeader } from "../appModern.style";
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
} from "./blogPage.style";
import { useRouter } from "next/router";
import Pagination from "common/components/Pagination";

const BlogPage = ({ resPosts, pages }) => {
  const router = useRouter();
  const query = router.query;
  const page = pages.pagination.total / 20;
  let start = -1;
  let end = 20;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }
  return (
    <React.Fragment>
      <SectionWrapperServices>
        {/* <BlogPath /> */}
        <SectionHeader>
          <Box className="containerSlogan">
            <Container>
              <h1 className="titleSlogan">Printcart POD Tutorials</h1>
              <p>
                Welcome to Printcart, your ultimate destination for all things
                printing! Whether you're a printing professional, graphic
                designer, or simply passionate about the print industry, this
                tutorials is your go-to resource for valuable insights, expert
                tips, and inspiring content.
              </p>
            </Container>
          </Box>
        </SectionHeader>
        <Container>
          <GridPost>
            {resPosts.map(
              (items, index) =>
                index > start &&
                index < end && (
                  <GridItem key={index}>
                    <ContainerPost>
                      <Box>
                        <Link
                          prefetch={false}
                          href={`/tutorial/${items?.attributes?.alias}`}
                        >
                          <a title={`View to ${items?.attributes?.title}`}>
                            <h3 style={{ lineHeight: "1.5", height: "64px" }}>
                              {items?.attributes?.title}
                            </h3>
                          </a>
                        </Link>
                      </Box>
                      <DesBox>
                        {ReactHtmlParser(items?.attributes?.short_intro)}
                      </DesBox>
                      <Box>
                        <TagBox>
                          {items?.attributes?.tags?.data.map((tags, index) => (
                            <Link href="#" key={index}>
                              <a>#{tags?.attributes?.alias}</a>
                            </Link>
                          ))}
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
                                          ?.attributes?.avatar ?? "favicon.png"
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
                                        ?.attributes?.name ?? "Printcart"}
                                    </a>
                                  </Link>
                                </TitleUser>
                                <TimeUser>
                                  <Link href={"#"}>
                                    <a>
                                      {new Date(
                                        items?.attributes?.createdAt
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
                )
            )}
            {resPosts.length > 20 && <Pagination page={page} />}
          </GridPost>
        </Container>
      </SectionWrapperServices>
    </React.Fragment>
  );
};
export default BlogPage;
