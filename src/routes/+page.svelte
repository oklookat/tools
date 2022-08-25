<script lang="ts">
    import ToolCard from "../components/tool_card.svelte";
</script>

<svelte:head>
    <title>Утилиты</title>
    <meta property="og:title" content="Утилиты" />
    <meta name="description" content="Полезные утилиты вам в помощь." />
</svelte:head>

<div class="container">
    <div class="todo">
        Есть идеи для прикольных штук? Пишите по ссылкам внизу!
    </div>

    <ToolCard
        name="Заплетакер"
        desc="Сыр косичка? Миска каши? Пакет сухариков?"
        path="zapletaker"
    />
    <ToolCard name="Демген" desc="Поможет создать демотиватор." path="demgen" />
</div>

<style lang="scss">
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 42px 1fr;
        gap: 12px;
    }
</style>
