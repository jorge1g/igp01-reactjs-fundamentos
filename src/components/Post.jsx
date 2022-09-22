import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import stylesPost from './Post.module.css';

// Estado dos comentários. Comtrola quais comentários o Post tem.
export function Post({ author, publishedAt, content } ) {
    // Lista de comentários e uma Função setComments
    const [comments, setComments] = useState([
        "Post muito bacana, hein!?"
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
         
        setComments([...comments, newCommentText]);
        setNewCommentText('');
        
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }
    // Função	recebe qual comentário para remover
    function deleteComment(comment) {
        console.log(`Deletar Comentário ${comment}`);

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

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                    
                </time>
            </header>

            <div className={stylesPost.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}

             </div>

             <form onSubmit={handleCreateNewComment} className={stylesPost.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

             </form>

             <div className={stylesPost.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>

        </article>

    );
}