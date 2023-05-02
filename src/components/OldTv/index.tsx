import React, { ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
}

const OldTV = ({ children, ...other }: Props) => {
  return (
    <div className="old-tv" {...other}>
      <div className="screen">{children}</div>
    </div>
  );
};

export default OldTV;
