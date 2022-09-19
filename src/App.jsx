import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <Post
        author="Jorge Gonzaga"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quos, veritatis incidunt atque tempore ex odio minima, pariatur minus consequatur sequi temporibus necessitatibus quisquam numquam adipisci repellendus velit natus enim."
      />
      <Post 
      author="Diego Gonzaga"
      content="Jogar é muito bom"
      />
    </div>
  );
}
