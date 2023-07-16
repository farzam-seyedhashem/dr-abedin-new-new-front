/* This example requires Tailwind CSS v2.0+ */
import PostCard from "./PostCard";
import {ImageBaseURL} from "../config";
import Typography from "./assets/Typography";


export default function Example({posts}) {
    return (
        <div className="md:px-6 px-4 mx-auto">
            <Typography type={"h2"} className="px-6 text-on-surface-light dark:text-on-surface-dark">
                NEWS AND
                ARTICLES
            </Typography>
            <Typography type={"h3"} className="px-6 mb-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                Learn More about Cars Buy and Sell
            </Typography>

            <div className="grid gap-2 gird-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                {posts.data.map((post, i) => (
                    <PostCard key={i} related tags={post.tags} title={post.title}
                              imageUrl={post?.thumbnail?.url ? ImageBaseURL + post.thumbnail.url : null}
                              category={post.categories}
                              slug={post.slug}
                              description={post.content}
                              date={post.createdAt}
                              datetime={post.createdAt}/>
                ))}
            </div>

        </div>
    )
}
