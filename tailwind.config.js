const production = !process.env.ROLLUP_WATCH;
export const future = {
  purgeLayersByDefault: true,
  removeDeprecatedGapUtilities: true,
};
export const plugins = [];
export const purge = {
  content: ["./frontend/src/App.svelte"],
  // enabled: production, // disable purge in dev
};
