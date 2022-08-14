<script lang="ts">
    import ToolCard from "../components/tool_card.svelte";
    import { title } from "../utils";
    title.set("Утилиты");
</script>

<div class="container">
    <div class="todo">
        Есть идеи для прикольных штук? Пишите по ссылкам внизу!
    </div>
    <ToolCard
        name="Заплетакер"
        desc="Сыр косичка? Миска каши? Пакет сухариков?"
        path="zapletaker"
    />
    <ToolCard
        name="Конвертер HEIC"
        desc="Хотелось бы сделать, но пока нет"
        path="zapletaker"
        disabled
    />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>
