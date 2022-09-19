import stylesPost from './Post.module.css';

export function Post() {
    return (
        <article classname={stylesPost.Post}>
            <header>
                <div className={stylesPost.author}>
                    <img classname={stylesPost.avatar} src="https://avatars.githubusercontent.com/u/54822837?v=4" />
                    <div className={stylesPost.authorInfo}>
                        <strong>Jorge Luis</strong>
                        <span>Developer</span>
                    </div>

                </div>

                <time title="11 de maio às 08:15h" dateTime="2002-05-11 08:13:35">Publicado há 1h</time>
            </header>

            <div classname={stylesPost.content}>
                
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
                
            </div>
        
        
        
        
        
        
        
        
        </article>

    );
}