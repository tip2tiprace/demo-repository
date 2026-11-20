(() => {
  if (!document.body.classList.contains("updates-popup-page")) return;

  const storageKey = "longway-series-updates-popup-shown";
  const shouldAutoOpen = !window.localStorage.getItem(storageKey);
  const pageTrigger = document.querySelector('[data-tally-open="KpVzl7"]');
  if (!shouldAutoOpen && !pageTrigger) return;

  let trigger = pageTrigger;
  if (!trigger) {
    trigger = document.createElement("button");
    trigger.type = "button";
    trigger.hidden = true;
    trigger.setAttribute("data-tally-open", "KpVzl7");
    trigger.setAttribute("data-tally-emoji-text", "👋");
    trigger.setAttribute("data-tally-emoji-animation", "wave");
    document.body.appendChild(trigger);
  }

  const tallyScript = document.createElement("script");
  tallyScript.src = "https://tally.so/widgets/embed.js";
  tallyScript.async = true;
  tallyScript.addEventListener("load", () => {
    if (!shouldAutoOpen) return;
    trigger.click();
    window.localStorage.setItem(storageKey, "shown");
  }, { once: true });
  tallyScript.addEventListener("error", () => {
    console.error("Could not load the Tally updates popup.");
  }, { once: true });
  document.head.appendChild(tallyScript);
})();
