// Если пользователь зарегистрирован то выдаём этот КОМПОНЕНТ если нет то переадресуем на РЕГИСТРАЦИЮ а в текуциий момент выведем просто надпись РЕГИСТРАЦИЯ
// Так как это не КОМПОНЕНТ а ФУНКЦИЯ то называем с маленькой буквы
// Тут происходит замыкание так как в функцию вложена функция
// Вложенная функция в замыкание не имеет название и esLint требует от нас имя и мы внесли исключение в esLint

import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? (
                <Component {...props} />
            ) : (
                <SmallTitle>
                    Выводит Auth (регистрация) если (isLogin = false)
                </SmallTitle>
            )}
        </>
    );
};

export default withLogin;
