import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import stylesApp from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={stylesApp.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jorge Gonzaga"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quos, veritatis incidunt atque tempore ex odio minima, pariatur minus consequatur sequi temporibus necessitatibus quisquam numquam adipisci repellendus velit natus enim."
          />
          <Post 
            author="Diego Gonzaga" 
            content="Jogar é muito bom" 
          />
        </main>
      </div>
    </div>
  );
}
