<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { calcDotLeft, computePercents, roundX } from "./utils";

    let container: HTMLDivElement;
    const dispatch = createEventDispatcher<{
        /** sliding start */
        start: void;
        /** on slider moves */
        sliding: number;
        /** sliding end */
        end: void;
    }>();

    export let step = 1;
    export let value = 100;
    let displayedValue = value;

    // click
    function beginSliding(e: PointerEvent) {
        // disallow dragging slider with any mouse buttons except LMB
        if (e.pointerType === "mouse" && e.button !== 0) {
            return;
        }
        dispatch("start");

        // start slide because user already clicked
        slide(e);

        container.setPointerCapture(e.pointerId);
        container.onpointermove = slide;
    }

    // unclick
    function stopSliding(e: PointerEvent) {
        container.onpointermove = null;
        container.releasePointerCapture(e.pointerId);
        dispatch("end");
    }

    // sliding now
    function slide(e: PointerEvent) {
        const containerWidth = container.clientWidth;
        const rect = container.getBoundingClientRect();
        let currentPosition = e.x - rect.x;
        if (currentPosition < 0) {
            currentPosition = 0;
        } else if (currentPosition > containerWidth) {
            currentPosition = containerWidth;
        }

        let currentPercents = computePercents(currentPosition, containerWidth);
        currentPercents = roundX(currentPercents, step);
        if (currentPercents > 99) {
            currentPercents = 100;
        } else if (currentPercents < 1) {
            currentPercents = 0;
        }

        displayedValue = currentPercents;
        dispatch("sliding", displayedValue);
    }
</script>

<div
    class="range"
    bind:this={container}
    on:pointerdown={beginSliding}
    on:pointerup={stopSliding}
    on:pointercancel={stopSliding}
    on:contextmenu|preventDefault
>
    <div class="line" style="width: {displayedValue}%" />
    <div class="dot" style="left: {calcDotLeft(displayedValue)}%" />
</div>

<style lang="scss">
    $height: 18px;
    .range {
        touch-action: pan-y;
        user-select: none;

        background-color: var(--color-level-1);
        border: 1px solid var(--color-level-2);
        border-radius: 4px;

        height: calc($height / 1.2);
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;

        .line,
        .dot {
            touch-action: none;
            pointer-events: none;
        }

        .line {
            border-radius: 2px;
            height: 100%;
            background-color: var(--color-level-2);
        }

        .dot {
            background-color: var(--color-text);
            position: absolute;
            width: calc($height * 1.2);
            height: calc($height * 1.2);
            border-radius: 50%;
        }
    }
</style>
