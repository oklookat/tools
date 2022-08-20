<script lang="ts">
    import "../assets/global.scss";
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
</script>

<svelte:head>
    <title>Утилиты</title>
    <meta name="author" content="oklookat" />
    <meta name="description" content="Утилиты: классные, прекрасные, полезные." />
    <meta property="og:description" content="Полезные вещи." />
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
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        .content {
            padding: 14px;
        }
    }
</style>
