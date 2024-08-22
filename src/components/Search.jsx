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
        size="lg"
        type="text"
        placeholder="Search"
        value={text}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={handleKey}
      />
    </>
  );
};

export default Search;
