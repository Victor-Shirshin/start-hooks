import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        // console.log(inputRef.current);
        inputRef.current.style.width = "200px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-2"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                фокус input
            </button>
            <button
                className="btn btn-secondary ms-2"
                onClick={handleClickWidth}
            >
                изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
