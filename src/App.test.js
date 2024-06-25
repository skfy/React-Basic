// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import {useState} from "react";
import {Content, PublishButton, Title} from "./index";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  console.log(isPublished)
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      <button onClick={() => setIsPublished(true)}>公開</button>
    </div>
    );
};

export default Article;