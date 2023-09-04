import get from "./CoreApis";

const CommentApis = {
    getCommentById: async (id: number) => {
        const result = await get(`/comments/${id}`);
        return result;
    },
    getCommentsByPostId: async (postId: number) => {
        const result = await get(`/comments?postId=${postId}`);
        return result;
    }
};
export default CommentApis;