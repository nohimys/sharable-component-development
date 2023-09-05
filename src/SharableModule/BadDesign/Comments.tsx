import {List, ListItem} from '@mui/material';
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IComment from "../Modals/IComment";
import CommentApis from "../Utils/CommentApis";
import {useEffect, useState} from "react";

interface IComments {
    requirementId: number;
    contextId: number;
    contextType: ('POST' | 'COMMENT');
}

const Comments = (props: IComments) => {

    const [commentsList, setCommentsList]
        = useState<IComment[]>(() => []);

    const {requirementId, contextType, contextId} = props;

    const fontColor
        = requirementId === 1
        ? 'red'
        : requirementId === 2
            ? 'blue'
            : 'green';

    const getListItem = (item: IComment) => {

        const nameOrEmail = requirementId === 1
            ? `Name: ${item.name}`
            : requirementId === 2
                ?`Email: ${item.email}`
                : null;

        return (
            <div key={item.id}>
                <ListItem alignItems="flex-start">
                    <Typography
                        color={fontColor}
                    >
                        <ListItemText
                            primary={nameOrEmail}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color={fontColor}
                                    >
                                        Comment: {item.body}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </Typography>
                </ListItem>
                <Divider variant="inset" component="li"/>
            </div>
        );
    }

    const getCommentsList = () => {
        if (commentsList.length === 0) {
            return 'Loading...'
        }
        const commentList = commentsList.map((oneComment) => {
            return getListItem(oneComment);
        });

        return (
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {commentList}
            </List>
        );
    }

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

    return (
        <div style={{margin: 'auto', width: '40%'}}>
            <h6>Comments</h6>
            {getCommentsList()}
        </div>
    );
}
export default Comments;