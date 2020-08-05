import React from 'react';

function LinkButton(props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default LinkButton;