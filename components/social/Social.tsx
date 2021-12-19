import React from 'react'
import classnames from 'classnames';
import Icon from '../icon/Icon';

interface SocialProps {
    socialNetworks: { name: "twitter" | "linkedin" | "github", url: string }[]
    text: string
    className: string
}

const Social = (props: SocialProps) => {
    const { socialNetworks, text, className = "social" } = props;
    const classes = (element: string) => classnames(`${className}__${element}`);
    return <div className={classes("container")}>
        <h4 className={classes("text")}>{text}</h4>
        <div className={classes("icons")}>        {socialNetworks.map((platform) => <div className={classes("icon")}><Icon name={platform.name} url={platform.url} className={classes(`icon--${platform.name}`)} /></div>)}
        </div>
    </div>
}

export default Social;
