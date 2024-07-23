import {ProgressBar} from "./ProgressBar.tsx";
import {Outlet} from "react-router-dom";

export function MainScreen () {
    return (
        <div>
            <ProgressBar/>
            <Outlet/>
        </div>
    )
}
