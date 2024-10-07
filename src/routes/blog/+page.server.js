// import { API } from '$env/static/private';
// export async function load({ fetch }) {
//     const timeout = new Promise((_, reject) => 
//         setTimeout(() => reject(new Error('Request timed out')), 8000)
//     );

//     try {
//         const wpresPromise = fetch(`${API}/posts`);
//         const wpres = await Promise.race([wpresPromise, timeout]);

//         if (!wpres.ok) throw new Error('Failed to fetch media');

//         const wppost = await wpres.json();
//         const title = 'All Blogs';
//         return { wppost, title };
//     } catch (e) {
//         return { wppost: null, title: 'All Blogs', error: 'An error occurred while fetching data' };
//     }`
// }
import { API } from '$env/static/private';

export async function load({ fetch }) {
    try {
        const wpres = await fetch(`${API}/posts?per_page=100`);
        if (!wpres.ok) throw new Error('Failed to fetch');
        const wppost = await wpres.json();
        const title = 'All Blogs';
        return { wppost, title };
    } catch (e) {
        return { wppost: null, title: 'All Blogs', error: 'An error occurred while fetching all blogs' };
    }
}
