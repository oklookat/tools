<script lang="ts">
    import Button from "../../components/button.svelte";
    import FileDropWrap from "../../components/file_drop_wrap.svelte";
    import { downloadFile, removeExtension } from "../../utils";
    import Overlay from "../../components/overlay.svelte";
    // https://github.com/niklasvh/html2canvas
    import html2canvas from "html2canvas";

    let isImageDropped = false;
    let imgSource = "";
    let dragHint = "нажмите или перетащите для загрузки";
    let currentFile: File;

    /** when file (image) dropped. */
    function onDropped(file: File | File[]) {
        isImageDropped = true;
        if (file instanceof Array) {
            isImageDropped = false;
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (!reader.result) {
                isImageDropped = false;
                return;
            }
            // set base64 as image source.
            imgSource = reader.result.toString();
            currentFile = file;
        };
        reader.onerror = () => {
            dragHint = `ОШИБКА: ${reader.error}`;
            isImageDropped = false;
        };

        // convert file content to base64.
        reader.readAsDataURL(file);
    }

    /** on drag start/end */
    function onDrag(active: boolean) {
        if (!active) {
            dragHint = "нажмите или перетащите для загрузки";
            return;
        }
        dragHint = "отпустите для загрузки";
    }

    let constructorEL: HTMLDivElement;
    async function saveDivScreenshot() {
        if (!currentFile || !imgSource) {
            return;
        }
        const canvas = await html2canvas(constructorEL);
        const data = canvas.toDataURL();
        downloadFile(`DEMGEN_${removeExtension(currentFile.name)}.png`, data);
        canvas.remove();
    }

    let isAboutActive = false;
</script>

<svelte:head>
    <title>Демген</title>
    <meta property="og:title" content="Демген" />
    <meta
        name="description"
        content="Создать демотиватор онлайн? Вам поможет Демген. Он не отправляет фото на сервер, и любит вас."
    />
</svelte:head>

{#if isAboutActive}
    <Overlay onClose={() => (isAboutActive = false)}>
        <div class="about-overlay">
            <div>
                Как-то раз я воспользовался онлайн конструктором демотиваторов.
            </div>
            <div>И знаете что?</div>
            <div>
                Он отправлял фотографии на сервер. Нафига, а главное зачем?
            </div>
            <div>
                Вот я и написал Демгенчика - он работает только у вас в
                браузере. Не благодарите.
            </div>
            <div><b>Сторонние библиотеки:</b></div>
            <a
                href="https://github.com/niklasvh/html2canvas"
                style="text-decoration: underline;">html2canvas</a
            >
        </div>
    </Overlay>
{/if}

<div class="demgen">
    <div class="info">Демген v1.0</div>
    <div
        class="about"
        style="cursor: pointer;"
        on:click={() => (isAboutActive = true)}
    >
        Об утилите
    </div>
    <div class="toolbar">
        <Button on:click={saveDivScreenshot} disabled={!imgSource}
            >Скачать картинку</Button
        >
    </div>
    <div class="workzone">
        <div class="constructor" bind:this={constructorEL}>
            <div class="drop">
                <FileDropWrap
                    accept="image/png,image/jpeg"
                    on:drop={(e) => onDropped(e.detail)}
                    on:drag={(e) => onDrag(e.detail)}
                >
                    <div class="image">
                        {#if isImageDropped}
                            <img
                                class="self"
                                alt="картинка демотиватора"
                                src={imgSource}
                            />
                        {:else}
                            <div class="hint">
                                {dragHint}
                            </div>
                        {/if}
                    </div>
                </FileDropWrap>
            </div>
            <div class="text">
                <div class="title" contenteditable>Заголовок</div>
                <div class="desc" contenteditable>нет блин описание</div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    $max-image: 544px;
    .demgen {
        max-width: $max-image;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        .info {
            font-size: 1.5rem;
        }
        .about {
            text-decoration: underline;
        }
        .toolbar {
            width: 100%;
        }
        .workzone {
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow: auto;
            .drop {
                width: fit-content;
            }
            .constructor {
                width: fit-content;
                word-break: break-word;
                background-color: black;
                padding-left: 48px;
                padding-right: 48px;
                padding-top: 32px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                .text {
                    font-family: "Times New Roman", Times, serif;
                    color: white;
                    height: max-content;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    padding-bottom: 25px;
                    .title,
                    .desc {
                        width: 100%;
                        text-align: center;
                    }
                    .title {
                        font-size: 3.8rem;
                    }
                    .desc {
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }

    .image {
        border: 3px solid white;
        width: fit-content;
        .self,
        .hint {
            max-width: $max-image;
            pointer-events: none;
        }
        .self {
            padding: 4px;
            object-fit: cover;
        }
        .hint {
            background-color: var(--color-level-1);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 412px;
            height: 256px;
            padding-left: 12px;
            padding-right: 12px;
        }
    }

    .about-overlay {
        align-self: center;
        justify-self: center;
        background-color: var(--color-level-1);
        border: 1px solid var(--color-level-2);
        width: 80%;
        max-width: 444px;
        padding: 12px;
        border-radius: 4px;
        height: 40%;
        max-height: 322px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>
