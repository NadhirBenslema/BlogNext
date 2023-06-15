import PostsGrid from '../posts/posts-grid';
import styles from './all-posts.module.css'

function AllPosts(props){
    return(
        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts}/>
        </section>

    );

}
export default AllPosts;