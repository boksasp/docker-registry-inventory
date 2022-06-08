<script>
    import { fly } from "svelte/transition";
    export let name;
    export let tag;
    export let host;

    const href = `/image/${name}/${tag}`

    function copyToClipboard(imageName, imageTag) {
        toggleVisible();
        window.navigator.clipboard.writeText(
            `${host}/${imageName}:${imageTag}`
        );
    }
    let visible = false;

    function toggleVisible() {
        visible = !visible;
    }
</script>

<div>
    <a href={href}>{tag}</a>
    <button on:click={() => copyToClipboard(name, tag)}>copy</button>
    {#if visible}
        <span
            id="copy-message"
            transition:fly={{ x: 10, duration: 500 }}
            on:introend={toggleVisible}
        >
            copied
        </span>
    {/if}
</div>

<style>
    button {
        padding: 0
    }

    #copy-message {
        padding: 1px 0 1px 5px;
        position: absolute;
    }
</style>