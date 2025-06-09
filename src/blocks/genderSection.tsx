import React from "react";
import "./genderSection.css";
export default function GenderSection() {
  return (
    <>
      <div className="gender">
        <div className="male">
          <div className="male__title">
            <h2 className=" male__h2">male</h2>
          </div>
          <div className="male__outfits">
            <h2>male</h2>
            <a href="">Now in</a>
            <a href="">Clothing</a>
            <a href="">Shoes</a>
            <a href="">Accesories</a>
          </div>
        </div>
        <div className="female">
          <div className="female__title">
            <h2>Female</h2>
          </div>

          <div className="female__outfits">
            <h2>female</h2>
            <a href="">Now in</a>
            <a href="">Clothing</a>
            <a href="">Shoes</a>
            <a href="">Accesories</a>
          </div>
        </div>
      </div>
    </>
  );
}
