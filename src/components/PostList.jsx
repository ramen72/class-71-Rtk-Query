import { useGetPostQuery } from '../services/postsApi';

const PostList = () => {
     const { data, error, isLoading } = useGetPostQuery();
    console.log(data);
    
    return (
        <>
            <h1>PostList</h1>
        </>
    );
};

export default PostList;