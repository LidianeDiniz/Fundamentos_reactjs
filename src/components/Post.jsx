import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/LidianeDiniz.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lidiane Diniz</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio ás 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>

       <p> Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉</p>

       <p> Acesse e deixe seu feedback</p>
       <p>👉{' '}<a href="" >jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
        placeholder="Deixe seu comentário"
        />

       <footer>
       <button type="submit">Publicar</button>
       </footer>

      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
