(() => {
  const pageTrigger = document.querySelector('[data-tally-open="KpVzl7"]');
  if (!pageTrigger) return;

  const tallyScript = document.createElement("script");
  tallyScript.src = "https://tally.so/widgets/embed.js";
  tallyScript.async = true;
  tallyScript.addEventListener("error", () => {
    console.error("Could not load the Tally updates popup.");
  }, { once: true });
  document.head.appendChild(tallyScript);
})();
