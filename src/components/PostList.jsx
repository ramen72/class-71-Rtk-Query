import { useGetPostQuery } from '../services/postsApi';

const PostList = () => {
     const { data, error, isLoading } = useGetPostQuery();
     if(isLoading) return <p>loading</p>
     console.log(data);
    return (
        <>
            {
                data.map((item)=>(
                    <p>{item.title}</p>
                ))
            }
        </>
    );
};

export default PostList;