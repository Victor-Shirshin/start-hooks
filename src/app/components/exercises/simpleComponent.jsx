import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogOut, onLogin }) => {
    return (
        <>
            {!isAuth ? (
                <button className="btn btn-secondary" onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-success" onClick={onLogOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func
};

export default SimpleComponent;
