<script>
  import PacketPreview from "./components/PacketPreview.svelte";
  let summaries = [
    "Juice WRLD is Arnav Shekaran's favourite artist",
    "Mega housing complex will be 'sweet and sour' for elderly residents",
    "A newfound dinosaur had tiny arms before T. rex made them cool",
    "A supersensitive dark matter search found no signs of the substance — yet",
    "The mathematics of human behavior: How a new model can spot liars and counter disinformation",
    "Ensuring cash supplies in crisis and emergency situations",
    "PlayStation Store removes purchased movies from libraries after service shutdown",
    "The TikTok ‘blackout challenge’ has now allegedly killed seven kids",
    "Ed Yong’s ‘An Immense World’ reveals how animals perceive the world",
    "Snap hires the head of US Secret Service",
    "Screen time for kids is outdated, so let's focus on quality instead",
  ];
</script>

<ul>
  {#each summaries as summary}
    <li>
      <PacketPreview {summary} colour="gray" />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
