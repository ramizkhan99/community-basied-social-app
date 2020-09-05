import React from "react";
import { Button } from "antd";

import "../styles/Button.scss";

interface IButtonProps {
    name: string;
}

const CustomButton = (props: IButtonProps) => {
    return (
        <div>
            <Button type="primary">Hello!</Button>
            <h1>Hello {props.name}</h1>
        </div>
    );
};

export default CustomButton;
