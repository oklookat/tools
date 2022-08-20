<script lang="ts">
    import ToolCard from "../components/tool_card.svelte";
</script>

<div class="container">
    <div class="todo">
        Есть идеи для прикольных штук? Пишите по ссылкам внизу!
    </div>

    <div class="working">
        <ToolCard
            name="Заплетакер"
            desc="Сыр косичка? Миска каши? Пакет сухариков?"
            path="zapletaker"
        />
        <ToolCard
            name="Демген"
            desc="Поможет создать демотиватор."
            path="demgen"
        />
    </div>

    <div class="future">
        <span class="title">Когда-нибудь</span>
        <ToolCard
            disabled
            name="Конвертер HEIF"
            desc="Хотел бы сделать, но нет декодера."
            path=""
        />
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        .working, .future {
            .title {
                font-size: 1.8rem;
                font-weight: bold;
            }
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
    }
</style>
