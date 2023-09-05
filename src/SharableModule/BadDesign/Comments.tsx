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
    postOrCommentId: number
}

const Comments = (props: IComments) => {

    const [commentsList, setCommentsList]
        = useState<IComment[]>(() => []);
    const getListItem = (item: IComment) => {
        return (
            <div key={item.id}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={item.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {item.email}
                                </Typography>
                                {item.body}
                            </React.Fragment>
                        }
                    />
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
        CommentApis
            .getCommentsByPostId(props.postOrCommentId)
            .then(result => {
                setCommentsList(result);
            });
    }, [props.postOrCommentId]);

    return (
        <div style={{margin: 'auto', width:'40%'}}>
            <h6>Comments</h6>
            {getCommentsList()}
        </div>
    );
}
export default Comments;