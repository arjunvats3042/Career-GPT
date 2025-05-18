"use client";

import React, {useState} from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({content}) => {
  const [value, setValue] = useState(content);

  return (
    <div className="py-4">
      <MDEditor
        value={value}
        onChange={setValue}
        preview="edit"
        height={500}
        style={{padding: "16px"}}
      />
    </div>
  );
};

export default CoverLetterPreview;
