import React, { useRef, useState, useEffect } from "react";

const Typograf = (props) => {
  const tp = useRef(null);
  tp.current = new Typograf({ locale: ["ru", "en-US"] });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: tp.current.execute(props.children) }}
    />
  );
};

export default Typograf;
