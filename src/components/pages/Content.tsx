import React from 'react';
import {useNavigate} from "react-router-dom";

type ContentTypeProps = {
    heading: string,
    pages: string
}

export const Content = (props: ContentTypeProps) => {
    const {heading, pages} = props

    const navigate = useNavigate()

    const onclickMainPageHandler = () => {
        navigate('/page/0')
    }
    const onclickMainComeBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={onclickMainComeBackHandler}>Назад</button>
            <button onClick={onclickMainPageHandler}>Главная страница</button>
        </div>
    );
};

