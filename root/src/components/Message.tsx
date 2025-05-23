import type { ReactNode } from "react";

export default function Message({
    author,
    date,
    children,
}: {
    author: string;
    date: string;
    children: ReactNode;
}) {
    return (
        <div className="message-container">
            <span>{date}</span>
            <br></br>
            <span>By: {author}</span>
            <hr></hr>
            {children}
        </div>
    );
}
