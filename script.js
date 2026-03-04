const samplesRoot = document.getElementById("samples");

const sections = EXPERIMENT_SECTIONS;

if (
  !Array.isArray(sections) ||
  sections.length === 0
) {
  const empty = document.createElement("p");
  empty.className = "empty";
  empty.textContent = "No experiment sections configured. Update samples.js.";
  samplesRoot.appendChild(empty);
} else {
  sections.forEach((section) => {
    if (
      !section ||
      !Array.isArray(section.sampleIds) ||
      section.sampleIds.length === 0 ||
      !Array.isArray(section.variants) ||
      section.variants.length === 0
    ) {
      return;
    }

    const sectionEl = document.createElement("section");
    sectionEl.className = "experiment-section";
    sectionEl.id = section.id ?? "experiment";

    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = section.title ?? "Experiment";

    sectionEl.appendChild(sectionTitle);

    if (section.description) {
      const sectionDescription = document.createElement("p");
      sectionDescription.className = "section-description";
      sectionDescription.innerHTML = section.description;
      sectionEl.appendChild(sectionDescription);
    }

    const grid = document.createElement("div");
    grid.className = "grid";

    section.sampleIds.forEach((sampleId) => {
      const card = document.createElement("article");
      card.className = "card";

      const title = document.createElement("h3");
      title.textContent = sampleId;

      const variantList = document.createElement("div");
      variantList.className = "variant-list";

      section.variants.forEach((variant) => {
        const row = document.createElement("div");
        row.className = "variant-row";

        const label = document.createElement("p");
        label.className = "variant-label";
        const warningFolders = Array.isArray(section.warningFolders)
          ? section.warningFolders
          : [];
        const isWarningLevel = warningFolders.includes(variant.folder);

        if (isWarningLevel) {
          label.classList.add("warning");
          label.append(`${variant.label} (`);
          const warningText = section.warningText ?? "turn volume down";
          const [before, ...afterParts] = warningText.split("turn volume down");
          label.append(before);
          const strongWarning = document.createElement("strong");
          strongWarning.textContent = "turn volume down";
          label.append(strongWarning);
          label.append(`${afterParts.join("turn volume down")})`);
        } else {
          label.textContent = variant.label;
        }

        const player = document.createElement("audio");
        player.controls = true;
        player.preload = "none";

        const source = document.createElement("source");
        source.src = `${section.basePath}/${variant.folder}/${sampleId}.wav`;

        player.appendChild(source);
        row.append(label, player);
        variantList.appendChild(row);
      });

      card.append(title, variantList);
      grid.appendChild(card);
    });

    sectionEl.appendChild(grid);
    samplesRoot.appendChild(sectionEl);
  });

  if (samplesRoot.children.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No valid experiment sections configured. Update samples.js.";
    samplesRoot.appendChild(empty);
  }
}
