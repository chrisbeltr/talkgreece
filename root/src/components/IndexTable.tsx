import TablePost from "./TablePost";
import "../css/table.css";

export default function IndexTable({
    setPostId,
}: {
    postId: number;
    setPostId: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <table id="posts">
            <thead>
                <tr>
                    <th>Posts</th>
                    <th className="fit">Messages</th>
                    <th className="fit">Last Message</th>
                </tr>
            </thead>
            <tbody>
                <TablePost
                    title="Agora digging??"
                    description="Is the ASCSA still digging at the site of the ancient agora? If I were to..."
                    author="daBigOne"
                    messages={7}
                    lastMessage="16/8/2024"
                    lastAuthor="tecVALANCHE"
                    postId={3}
                    setPostId={setPostId}
                ></TablePost>
                <TablePost
                    title="Thessaloniki Metro delayed again… how much is too much?"
                    description="They’re delaying the construction of the metro station in
                Thessaloniki. How long..."
                    author="guyfieri82"
                    messages={6}
                    lastMessage="5/10/2023"
                    lastAuthor="badThrowaway107293"
                    postId={1}
                    setPostId={setPostId}
                ></TablePost>
                <TablePost
                    title="Any good food recommendations?"
                    description="I just landed in Athens and I'm staying near Syntagma Square,
                anyone got any restaurants..."
                    author="n.a.g.w.j.l.h"
                    messages={2}
                    lastMessage="3/1/2022"
                    lastAuthor="JMH"
                    postId={5}
                    setPostId={setPostId}
                ></TablePost>
                <TablePost
                    title="How long must I wait for excavations"
                    description="Guys I've been waiting for months I don't know how much longer I
                can wait for these stupid excavations I need..."
                    author="imp8cent"
                    messages={4}
                    lastMessage="11/12/2021"
                    lastAuthor="imp8cent"
                    postId={4}
                    setPostId={setPostId}
                ></TablePost>
                <TablePost
                    title="What do to about ancient artifacts..."
                    description="Hey all, I think I might've found something big while digging on my property. I don't..."
                    author="LifeInGreece"
                    messages={8}
                    lastMessage="12/6/2020"
                    lastAuthor="LifeInGreece"
                    postId={2}
                    setPostId={setPostId}
                ></TablePost>
            </tbody>
        </table>
    );
}
