<script lang="ts">
    import "../assets/global.scss";
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
</script>

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
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr max-content;
        .content {
            width: 100vw;
            padding: 14px;
        }
    }
</style>
