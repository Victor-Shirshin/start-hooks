import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log("data", data);
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // Через React.Children.map избегаем ошибку если элемент один. И если он остаётся один то он становится объектом и map по объекту не иттерируется
    return React.Children.map(children, (child) => {
        // Можно передать файлы в виде пременной с объектом внутри
        // const config = {
        //     ...child.props,
        //     onchange: handleChange,
        //     value: data[child.props.name] || ""
        // };

        // Для того чтобы добавить параметры нужно клонировать елементы. Уточнение: передаём не сам объект а экземпляр обьекта тот объект что задан в коде с определёнными параметрами, а не тот что получаем через импорт.
        return React.cloneElement(child, {
            ...child.props,
            onСhange: handleChange,
            value: data[child.props.name] || "" // по дефолту value не задано поэтому добавили условие
        });
    });
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="Email" />
                <TextField name="password" label="Пароль" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
