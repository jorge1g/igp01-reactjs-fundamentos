import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import stylesComment from './Comment.module.css';

export function Comment({ content }) {
    return(
        <div className={stylesComment.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/54822837?v=4" />

            <div className={stylesComment.commentBox}>
                <div className={stylesComment.commentContent}>
                    <header>
                        <div className={stylesComment.authorAndTime}>
                            <strong>Jorge Silva</strong>
                            <time title="11 de maio às 08:15h" dateTime="2002-05-11 08:13:35">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>


                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}