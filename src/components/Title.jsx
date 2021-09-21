import React, { memo } from "react";

const Title = () => {
  return (
    <div className="header">
      <h1 className="header--title">NOT TODO LIST</h1>
      <div className="header--subtitle">
        <span>하루 동안 하 지 말아야 할 일을 적어 봐요.👍</span>
      </div>
    </div>
  );
};

export default memo(Title);
