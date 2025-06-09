import React from "react"; // если не используешь JSX auto-runtime

import "./App.css";
import Catalog from "./blocks/catalog";
import FirstBlock from "./blocks/firstblock";
import GenderSection from "./blocks/genderSection.tsx";
import Menu from "./components/menu";
import { Form } from "./blocks/form.tsx";
import Footer from "./blocks/footer.tsx";

function App() {
  return (
    <>
      <div>
        <div className="container">
          <Menu />
        </div>
        <FirstBlock />
        <Catalog />
        <GenderSection />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
