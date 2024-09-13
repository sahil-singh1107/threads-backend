import {prismaClient} from "../lib/db";

export interface CreatePostPayload {
    title: string;
    description: string;
    user: string;
}

class PostService {
    public static createPost (payload: CreatePostPayload) {
        const { title, description, user } = payload;
        return prismaClient.post.create({
            data: {
                title,
                description,
                user,
            }
        })
    }
}

export default PostService;