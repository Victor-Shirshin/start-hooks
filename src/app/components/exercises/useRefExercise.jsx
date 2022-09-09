import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const myRef = useRef();
    let flag = false;

    const handleChangeStyle = () => {
        if (!flag) {
            myRef.current.style.width = "80px";
            myRef.current.style.height = "150px";
            myRef.current.textContent = "text";
            flag = true;
        } else {
            myRef.current.style.width = "60px";
            myRef.current.style.height = "40px";
            myRef.current.textContent = "Блок";
            flag = false;
        }
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={myRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-primary mt-2"
                onClick={handleChangeStyle}
            >
                Кнопка для изменения кнопки блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
