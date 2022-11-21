import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import style from "./App.module.css";
export function App() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Lidiane Diniz"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime autem delectus numquam tempora dolores mollitia perspiciatis unde adipisci quas, quisquam facilis qui nostrum quos voluptas a maiores consectetur suscipit"
                    />
                    <Post 
                    author= "Diego Fernandes"
                    content= "Um novo post muito legal!"
                    />

                </main>

            </div>

        </div>

    )
}
