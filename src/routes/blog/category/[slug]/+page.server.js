/** @type {import('./$types').PageServerLoad} */
// import { error } from '@sveltejs/kit';
import { API } from '$env/static/private'
import { capitalizeFirstLetter } from '$lib/util/helpers.js'

export async function load({ fetch, params }) {
    const categorySlug = capitalizeFirstLetter(params.slug);
    try {
        // Fetch the category details by slug to get the category ID
        const categoryRes = await fetch(`${API}/categories?slug=${categorySlug}`);
        if (!categoryRes.ok) throw new Error('Failed to fetch');
        const categoryData = await categoryRes.json();
        if (categoryData.length === 0) {
            throw error(404, `The category "${categorySlug}" not Found`);
            return { posts: [], category: null };
        }

        const categoryId = categoryData[0].id;

        // Fetch posts for the category
        const postsRes = await fetch(`${API}/posts?categories=${categoryId}`);
        if (!postsRes.ok) throw new Error('Failed to fetch');
        const posts = await postsRes.json();
        const title = categoryData[0].name;
        return { title, posts, category: categoryData[0] };
    } catch (e) {
        return { posts: null, title: categorySlug, error: `An error occurred while fetching '${categorySlug}' category.` };
    }
};
