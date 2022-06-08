<script>
    import Image from "./Image.svelte";
    export let images;
</script>

<div>
    {#if images.length > 0}
        {#each images as image}
        <p><strong>name: {image}</strong></p>
            <Image name={image} />
        {/each}
    {/if}
</div>
