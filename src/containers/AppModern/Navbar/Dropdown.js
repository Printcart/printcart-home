import Link from "next/link";
import styled from "styled-components";

const DropdownUL = styled.ul`
  position: absolute;
  padding-left: 0px;
  padding-top: 15px;
  margin-top: 30px;
  border-top: 5px solid #424dc6;
  padding-bottom: 15px;
  min-width: 208px;
  background: #fff;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
`;
const DropdownLi = styled.li`
  list-style: none;
  padding: 0px;
  display: flex;
  min-width: 200px;
  width: auto;
  position: relative;
  & a:hover {
    color: #424dc6 !important;
  }
`;
const Dropdown = ({ submenus }) => {
  return (
    <DropdownUL>
      {submenus.map((submenu, index) => (
        <DropdownLi key={index}>
          <Link
            href={submenu.url}
            style={{ color: "#444", lineHeight: "30px" }}
            target={submenu.target ? "_blank" : null}
            offset={84}
          >
            {submenu.title}
          </Link>
        </DropdownLi>
      ))}
    </DropdownUL>
  );
};

export default Dropdown;
