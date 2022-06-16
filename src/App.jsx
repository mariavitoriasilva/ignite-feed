import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';


export function App() {
 return (
   <div>
     <Header />

     <div className={styles.wrapper}>
     <Sidebar />
     <main>
          <Post 
          author="Maria"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cumque deserunt est reprehenderit voluptas ea cum, commodi, nostrum a ullam nesciunt fugit, architecto veritatis. Blanditiis libero distinctio fugit voluptates magnam.          "
          />
          <Post 
          author="Vitória   "
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cumque deserunt est reprehenderit voluptas ea cum, commodi, nostrum a ullam nesciunt fugit, architecto veritatis. Blanditiis libero distinctio fugit voluptates magnam.          "
          />
        </main>
     </div>
   </div>
 )
}
