import React from "react";
import Wrapper from "../common/Card";

const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <Wrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </Wrapper>
    );
};

export default withFunction;
