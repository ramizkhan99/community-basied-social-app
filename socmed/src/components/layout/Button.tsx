import React, { FunctionComponent } from "react";
import { Button } from "antd";

import "./styles/Button.scss";
import { type } from "os";

interface IButtonProps {
    type: "text" | "link" | "primary" | "ghost";
}

const CustomButton: FunctionComponent<IButtonProps> = ({ type, children }) => {
    return (
        <div>
            <Button type={type}>{children}</Button>
        </div>
    );
};

export default CustomButton;
