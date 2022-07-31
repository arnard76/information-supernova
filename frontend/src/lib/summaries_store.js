import { writable } from "svelte/store";

export const rawSites = writable([]);

fetch("http://localhost:5000/api/raw-sites")
  .then((response) => {
    response
      .json()
      .then((jsonResponse) => rawSites.set(jsonResponse))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

export const summaries = writable([]);

fetch("http://localhost:5000/api/summaries")
  .then((response) => {
    response
      .json()
      .then((jsonResponse) => summaries.set(jsonResponse))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

export const exampleSummaries = [
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
