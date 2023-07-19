import Box from "common/components/Box";
import Heading from "common/components/Heading";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const WrapRight = styled(Box)`
  position: sticky;
  top: 25px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 4px rgb(0 0 50 / 5%);
  margin-left: 30px;
`;
const TableHeading = styled(Heading)`
  font-size: 16px;
  color: #444;
  text-transform: uppercase;
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
const TableOfContent = ({ content }) => {
  const [data, setData] = useState([]);
  const [block, setBlock] = useState([]);
  const [checkId, setCheckId] = useState();
  const [checkOffset, setCheckOffset] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  const showItem = (item) => {
    const id = item.replace(/\D/g, "");
    const isH2 = item.startsWith("content-");

    if (isH2) {
      setBlock([]);
      for (let i = 0; i < data?.length; i++) {
        if (i > id) {
          if (data[i].label.slice(0, 5) === "text2") {
            setBlock((e) => [...e, data[i]]);
          } else {
            break;
          }
        }
      }
    }
  };

  const transferTo = (event) => {
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
  };

  const handleScroll = () => {
    const headings = Array.from(
      document.querySelectorAll(".text2[id^=content-], .text2[id^=text2-]")
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
  };

  useEffect(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      const paragraph = document.getElementsByClassName("text2");
      setData([]);

      for (let index = 0; index < paragraph.length; index++) {
        paragraph[index].id =
          paragraph[index].localName === "h2"
            ? `content-${index}`
            : `text2-${index}`;
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
      <WrapRight>
        <TableHeading content="Table of Content" />
        <BoxRecap>
          {data.length > 0 ? (
            data.map((item, index) => (
              <p
                key={index}
                ref={checkOffset === item?.label ? ref : null}
                id={item.label}
                onClick={transferTo}
                className={
                  (checkOffset || checkId) === item?.label
                    ? item?.label?.slice(0, 4) === "text2"
                      ? "textChoose_h3"
                      : "textChoose_h2"
                    : item?.label?.slice(0, 4) === "text2"
                    ? block?.length === 0
                      ? "text_h3n"
                      : block?.map((e) =>
                          e.label === item?.label ? "text_h3b" : "text_h3n"
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
    </>
  );
};
export default TableOfContent;
