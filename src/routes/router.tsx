import { createBrowserRouter } from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {Page} from "../components/pages/Page";
import {dataState} from "../data/dataStste";
import App from "../App";
import {ProtectedRoute} from "./ProtectedRoute";
import {ProtectedPage} from "../components/pages/ProtectedPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404/>,
        children: [
            {
                path: '/page/:id',
                element: (
                    <Page pages={dataState.pages}/>
                )
            },
            {
                path: '/protected',
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )
            },
        ],
    },
]);