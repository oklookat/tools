<script lang="ts">
    import Button from "../../components/button.svelte";
    import Range from "../../components/range/range.svelte";
    import { randomArrayItem } from "../../utils";

    import process from "./logic";

    // init
    let inputVal = "";
    let finalVal = "";

    // madness control (in percents)
    let madness = 0;
    $: onMadnessChanged(madness);
    function onMadnessChanged(newVal: number) {
        zapletak();
    }

    function zapletak() {
        finalVal = process(inputVal, madness);
    }

    function onEnter(e: KeyboardEvent) {
        if (e.key !== "Enter") {
            return;
        }
        zapletak();
    }

    const examples = [
        "Машина Форд",
        "Миска каши",
        "Сыр косичка",
        "Бутылка рома",
        "Крокодил Гена",
        "Райан Гослинг",
        "Наручные часы",
        "Умный дом",
        "Кофе вечером",
    ];
    let example = randomArrayItem(examples);
    function generateExample() {
        inputVal = example;
        zapletak();
    }
</script>

<svelte:window on:keypress={onEnter} />
<svelte:head>
    <title>Заплетакер</title>
    <meta property="og:title" content="Заплетакер" />
    <meta
        name="description"
        content="Сыр косичка, миска каши?"
    />
</svelte:head>

<div class="zapletaker">
    <div class="welcome">
        <span class="title">Заплетакер</span>
        <div>нажми на кнопку — получишь заплетак</div>
    </div>
    <div class="main">
        <label class="text">
            <span
                >Текст (например <span
                    class="example"
                    on:mousedown={() => generateExample()}>{example}</span
                >)</span
            >
            <input
                type="text"
                aria-labelledby="text__desc"
                bind:value={inputVal}
            />
        </label>
        <div class="madness">
            <span>Безумие</span>
            <div class="range">
                <Range
                    step={10}
                    bind:value={madness}
                    on:sliding={(e) => (madness = e.detail)}
                />
            </div>
        </div>
        <Button on:click={zapletak}>Сделать</Button>
    </div>
    <div class="result">
        {finalVal ? finalVal : "тут будет заплетак"}
    </div>
</div>

<style lang="scss">
    .zapletaker {
        max-width: 440px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 32px;
        .welcome {
            display: flex;
            flex-direction: column;
            gap: 12px;
            .title {
                font-size: 2rem;
            }
        }
        .main {
            display: flex;
            flex-direction: column;
            gap: 24px;
            input {
                font-size: 1rem;
                height: 32px;
            }
            .text {
                .example {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
            .text,
            .madness {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            .madness {
                display: flex;
                align-items: center;
                .range {
                    width: 256px;
                }
            }
        }
        .result {
            border: 1px solid var(--color-level-2);
            font-size: 1.6rem;
            border-radius: 4px;
            padding: 12px;
        }
    }
</style>
