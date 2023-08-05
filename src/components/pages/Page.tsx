import React from 'react';
import {PagesType} from "../../data/dataStste";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

export type PageTypeProps={
    pages: Array<PagesType>
}

export const Page: React.FC<PageTypeProps> = ({
                                                  pages
                                              }) => {
    const params = useParams()

    if (Number(params.id) >= pages.length) {
        return <Error404 />;
    }

    return (
        <div>
<div>{pages[Number(params.id)].heading}</div>
<div>{pages[Number(params.id)].about}</div>
        </div>
    );
};

