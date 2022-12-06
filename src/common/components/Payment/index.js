import { SectionHeader } from "containers/AppModern/appModern.style";
import SectionWrapper from "containers/AppModern/Features/features.style";
import React from "react";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import Container from "../UI/Container";
import { CustomTable } from "./styleTable";
// import styles from "./styleTable.js";

const contact = "https://solution.printcart.com/home/teams/#contact";
const tiers = [
  {
    tier: "Free",
    price: "$0 / month",
    button: {
      label: "Contact",
      url: contact,
    },
  },
  {
    tier: "Premium",
    price: "$49 / month",
    button: {
      label: "Contact",
      url: contact,
    },
  },
  {
    tier: "Advanced",
    price: "$99 / month",
    button: {
      label: "Contact",
      url: contact,
    },
  },
  {
    tier: "Enterprise",
    price: "-",
    button: {
      label: "Contact",
      url: contact,
    },
  },
];
const pricings = [
  {
    name: "Feature",
    items: [
      {
        name: "Premium 10000+ Design and Clipart Templates",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Intergration with your website (via plugins or API)",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Integrated Product Customization Tool",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Print-ready files [PNG, SVG]",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Unlimited product views and print areas per product",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Unlimited download and edit Client Designs",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Rest API Access",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Setting your Product Customizer Branding",
        desc: "",
        value: [
          { value: "no" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Export to PDF",
        value: [
          { value: "no" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Up your own Mock-Up",
        desc: "",
        value: [
          { value: "Unlimited" },
          { value: "Unlimited" },
          { value: "Unlimited" },
          { value: "Unlimited" },
        ],
      },
    ],
  },
  {
    name: "Storage",
    items: [
      {
        name: "Maximum Design file size uploading",
        value: [
          { value: "50MB" },
          { value: "500MB" },
          { value: "5GB" },
          { value: "Contact" },
        ],
      },
      {
        name: "Number of Orders per month",
        value: [
          { value: "10" },
          { value: "100" },
          { value: "1000" },
          { value: "Contact" },
        ],
      },
      {
        name: "Cloud Media File Storage",
        value: [
          { value: "10GB" },
          { value: "100GB" },
          { value: "1TB" },
          { value: "Contact" },
        ],
      },
      {
        name: "Number of Products per store",
        value: [
          { value: "5" },
          { value: "Unlimited" },
          { value: "Unlimited" },
          { value: "Unlimited" },
        ],
      },
    ],
  },
];

const Payment = () => {
  return (
    <SectionWrapper id="features">
      <SectionHeader>
        <h1 className="titleSlogan">Easy to try. Fair pricing to upgrade.</h1>
        <p>
          Please choose the appropriate predefined subscription package for your
          cloud printing or contact us for custom pricing.
        </p>
      </SectionHeader>
      <Container>
        <CustomTable>
          <thead>
            <tr>
              <th className="setWidth">
                <div />
              </th>
              {tiers.map((tier, typeIndex) => (
                <th className="align-top" key={typeIndex}>
                  <div className="cover-content">
                    <div className="content-one">{tier.tier}</div>
                    <div className="pcPrice">{tier.price}</div>
                    {tier?.button && tier?.button?.label && (
                      <a className="btnContact" href={tier.button.url}>
                        {tier.button.label}
                      </a>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricings.map((price, priceIndex) => (
              <React.Fragment key={priceIndex}>
                <tr>
                  <th className="pcTitle" colSpan={5}>
                    <div className="text-name">{price.name}</div>
                  </th>
                </tr>
                {price?.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className="pcTitle">{item.name}</td>
                    {item?.value.map((value, valueIndex) => (
                      <td key={valueIndex} className="value">
                        {value.value === "yes" && <Icon icon={check} />}
                        {value.value !== "yes" &&
                          value.value !== "no" &&
                          value.value !== "Contact" &&
                          value.value !== "Contact" && (
                            <div className="text-value">{value.value}</div>
                          )}
                        {(value.value === "Contact" ||
                          value.value === "contact") && (
                          <a className="btnContact" href={contact}>
                            {value.value}
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </CustomTable>
      </Container>
    </SectionWrapper>
  );
};

export default Payment;
