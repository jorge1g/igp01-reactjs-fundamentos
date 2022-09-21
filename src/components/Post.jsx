import { Avatar } from './Avatar';
import { Comment } from './Comment';
import stylesPost from './Post.module.css';

export function Post(props) {
    return (
        <article className={stylesPost.post}>
            <header>
                <div className={stylesPost.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/54822837?v=4" />
                    <div className={stylesPost.authorInfo}>
                        <strong>Jorge Luis</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:15h" dateTime="2002-05-11 08:13:35">Publicado há 1h</time>
            </header>

            <div className={stylesPost.content}>
                
                
                
             </div>

             <form className={stylesPost.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

             </form>

             <div className={stylesPost.commentList}>
                <Comment />
                <Comment />
                <Comment />
             </div>

        </article>

    );
}