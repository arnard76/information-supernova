<script>
  import io from "socket.io-client";

  import { summaries } from "../lib/summaries_store";
  import PacketPreview from "../lib/PacketPreview.svelte";

  const socket = io("http://localhost:5000");

  socket.on("message", (message) => {
    console.log("message from server: ", message);
  });

  socket.emit("message", "hello there :DDDD");
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
