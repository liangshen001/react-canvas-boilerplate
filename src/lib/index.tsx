import ReactCanvas from "@liangshen/react-canvas";
import React from "react";
import Notice from "./Notice";

export function notice(canvas: any, items: any[]) {
    ReactCanvas.render(canvas,
        <React.StrictMode>
            <Notice items={items}/>
        </React.StrictMode>
    );
}
