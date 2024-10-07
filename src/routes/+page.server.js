/** @type {import('./$types').PageLoad} */
import { API } from '$env/static/private';

export async function load({ fetch, depends }) {
    // Add dependency for potential invalidation
    depends('app:posts');
    
    // Create an object to store our loading states and data
    const data = {
        latestPosts: { loading: true, data: null, error: null },
        highlightedPosts: { loading: true, data: null, error: null }
    };

    try {
        // Fetch both latest posts and highlights concurrently
        const [postsPromise, highlightsPromise] = await Promise.allSettled([
            // Latest Posts
            (async () => {
                const res = await fetch(`${API}/posts?per_page=5&categories_exclude=3`);
                if (!res.ok) throw new Error('Failed to fetch latest posts');
                return await res.json();
            })(),
            
            // Highlighted Posts
            (async () => {
                const categoryRes = await fetch(`${API}/categories?slug=Highlight`);
                if (!categoryRes.ok) throw new Error('Failed to fetch category');
                const categoryData = await categoryRes.json();
                
                if (categoryData.length === 0) return [];
                
                const categoryId = categoryData[0].id;
                const postsRes = await fetch(`${API}/posts?categories=${categoryId}`);
                if (!postsRes.ok) throw new Error('Failed to fetch highlighted posts');
                const posts = await postsRes.json();
                
                // Fetch featured images
                const postsWithImages = await Promise.all(
                    posts.map(async (post) => {
                        let featuredImage = null;
                        if (post.featured_media) {
                            const mediaRes = await fetch(`${API}/media/${post.featured_media}`);
                            if (mediaRes.ok) {
                                const mediaData = await mediaRes.json();
                                featuredImage = mediaData.source_url;
                            }
                        }
                        return { ...post, featuredImage };
                    })
                );
                
                return postsWithImages;
            })()
        ]);

        // Handle latest posts result
        if (postsPromise.status === 'fulfilled') {
            data.latestPosts = {
                loading: false,
                data: postsPromise.value,
                error: null
            };
        } else {
            data.latestPosts = {
                loading: false,
                data: null,
                error: postsPromise.reason.message
            };
        }

        // Handle highlighted posts result
        if (highlightsPromise.status === 'fulfilled') {
            data.highlightedPosts = {
                loading: false,
                data: highlightsPromise.value,
                error: null
            };
        } else {
            data.highlightedPosts = {
                loading: false,
                data: null,
                error: highlightsPromise.reason.message
            };
        }

        return data;

    } catch (error) {
        console.error('Load function error:', error);
        return {
            latestPosts: { loading: false, data: null, error: 'Failed to load posts' },
            highlightedPosts: { loading: false, data: null, error: 'Failed to load highlights' }
        };
    }
}