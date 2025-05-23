import { createElement } from "react";
import posts from "./Posts";
import "../css/post.css";

export function PostHandler({ postId }: { postId: number }) {
    const post = ("post" + postId) as keyof typeof posts;
    const element = posts[post];
    if (element !== undefined) return createElement(element);
    return <b style={{ fontSize: "2rem" }}>This post does not exist.</b>;
}
