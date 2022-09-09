// С помощью React.memo() можно оптимизировать количество ререндеров целого компонента. React.memo() МЕМОИЗИРУЕТ целый компонент !!!
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button in Component??? LogOutButton");
    });

    return (
        <button className="btn btn-primary ms-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

// Написали фун-ию для глубокого сравнения передаваемых props??? в <MemoizedLogOutButton onLogOut={handleLogOut} />
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

// Если компонент рендерит одно и тоже при не меняющихся props то можно обернуть его в вызов React.memo() для предотвращения лишних рендеров. Так поступили с LogOutButton так как были лишние рендеры его
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    // чтобы не пересоздавалась фун-ия каждый раз и не вызывала LogOutButton то обернём в useCallback() для МЕМОИЗАЦИИ
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                {" "}
                инизиализация перерендера нажми проверить
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
