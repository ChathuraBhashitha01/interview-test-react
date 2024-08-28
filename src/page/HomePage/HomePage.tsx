import {Post} from "../../common/Post";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchPostsRequest} from "../../state/post/PostSlice";

export function HomePage() {


    // @ts-ignore
    const posts=useSelector(state => state.posts.posts)
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(fetchPostsRequest())
    }, [dispatch]);

    console.log(posts)

    return (
        <div>
            <div className='h-[100vh] w-[100vw] bg-white relative shadow-xl '>
                <label className='font-bold text-xl  '>POST</label>
                <div className="flex flex-row gap-4 w-[75%] h-72 mt-20 ml-10">
                    {posts.map((post: any) => {
                         <Post key={post.code} title={post.title} body={post.body}/>;
                    })}
                </div>
            </div>
        </div>
    );
}