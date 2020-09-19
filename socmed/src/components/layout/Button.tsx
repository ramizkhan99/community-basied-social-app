import React from "react";
import { Button } from "antd";

import "../styles/Button.scss";

interface IButtonProps {
    name: string;
}

const CustomButton = (props: IButtonProps) => {
    return (
        <div>
            <Button type="primary">{props.name}!</Button>
        </div>
    );
};

export default CustomButton;
