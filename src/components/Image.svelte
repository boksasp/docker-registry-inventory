<script>
    import { onMount } from "svelte";
    import Tag from "./Tag.svelte";
    export let name;
    const registryHost = import.meta.env.VITE_REGISTRY_HOST;
    const registryPort = import.meta.env.VITE_REGISTRY_PORT;
    let host = `${registryHost}:${registryPort}`;
    let tags = {};

    onMount(async () => {
        const result = await fetch(`http://${host}/v2/${name}/tags/list`);
        tags = await result.json();
    });
</script>

<div>
    {#if Object.keys(tags).length > 0}
        {#each tags["tags"] as tag}
            <Tag
                tag={tag}
                name={name}
                host={host}
            ></Tag>
        {/each}
    {:else}
        <p>loading...</p>
    {/if}
</div>
