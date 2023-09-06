import IComment from "../Modals/IComment";
import {ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";
import DisplayLabel from "../Modals/DisplayLabel";

interface ICommentList extends IComment{
    fontColour: string;
    displayLabel: DisplayLabel
}

const SingleComment = (props: ICommentList) => {

    const getDisplayLabel = () => {
        switch (props.displayLabel) {
            case DisplayLabel.NAME:
                return `Name: ${props.name}`;
            case DisplayLabel.EMAIL:
                return `Email: ${props.email}`;
            case DisplayLabel.NONE:
            default:
                return null;
        }
    }

    return (
        <div key={props.id}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={<Typography variant="body2" style={{ color: props.fontColour }}>{getDisplayLabel()}</Typography>}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color={props.fontColour}
                            >
                                Comment: {props.body}
                            </Typography>
                        </React.Fragment>
                    }
                />

            </ListItem>
            <Divider variant="inset" component="li"/>
        </div>
    );
}
export default SingleComment;