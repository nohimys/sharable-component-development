import {List} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import IComment from "../Modals/IComment";
import CommentApis from "../Utils/CommentApis";
import SingleComment from "./SingleComment";
import DisplayLabel from "../Modals/DisplayLabel";

interface ICommentList {
    fontColour: string;
    displayLabel: DisplayLabel
    contextId: number;
    contextType: ('POST' | 'COMMENT');
}

const CommentList = (props: ICommentList) => {

    const {
        contextType,
        contextId,
        fontColour,
        displayLabel
    } = props;
    const [commentsList, setCommentsList] = useState<IComment[]>(() => []);

    useEffect(() => {
        if (contextType === 'POST') {
            CommentApis
                .getCommentsByPostId(contextId)
                .then(result => {
                    setCommentsList(result);
                });
        } else {
            CommentApis
                .getCommentById(contextId)
                .then(result => {
                    setCommentsList([result]);
                });
        }

    }, [contextId, contextType]);

    if (commentsList.length === 0) {
        return (
            <div> Loading...</div>
        );
    }

    const commentList = commentsList.map((oneComment) => {
        return (
            <SingleComment
                fontColour={fontColour}
                displayLabel={displayLabel}
                postId={oneComment.postId}
                id={oneComment.id}
                name={oneComment.name}
                email={oneComment.email}
                body={oneComment.body}
                key={oneComment.id}
            />
        );
    });

    return (
        <div style={{margin: 'auto', width: '40%'}}>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {commentList}
            </List>
        </div>
    );
}
export default CommentList;