import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import "./menu.css";
import { useState } from "react";

const leftMenu = ["Male", "Female", "Lookbook", "Contacts"];
const rightMenu = ["Account", "Search"];

interface MenuItemProps {
  text: string;
  delay: number;
  mobile?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, delay, mobile = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: mobile ? 0 : 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <a href="#">{text}</a>
    </motion.div>
  );
};

export default function Menu() {
  const startDelay = 5; // seconds
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="menu">
        {/* Desktop menu */}
        <ul className="ul desktop-menu">
          {leftMenu.map((item, index) => (
            <li key={index}>
              <MenuItem text={item} delay={startDelay + index * 0.1} />
            </li>
          ))}
        </ul>

        <div className="center">
          <Logo />
        </div>

        <div className="right desktop-menu">
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

        {/* Mobile burger button */}
        <motion.div
          className="burger-button"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7 }
            }}
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7 }
            }}
          />
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-menu-list">
              {[...leftMenu, ...rightMenu, "Cart(0)"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  <MenuItem text={item} delay={0} mobile={true} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
