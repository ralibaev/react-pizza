import React from "react";
import classNames from "classnames";

const Button = (props) => {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline,
        })}>
        </button>
    )
}

export default Button;