<script>
    import { JSONEditor } from "svelte-jsoneditor";
    import JsonViewer from "./JsonViewer.svelte";
    import ManifestHistoryViewer from "./ManifestHistoryViewer.svelte";
    export let content;
    let counter = 0;
    let histories = [];
    let contentHistory = content.json.history;

    //console.log(content.json.history)
    content.json.history.forEach((element) => {
        const historyJSON = JSON.parse(element.v1Compatibility);
        histories.push(historyJSON);
    });
</script>

<div>
    <ManifestHistoryViewer history={histories} />
    <JsonViewer {content} />
</div>
