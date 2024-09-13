import PostService, {CreatePostPayload} from "../../services/post";
import {User} from "../user";

const queries = {
    hello: () => {
        return "hi"
    }
}

const mutations = {
    createPost: async (_:any, payload: CreatePostPayload) => {
        const res = await PostService.createPost(payload);
        return res.id;
    }
}

export const resolvers = {queries, mutations};