import React, { useState } from "react";
import styled from "styled-components";

const FAQItemContainer = styled.div`
  margin-bottom: 0.7rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  padding: 0.8rem;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #adb5bd;
  }
`;

const FAQButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
`;

const QuestionText = styled.span`
  font-weight: bold;
  color: #6c757d;
`;

const AnswerContainer = styled.div`
  padding: 0.5rem 0.75rem;
`;

const AnswerText = styled.div`
  color: #6c757d;
`;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <FAQItemContainer>
      <FAQButton
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <QuestionText>{question}</QuestionText>
      </FAQButton>
      {isOpen && (
        <AnswerContainer>
          <hr className="mt-2" />
          <AnswerText id={`faq-answer-${question}`}>{answer}</AnswerText>
        </AnswerContainer>
      )}
    </FAQItemContainer>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "1. What is Printcart's Print on Demand (POD) service?",
      answer: (
        <>
          <p>
            Printcart's POD service allows individuals and businesses to create
            and customize a wide range of products, from apparel to home decor
            items, and have them printed and shipped to customers on demand.
          </p>
        </>
      ),
    },
    {
      question: "2. How does Printcart's POD service work?",
      answer: (
        <>
          <p>
            Users can select products from Printcart's catalog, customize them
            with their own designs, and list them in their online store. When a
            customer places an order, Printcart handles the production, quality
            control, packaging, and shipping, ensuring a seamless and efficient
            process.
          </p>
        </>
      ),
    },
    {
      question:
        "3. What products can I customize with Printcart's POD service?",
      answer: (
        <>
          <p>
            Printcart offers a diverse catalog of customizable products,
            including T-shirts, hoodies, posters, mugs, phone cases, and more.
            The specific product offerings may vary.
          </p>
        </>
      ),
    },
    {
      question:
        "4. Is there a minimum order quantity when using Printcart's POD service?",
      answer: (
        <>
          <p>
            No, one of the advantages of Printcart's POD service is that there
            is typically no minimum order quantity. Products are printed and
            shipped on a per-order basis, reducing the need for holding
            inventory.
          </p>
        </>
      ),
    },
    {
      question:
        "5. Can I use my own designs and branding with Printcart's POD service?",
      answer: (
        <>
          <p>
            Yes, users can upload their own designs, logos, and branding
            elements to create personalized products. Printcart also often
            provides options for custom branding on packaging.
          </p>
        </>
      ),
    },
    {
      question:
        "6. How do I integrate Printcart's POD service with my e-commerce store?",
      answer: (
        <>
          <p>
            Printcart often offers integrations with popular e-commerce
            platforms, allowing you to connect your store seamlessly. You can
            usually find integration instructions and support within your
            Printcart account.
          </p>
        </>
      ),
    },
    {
      question: "7. What is the pricing structure for Printcart's POD service?",
      answer: (
        <>
          <p>
            Printcart typically provides a base cost for each product, and users
            can set their own retail prices. The profit you earn is the
            difference between the base cost and your chosen selling price.
          </p>
        </>
      ),
    },
    {
      question: "8. Does Printcart provide any analytics or reporting tools?",
      answer: (
        <>
          <p>
            Yes, Printcart often offers analytics and reporting tools that allow
            you to track sales, revenue, customer behavior, and other essential
            data to help you make informed business decisions.
          </p>
        </>
      ),
    },
    {
      question:
        "9. What is the customer support like with Printcart's POD service?",
      answer: (
        <>
          <p>
            Printcart typically provides customer support to assist with
            inquiries, issues, and returns related to orders. The level of
            customer support may vary depending on the platform.
          </p>
        </>
      ),
    },
    {
      question: "10. Can I scale my business with Printcart's POD service?",
      answer: (
        <>
          <p>
            Yes, Printcart allows you to scale your business as it grows. You
            can add more products, designs, and marketing strategies to increase
            sales and expand your offerings.
          </p>
        </>
      ),
    },
    {
      question: "11. Is Printcart's POD service available globally?",
      answer: (
        <>
          <p>
            Yes, Printcart often collaborates with printing partners worldwide,
            enabling efficient global shipping and allowing you to reach
            customers in various regions.
          </p>
        </>
      ),
    },
  ];
  return (
    <div className="accordion mt-5 mb-5">
      <h2>FAQ</h2>
      <p>
        Get answers to common questions about our printing services, products,
        and policies. Simplifying your printing experience, one query at a time
      </p>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
