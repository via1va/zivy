
import { motion } from "framer-motion";
import Logo from "./logo";
import "./menu.css";

const leftMenu = ["Male", "Female", "Lookbook", "Contacts"];
const rightMenu = ["Accound", "Search"];

interface MenuItemProps {
  text: string;
  delay: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <a href="#">{text}</a>
    </motion.div>
  );
};

export default function Menu() {
  const startDelay = 5; // seconds

  return (
    <div className="menu">
      <ul className="ul">
        {leftMenu.map((item, index) => (
          <li key={index}>
            <MenuItem text={item} delay={startDelay + index * 0.1} />
          </li>
        ))}
      </ul>

      <div className="center">
        <Logo />
      </div>

      <div className="right">
        <ul className="ul-right">
          <div>
            {rightMenu.map((item, index) => (
              <li key={index}>
                <MenuItem
                  text={item}
                  delay={startDelay + (leftMenu.length + index) * 0.1}
                />
              </li>
            ))}
          </div>
          <li>
            <MenuItem
              text="Cart(0)"
              delay={startDelay + (leftMenu.length + rightMenu.length) * 0.1}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

