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
        display: flex;
        flex-direction: column;
        .content {
            padding: 14px;
        }
    }
</style>
