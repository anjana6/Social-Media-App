import postRepository from "../repositories/postRepository";

class PostService{

    createPost(requestBody){
        const {userId,title,postUrl,description} = requestBody;

        const body = {
            user_id: userId,
            title: title,
            post_url: postUrl,
            description: description
        }

        return postRepository.createPost(body);
    }

    deletePost(postId){
        return postRepository.deletePost(postId)
    }

    fetchPosts(){
        return postRepository.fetchPosts();
    }

}

const postService = new PostService();
export default postService;