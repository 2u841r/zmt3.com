import { error } from '@sveltejs/kit';
import { API } from '$env/static/private'
import {hyphenToSpace, capitalizeFirstLetter} from '$lib/util/helpers'
export const load = async ({ params, fetch }) => {
    let blogSlug = params.slug; 
    try {
        const link = `${API}/posts?slug=${blogSlug}`;
        const postRes = await fetch(link);
        if (!postRes.ok) throw new Error('Failed to fetch');
        const singlePost = await postRes.json();

        if (singlePost.length === 0) {
            throw error(404, 'No Blog Found');
            return { singlePost: null, categories: [], tags: [] };
        }

        const post = singlePost[0];

        // Fetch categories
        const categoryIds = post.categories.join(',');
        const categoriesRes = await fetch(`${API}/categories?include=${categoryIds}`);
        if (!categoriesRes.ok) throw new Error('Failed to fetch');
        const categories = await categoriesRes.json();

        // Fetch tags
        const tagIds = post.tags.join(',');
        const tagsRes = await fetch(`${API}/tags?include=${tagIds}`);
        if (!tagsRes.ok) throw new Error('Failed to fetch');
        const tags = await tagsRes.json();

        const title = post.title.rendered
        return { title, post, categories, tags };
    } catch (e) {
        blogSlug = hyphenToSpace(capitalizeFirstLetter(params.slug))
        return { wppost: null, title: blogSlug, error: `An error occurred while fetching this blog - ${blogSlug}` };
    }
};




// import { page } from "$app/stores";
// import { error } from '@sveltejs/kit';
// import { API } from '$env/static/private'

// export const load = async ({ params, fetch }) => {
//     const timeout = new Promise((_, reject) =>
//         setTimeout(() => reject(new Error('Request timed out')), 8000)
//     );

//     try {
//         const postResPromise = await fetch(`${API}/posts?slug=${params.slug}`);
//         const postRes = await Promise.race([postResPromise, timeout]);
//         if (!postRes.ok) throw new Error('Failed to fetch');

//         const singlePost = await postRes.json();

//         if (singlePost.length === 0) {
//             throw error(404, 'No Blog Found');
//             return { singlePost: null, categories: [], tags: [] };
//         }

//         const post = singlePost[0];

//         // Fetch categories
//         const categoryIds = post.categories.join(',');
//         const categoriesResPromise = await fetch(`${API}/categories?include=${categoryIds}`);
//         const categoriesRes = await Promise.race([categoriesResPromise, timeout]);
//         if (!categoriesRes.ok) throw new Error('Failed to fetch');
//         const categories = await categoriesRes.json();

//         // Fetch tags
//         const tagIds = post.tags.join(',');
//         const tagsResPromise = await fetch(`${API}/tags?include=${tagIds}`);
//         const tagsRes = await Promise.race([tagsResPromise, timeout]);
//         if (!tagsRes.ok) throw new Error('Failed to fetch media');

//         const tags = await tagsRes.json();

//         const title = post.title.rendered
//         return { title, post, categories, tags };
//     } catch (e) {
//         return { wppost: null, title: 'All Blogs', error: 'An error occurred while fetching data' };
//     }
// };
