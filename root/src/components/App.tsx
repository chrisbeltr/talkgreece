import { useState } from "react";
import IndexTable from "./IndexTable";
import { PostHandler } from "./PostHandler";

export default function App() {
    // define state for what page we're on
    const [postId, setPostId] = useState(0);

    document.getElementById("home")!.addEventListener("click", () => {
        setPostId(0);
    });

    if (postId === 0) {
        return <IndexTable postId={postId} setPostId={setPostId}></IndexTable>;
    } else {
        return <PostHandler postId={postId}></PostHandler>;
    }

    return "Something went wrong.";
}
