import React from 'react';

type ButtonPropType = {
    title: string


}

const Button = ( props: ButtonPropType  ) => {

    return (
            <button>{props.title}</button>
    );
};

export default Button;