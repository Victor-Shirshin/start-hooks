// Когда использовать React.cloneElement()? Когда невозможно изменить параметры ли необходимо изменить или добавить параметры
import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";

const CloneElementExample = () => {
    // клонировали field
    const field = <TextField label="email" name="email" />;

    const handleChangle = (target) => {
        console.log("'change' in CloneElementExample: ", target);
    };

    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChangle,
                label: "Клонированный email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
