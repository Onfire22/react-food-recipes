import { useState } from "react";
import Form from 'react-bootstrap/Form';

const Search = ({ filter }) => {
  const [text, setText] = useState('');

  const handleSearch = () => filter(text);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Form.Control
        data-bs-theme="dark"
        size="lg"
        type="text"
        placeholder="Category Search"
        value={text}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={handleKey}
      />
    </>
  );
};

export default Search;
