import React from "react";

const MenuBar = ({ menu, handleClick }) => {
  return (
    <div className="menu" onClick={handleClick}>
      <span name="all" className={menu === "all" ? "checked" : ""}>
        ALL
      </span>
      <span name="ing" className={menu === "ing" ? "checked" : ""}>
        DOING
      </span>
      <span name="completion" className={menu === "completion" ? "checked" : ""}>
        COMPLETION
      </span>
    </div>
  );
};

export default MenuBar;
