<script lang="ts">
    import "../assets/global.scss";
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
    import { title } from "../utils";
</script>

<svelte:head>
    <title>{$title}</title>
    <meta name="author" content="oklookat" />
    <meta name="description" content="Полезные вещи." />
    <meta
        property="og:description"
        content="Полезные вещи."
    />
    <meta property="og:image" content="/static/ogimage.png" />
    <meta property="og:title" content="oklookat / tools" />
</svelte:head>

<div class="bosstainer">
    <Header />
    <main class="content">
        <slot />
    </main>
    <Footer />
</div>

<style lang="scss">
    .bosstainer {
        width: 100%;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr max-content;
        .content {
            margin: 12px;
        }
    }
</style>
