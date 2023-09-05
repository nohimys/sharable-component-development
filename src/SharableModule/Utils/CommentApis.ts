import get from "./CoreApis";
import IComment from "../Modals/IComment";

const CommentApis = {
    getCommentById: async (id: number): Promise<IComment> => {
        return  await get(`comments/${id}`).then(result => result.json());
    },
    getCommentsByPostId: async (postId: number): Promise<IComment[]> => {
        return await get(`comments?postId=${postId}`).then(result => result.json());

    }
};
export default CommentApis;