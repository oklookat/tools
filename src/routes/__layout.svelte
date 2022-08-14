<script lang="ts">
    import "../assets/global.scss"
import Footer from "../components/footer.svelte";
import Header from "../components/header.svelte";
</script>

<div class="bosstainer">
    <Header />
    <main class="content">
        <slot></slot>
    </main>
    <Footer/>
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