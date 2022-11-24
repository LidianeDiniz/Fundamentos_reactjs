import { Avatar } from "./Avatar";
import {format, formatDistanceToNow} from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import {useState} from "react";
import { CodesandboxLogo } from "phosphor-react";



export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState([
   'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentTex]= useState('')

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBr});

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true});

  function handleCreateNewComment(){
    event.preventDefault();
   
    setComments([...comments, newCommentText]);
    setNewCommentTex('');

  }

  function handleNewCommentChange(){
    setNewCommentTex(event.target.value)
  }

  function deleteComment(comment){
    console.log(`Deletar comentário ${comment}`);
  }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
         <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
          <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;

          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
        name= "comment"
        value={newCommentText}
        placeholder="Deixe seu comentário"
        onChange={handleNewCommentChange}
        />

       <footer>
       <button type="submit">Publicar</button>
       </footer>

      </form>

      <div className={styles.commentList}>
      {comments.map(comment => {
        return <Comment 
          key={comment} 
          content={comment} 
          onDeleteComment={deleteComment}
        />
      })}

      </div>
    </article>
  );
}
