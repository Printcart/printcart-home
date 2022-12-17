import Box from "common/components/Box";
import ContainerFAQ, { FAQHeader } from "./faq.style";
import { chevronUp } from "react-icons-kit/fa/chevronUp";
import { chevronDown } from "react-icons-kit/fa/chevronDown";
import ReactMarkdown from "react-markdown";
import Icon from "react-icons-kit";
import { useState } from "react";
import Container from "common/components/UI/Container";

const FAQfeature = (props) => {
  const { dataFAQ } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);

  const handleShow = () => {
    {
      dataFAQ.map(
        (item) =>
          (
            <Box
              dangerouslySetInnerHTML={{
                __html: item.attributes.answer,
              }}
            />
          ) && setShowAnswer(!showAnswer)
      );
    }
  };
  const handleShow1 = () => {
    setShowAnswer1(!showAnswer1);
  };
  return (
    <ContainerFAQ>
      <Container>
        <FAQHeader>
          <Box className="containerSlogan">
            <h2 className="titleSlogan">
              THOUSAND OF CLIENTS RELY ON OUR ECOMMERCE TEMPLATE COLLECTION TO
              GET THEIR ONLINE STORE IDEAS
            </h2>
            <p className="faq">Frequently Asked Questions</p>
            <Box className="FAQquestion">
              <Box className="questionLeft">
                {dataFAQ.map(
                  (items, index) =>
                    index < 4 && (
                      <Box key={index} className="panel-default">
                        <Box className="titlequestion">
                          <h3 className="panel-title">
                            <a
                              className="collapsed"
                              onClick={() => handleShow()}
                            >
                              {items.attributes.question}
                              <Box className="iconcustom">
                                {showAnswer ? (
                                  <Icon icon={chevronUp} />
                                ) : (
                                  <Icon icon={chevronDown} />
                                )}
                              </Box>
                            </a>
                          </h3>
                        </Box>
                      </Box>
                    )
                )}
              </Box>
              <Box className="questionRight">
                {dataFAQ.map(
                  (items, index) =>
                    index > 3 &&
                    index < 8 && (
                      <Box key={index} className="panel-default">
                        <Box className="titlequestion">
                          <h3 className="panel-title">
                            <a
                              className="collapsed"
                              onClick={() => handleShow1()}
                            >
                              {items.attributes.question}
                              <Box className="iconcustom">
                                {showAnswer1 ? (
                                  <Icon icon={chevronUp} />
                                ) : (
                                  <Icon icon={chevronDown} />
                                )}
                              </Box>
                            </a>
                          </h3>
                        </Box>
                        {/* <Box
                      dangerouslySetInnerHTML={{
                        __html: items.attributes.answer,
                      }}
                    /> */}
                      </Box>
                    )
                )}
              </Box>
            </Box>
          </Box>
        </FAQHeader>
      </Container>
    </ContainerFAQ>
  );
};
export default FAQfeature;
