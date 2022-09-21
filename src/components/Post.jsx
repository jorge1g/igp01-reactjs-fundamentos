import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import stylesPost from './Post.module.css';

export function Post({ author, publishedAt, content } ) {
    const [comments, setcomments] = useState([
        1,
        2,
    ])

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setcomments([...comments,comments.length + 1]);


        console.log(comments);
    }

    return (
        <article className={stylesPost.post}>
            <header>
                <div className={stylesPost.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={stylesPost.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString}>
                    {publishedDateRelativeToNow}
                    
                </time>
            </header>

            <div className={stylesPost.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })}

             </div>

             <form onSubmit={handleCreateNewComment} className={stylesPost.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

             </form>

             <div className={stylesPost.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>

        </article>

    );
}