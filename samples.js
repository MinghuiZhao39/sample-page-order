const EXPERIMENT_SECTIONS = [
  {
    id: "quantisation-exp",
    title: "Quantisation Experiment",
    description:
      "It is surprising that quantisation level 2 can still be somewhat intelligible.",
    basePath: "assets/audio/quantisation-exp",
    warningFolders: ["2", "3"],
    warningText: "can be unpleasant, turn volume down",
    variants: [
      { folder: "original_reference_valid", label: "Original audio" },
      { folder: "vocoded_reference_valid", label: "Vocoder reference" },
      { folder: "2", label: "Quantisation 2" },
      { folder: "3", label: "Quantisation 3" },
      { folder: "5", label: "Quantisation 5" },
      { folder: "10", label: "Quantisation 10" },
      { folder: "100", label: "Quantisation 100" },
      { folder: "1000", label: "Quantisation 1000" },
      { folder: "10000", label: "Quantisation 10000" },
    ],
    sampleIds: ["LJ001-0110", "LJ002-0018", "LJ002-0043"],
  },
];
