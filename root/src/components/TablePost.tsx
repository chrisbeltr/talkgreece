interface Props {
    title: string;
    description: string;
    author: string;
    messages: number;
    lastMessage: string;
    lastAuthor: string;
    postId: number;
    setPostId: React.Dispatch<React.SetStateAction<number>>;
}

export default function TablePost({
    title,
    description,
    author,
    messages,
    lastMessage,
    lastAuthor,
    postId,
    setPostId,
}: Props) {
    return (
        <tr>
            <td>
                <a
                    href="#"
                    onClick={() => {
                        setPostId(postId);
                    }}
                    className="table-link"
                >
                    <b>{title}</b>
                    <br></br>
                    <span>{description}</span>
                    <br></br>
                    <span>By: {author}</span>
                </a>
            </td>
            <td className="fit center">{messages}</td>
            <td className="fit center">
                {lastMessage}
                <br></br>
                By: {lastAuthor}
            </td>
        </tr>
    );
}
