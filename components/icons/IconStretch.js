// icon:yoga | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconStretch(props) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M13 4 A1 1 0 0 1 12 5 A1 1 0 0 1 11 4 A1 1 0 0 1 13 4 z" />
            <path d="M4 20h4l1.5-3M17 20l-1-5h-5l1-7" />
            <path d="M4 10l4-1 4-1 4 1.5 4 1.5" />
        </svg>
    );
}

export default IconStretch;
