/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import { API } from '$env/static/private'
import { capitalizeFirstLetter } from '$lib/util/helpers.js'


export async function load({ params, fetch }) {
    const tagSlug = capitalizeFirstLetter(params.slug);
    try {

        // Fetch the tag details by slug to get the tag ID
        const tagRes = await fetch(`${API}/tags?slug=${tagSlug}`);
        if (!tagRes.ok) throw new Error('Failed to fetch');
        const tagData = await tagRes.json();
        if (tagData.length === 0) {
            throw error(404, `The tag "${tagSlug}" not Found`);
            return { posts: [], tag: null };
        }

        const tagId = tagData[0].id;

        // Fetch posts for the tag
        const postsRes = await fetch(`${API}/posts?tags=${tagId}`);
        if (!postsRes.ok) throw new Error('Failed to fetch');
        const posts = await postsRes.json();
        const title = tagData[0].name;
        return { title, posts, tag: tagData[0] };
    } catch (e) {
        return { posts: null, title: tagSlug, error: `An error occurred while fetching '${tagSlug}' tag.` };
    }
};



