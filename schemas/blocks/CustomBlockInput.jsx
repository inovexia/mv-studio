// CustomBlockInput.js
import React, { useState } from 'react';
//import BlockEditor from '@sanity/block-editor';

const CustomBlockInput = ({ value, onChange }) => {
  const [showEditor, setShowEditor] = useState(false);

  const handleToggle = () => {
    setShowEditor(!showEditor);
  };

  const handleEditorChange = (editorValue) => {
    onChange(editorValue);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={showEditor} onChange={handleToggle} /> Show Editor
      </label>
      {showEditor ? (
        <div value={value} onChange={handleEditorChange} />
      ) : (
        <pre>{JSON.stringify(value, null, 2)}</pre>
      )}
    </div>
  );
};

export default CustomBlockInput;
