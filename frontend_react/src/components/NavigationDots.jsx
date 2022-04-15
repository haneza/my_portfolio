import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "work", "skills", "about", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={
          active === item ? { backgroundColor: "rgb(47, 46, 65, 100%)" } : {}
        }
      />
    ))}
  </div>
);

export default NavigationDots;
