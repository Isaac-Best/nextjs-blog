import { Fragment } from "react";
import AllPost from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";
import Head from 'next/head';



function AllPostsPage(props){
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta   
                    name='description'
                    content="A list of all programming-related tutorials and posts!"
                />
            </Head>
            <AllPost posts={props.posts}/>
        </Fragment>
    );
}

export function getStaticProps(){
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        }
    };
}

export default AllPostsPage; 
