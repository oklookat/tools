<script lang="ts">
import { goto } from "$app/navigation";


export let name: string
export let desc: string
export let path: string
export let disabled = false

function goRoute() {
    if(disabled) {
        return
    }
    goto("/tools/" + path)
}
</script>

<div class="tool" on:mousedown={goRoute} style="{disabled ? 'background-color: var(--color-level-1);' : ''}">
    <div class="name">
        {name}
    </div>
    <div class="desc">
        {desc}
    </div>
</div>

<style lang="scss">
    .tool {
        cursor: pointer;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid var(--color-level-2);
        display: flex;
        flex-direction: column;
        gap: 14px;
        .name {
            font-size: 1.5rem;
        }
    }
</style>