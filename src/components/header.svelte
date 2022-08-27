<script lang="ts">
    import { goto } from "$app/navigation";

    import { onDestroy, onMount } from "svelte";
    import { randomArrayItem } from "../utils";

    let tickerEL: HTMLSpanElement;
    let interval: NodeJS.Timer;

    onMount(() => {
        interval = setInterval(() => {
            tick();
        }, 10);
    });
    onDestroy(() => {
        clearInterval(interval);
    });

    const coolWords = [
        "oklookat / tools",
        "я люблю свою работу",
        "дай человеку сыр и назови его косичка",
        "смешное слово",
        "Uncaught TypeError: Cannot read properties of null (reading 'style')",
        "26 + 16 + 27",
        "бегущий по строке",
        "💕💕💕",
        "чем-то похоже на майнкрафт",
        "dQw4w9WgXcQ",
        "мне нужно направо, буквально на 3 секунды",
        "а ты любишь Objective-C?",
        "text for englishmans",
        "vscode хороший редактор кода",
        "хорошего дня",
    ];

    let left = -150;
    let isCooldown = false;
    function tick() {
        if (isCooldown) {
            return;
        }

        const windowWidth = window.innerWidth;
        let tickerRect = tickerEL.getBoundingClientRect();
        left++;
        isCooldown = tickerRect.left > windowWidth;

        if (isCooldown) {
            tickerEL.innerHTML = randomArrayItem(coolWords);
            tickerRect = tickerEL.getBoundingClientRect();
            left = -Math.abs(tickerRect.width + 4);
            setTimeout(() => {
                tickerEL.style.left = `${left}px`;
                isCooldown = false;
            }, 3000);
            return;
        }

        tickerEL.style.left = `${left}px`;
    }
</script>

<header class="header" on:click={() => goto("/tools")}>
    <span class="ticker" bind:this={tickerEL}>{randomArrayItem(coolWords)}</span
    >
</header>

<style lang="scss">
    .header {
        cursor: pointer;
        overflow: hidden;
        width: 100%;
        height: 42px;
        border-bottom: 2px solid var(--color-level-1);

        .ticker {
            width: max-content;
            height: 100%;
            overflow: hidden;
            position: relative;
            white-space: nowrap;
            display: flex;
            align-items: center;
        }
    }
</style>
