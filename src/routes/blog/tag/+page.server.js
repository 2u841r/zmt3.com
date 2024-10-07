/** @type {import('./$types').PageServerLoad} */
import { API } from '$env/static/private'

export async function load({ fetch }) {
    const title = 'All Tags'
    try {
        const allTagsResponse = await fetch(`${API}/tags?per_page=100`)
        if (!allTagsResponse.ok) throw new Error('Failed to fetch');
        const allTagsData = await allTagsResponse.json();
        return { allTagsData, title };
    } catch (error) {
        return { posts: null, title, error: 'An error occurred while fetching tags' };

    }
};