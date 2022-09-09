import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // 1. Фу-ия запускается при каждом рендере ЭТО ПЛОХО
    const validateWithOutCallback = (data) => {
        console.log("data Функция 1", data);
    };

    // 3. МЕМОИЗИРОВАЛИ вызов фу-ии через useCallback() "именно в данном примере не нужно ставить зависимость" так как нет зависимых данных в области фу-ии т.е не берём ничего из родительского компонента
    const validateWithCallback = useCallback((data) => {
        console.log("data Функция 2", data);
    }, []);

    // 2. Вызываем фу-ию validateWithOutCallback при каждом изменении DATA и ЭТО ПЛОХО. А вот вызов фу-ии validateWithCallback МЕМОИЗИРОВАН
    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>
                Каждый раз при вводе/удалении в поле input запускается функция
                withOutCallback():: {withOutCallback.current}
            </p>
            <p>
                МЕМОИЗИРОВАЛИ вызов функции withOutCallback() при вводе/удалении
                в поле input:: {withCallback.current}
            </p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control mb-2"
                id="email"
                value={data.email || ""} // liveHack чтобы state не задавать и при этом ошибки что state не задан не будет
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
