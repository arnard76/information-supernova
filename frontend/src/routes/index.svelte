<script>
  import { summaries } from "../lib/summaries_store";
  import PacketPreview from "../components/PacketPreview.svelte";
</script>

<ul>
  {#each $summaries as siteSummaries, index (index)}
    {#each siteSummaries as summary, index (index)}
      <li>
        <PacketPreview {summary} colour="gray" />
      </li>
    {/each}
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
