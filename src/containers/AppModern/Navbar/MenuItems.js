import Link from "next/link";
import Icon from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  return (
    <li style={{ position: "relative" }}>
      {items.submenu ? (
        <>
          <a
            href={items.url}
            target={items.target ? "_blank" : null}
            offset={84}
          >
            {items.title}{" "}
            <Icon
              icon={ic_keyboard_arrow_down}
              size={20}
              style={{ marginLeft: "-5px" }}
            />
          </a>

          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <Link href={items.url}>
          <a target={items.target ? "_blank" : null} offset={84}>
            {items.title}
          </a>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
