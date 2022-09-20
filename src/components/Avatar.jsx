import stylesAvatar from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) {
    return(
        <img 
            className={hasBorder ? stylesAvatar.avatarWithBorder : stylesAvatar.avatar} 
            src={src} 
        />
    );
}