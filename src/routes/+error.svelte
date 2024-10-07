<script>
    import { page } from '$app/stores';

</script>

<main>
    <div class="container">
        <section>
            <h1>{$page.status}: {$page.error.message}</h1>
        </section>
    </div>
</main>