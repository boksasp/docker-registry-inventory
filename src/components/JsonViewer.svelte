<script>
    import { JSONEditor } from "svelte-jsoneditor";
    export let content;
</script>

<div>
    <JSONEditor 
        bind:content 
        navigationBar={false}
        mainMenuBar={false}
        readOnly
    />
</div>