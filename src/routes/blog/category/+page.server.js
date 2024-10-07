/** @type {import('./$types').PageServerLoad} */
import { API } from '$env/static/private'

export async function load({ fetch }) {
    const title = 'All Categories'
    try {
        const allCategoriesResponse = await fetch(`${API}/categories?per_page=100`)
        if (!allCategoriesResponse.ok) throw new Error('Failed to fetch');
        const allCategoriesData = await allCategoriesResponse.json();
        return { allCategoriesData, title };
    } catch (error) {
        return { posts: null, title, error: 'An error occurred while fetching categories' };
    }
};