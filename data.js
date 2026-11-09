// Site content. Edit this file to add news, projects, publications or talks.
// Text in **double asterisks** is rendered bold.

window.SITE = {
  name: "Changmin Lee",
  role: "M.S. student in Space Systems, Korea Aerospace University",
  summary:
    "I work on systems engineering for small-satellite missions, from mission derivation and requirements " +
    "to budgets, trade studies and preliminary design, and on onboard AI that decides what a satellite " +
    "processes and sends down. My work reaches from a 12U CubeSat preliminary design to onboard AI payload software for a CubeSat mission of TU Berlin and Rapid Cubes.",
  affiliation:
    "Distributed Space Systems Lab (OctoLab), advised by Prof. Zizung Yoon. " +
    "Thesis work in collaboration with the University of Stuttgart (Prof. Ingmar Kallfass, ILH).",
  links: [
    { label: "Email", href: "mailto:changmin3702@gmail.com", icon: "mail" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=tE0zNfIAAAAJ", icon: "scholar" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/changmin-lee-838900338/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/changmaneeee", icon: "github" }
  ],

  news: [
    { date: "Oct 2026", text: "Presented onboard ship detection on embedded hardware at **IAC 2026**, Antalya (oral)." },
    { date: "Oct 2026", text: "Took part in the **Space Generation Congress 2026** as one of eight KARI national student delegates to IAC 2026." },
    { date: "2026", text: "Onboard AI cloud detection paper published in **IEEE Geoscience and Remote Sensing Letters**." },
    { date: "Sep 2025", text: "Our team's satellite design ranked first at the **ATLAS Satellite Design Workshop**, Stuttgart." }
  ],

  // Research themes. "image" is optional.
  research: [
    {
      title: "Mission systems engineering",
      text:
        "Turning a mission idea into requirements, budgets and a preliminary design, as team lead and systems engineer " +
        "of a 12U CubeSat design, as communications lead of an international design team, and in planetary mission studies.",
      image: "assets/img/stream1-assembly.webp",
      alt: "Render of the STREAM-1 12U CubeSat with deployed solar panels and antennas"
    },
    {
      title: "Onboard AI for small satellites",
      text:
        "Filtering data in orbit instead of downlinking everything. I write payload software for NVIDIA Jetson and " +
        "benchmark models for accuracy against latency, power and energy per image.",
      image: "assets/img/cloud-concept.webp",
      alt: "Diagram comparing store-and-forward downlink with onboard AI filtering of cloudy images"
    },
    {
      title: "Super-resolution and ship detection on embedded hardware",
      text:
        "Does super-resolution earn its energy cost onboard? I compared six super-resolution + YOLO pipelines on a Jetson Orin Nano " +
        "(19,882 test images): full-frame super-resolution added 1.1 pp mAP50 at about 2.2× the energy per frame. Presented at IAC 2026.",
      image: "assets/img/sr-scenes.webp",
      alt: "The same ship scene at native low resolution, bilinear upsampling, RFDN super-resolution and original high resolution"
    },
    {
      title: "E/W-band downlink for VLEO satellites",
      text:
        "Earth-observation satellites at about 350 km collect large data volumes but see a ground station only briefly. " +
        "My master's thesis, with the University of Stuttgart (ILH), asks which band (X, Ka or 71–76 GHz) each mission's daily volume calls for, " +
        "across SAR, optical, hyperspectral and video missions. Work in progress.",
      image: "assets/img/ew-method.webp",
      alt: "Flow of the simulation: inputs, propagation and link calculation, aggregation over visible instants, conditional results"
    }
  ],

  // Featured projects: shown large, with images and key figures.
  featured: [
    {
      id: "stream1",
      title: "STREAM-1 12U CubeSat",
      context: "KARI CubeSat Competition",
      period: "Jun – Oct 2026 (completed)",
      role: "Team lead, systems engineer and communications",
      points: [
        "Derived a maritime-surveillance mission and owned system requirements, budgets and schedule.",
        "Set the baseline mission window where observation, onboard processing and real-time downlink overlap.",
        "Passed round one and carried out the KARI-commissioned preliminary design study (PDR level); not selected in the final round."
      ],
      figures: [],
      images: [
        { src: "assets/img/stream1-assembly.webp", alt: "STREAM-1 CubeSat render with deployed solar panels", caption: "STREAM-1 configuration" },
        { src: "assets/img/stream1-view.webp", alt: "STREAM-1 CubeSat render, side view", caption: "Side view" },
        { src: "assets/img/stream1-deployed.webp", alt: "STREAM-1 CubeSat render with antennas deployed", caption: "Deployed antennas" }
      ]
    },
    {
      id: "onboard-ai",
      title: "Onboard AI payload software",
      context: "AIOTY-CUBE (TU Berlin–Rapid Cubes mission) and cloud-detection research",
      period: "Jan 2026 – present",
      role: "Payload software developer",
      points: [
        "Developing the onboard AI payload software for AIOTY-CUBE, a CubeSat mission of TU Berlin and Rapid Cubes planned for launch.",
        "Benchmarked onboard cloud detection on NVIDIA Jetson hardware for latency, power and energy per image, published in IEEE GRSL (equal contribution)."
      ],
      figures: [
        { value: "1,781 → 601 J", label: "energy per image, store-and-forward vs onboard AI (IEEE GRSL)" }
      ],
      images: [
        { src: "assets/img/cloud-hw-setup.webp", alt: "Laboratory setup with a Jetson AI board, Ethernet switch and industrial camera", caption: "Hardware test setup for onboard cloud detection" },
        { src: "assets/img/cloud-architecture.webp", alt: "Block diagram of the CubeSat payload: camera, AI edge computer, OBC and S-band transmitter", caption: "Payload architecture" },
        { src: "assets/img/cloud-energy.webp", alt: "Bar chart of energy and time per image for traditional downlink versus onboard AI", caption: "Energy and time per image" }
      ]
    },
    {
      id: "ship-detection",
      title: "Super-resolution and ship detection onboard",
      context: "Independent research, IAC 2026 (IAC-26-E2.2.9)",
      period: "2026",
      role: "First author",
      points: [
        "Compared six pipelines from the same 192 × 192 low-resolution observations: three input grids without super-resolution, and full-frame, gated and region-of-interest super-resolution.",
        "Measured detection on 19,882 test images and latency, power and energy on a Jetson Orin Nano over a fixed 1,000-frame workload.",
        "Full-frame super-resolution added 1.12 pp mAP50 at about 2.2× the latency and energy per frame; the no-SR baseline should be established before adding super-resolution."
      ],
      figures: [
        { value: "0.851", label: "mAP50 of the 768-grid baseline without super-resolution" },
        { value: "≈2.2×", label: "energy per frame for full-frame super-resolution" }
      ],
      images: [
        { src: "assets/img/sr-tradeoff.webp", alt: "Change in mAP50 and recall versus relative energy per frame for six pipelines", caption: "Accuracy change versus energy per frame, relative to the 768-grid baseline" },
        { src: "assets/img/sr-cost.webp", alt: "Bar charts of latency, energy per frame and power for six pipelines in two power modes", caption: "Measured latency, energy and power on Jetson Orin Nano" },
        { src: "assets/img/sr-scenes.webp", alt: "The same ship scene at native low resolution, bilinear upsampling, RFDN super-resolution and original high resolution", caption: "One scene under the image representations compared" }
      ]
    },
    {
      id: "ew-band",
      title: "E/W-band downlink for VLEO satellites",
      context: "M.S. thesis, with the University of Stuttgart (ILH)",
      period: "Dec 2025 – present (in progress)",
      role: "Lead researcher",
      points: [
        "Compares 71–76 GHz with X and Ka band for a 350 km satellite under the same conditions, without fixing the transmitter or antenna first.",
        "Back-calculates the minimum satellite EIRP that meets a mission's daily data volume, from one year of 1 s visible instants, DVB-S2 MODCODs and ITU-R propagation models.",
        "Maps the result onto SAR, optical, hyperspectral and video missions to show which band each data volume calls for. E/W-band values lie outside the rain model's validated range and are reported as reference values."
      ],
      figures: [],
      images: [
        { src: "assets/img/ew-mission-map.webp", alt: "Minimum satellite EIRP versus daily mission data volume for X, Ka and E/W band, with mission classes marked", caption: "Minimum satellite EIRP versus daily data volume (draft result)" },
        { src: "assets/img/ew-method.webp", alt: "Flow of the simulation: inputs, propagation and link calculation, aggregation over visible instants, conditional results", caption: "Simulation flow" }
      ]
    },
    {
      id: "atlas",
      title: "ATLAS Satellite Design Workshop",
      context: "University of Stuttgart, Team DRAG ON",
      period: "Sep 2025",
      role: "Communication systems lead, 19-member international team",
      points: [
        "Designed S-band TT&C and an X-band downlink with flush patch antennas for a VLEO satellite.",
        "Team design reached PDR level and ranked first in the workshop design competition."
      ],
      figures: [
        { value: "7.5 dB", label: "worst-case S-band uplink margin" },
        { value: "10.9 dB", label: "worst-case X-band downlink margin" }
      ],
      images: [
        { src: "assets/img/atlas-presentation.webp", alt: "Team presentation in a lecture hall at the University of Stuttgart", caption: "Final team presentation" },
        { src: "assets/img/atlas-render.webp", alt: "Render of the team's VLEO satellite design", caption: "Satellite render, Team DRAG ON (ATLAS SDW 2025)" },
        { src: "assets/img/atlas-conops.webp", alt: "Concept of operations from launch to decommissioning", caption: "Concept of operations" }
      ]
    }
  ],

  // Other projects: shown as a compact list.
  projects: [
    {
      title: "VLEO mission analysis study",
      context: "StepLab",
      period: "Jun – Oct 2026",
      text: "Single-satellite and constellation orbit analysis end to end, from requirement interpretation to MATLAB code and report: inclination, revisit, ground-station access and Walker-Delta sizing."
    },
    {
      title: "Venus exploration mission study",
      context: "IBS, commissioned by KASA",
      period: "Jan – Aug 2026",
      text: "Led the inter-satellite link and DSN direct-to-Earth trade studies (S/X-band options, pointing, UHF backup link) and contributed to the mission feasibility analysis."
    },
    {
      title: "CLOVE Venus-observation CubeSat",
      context: "IBS Planetary Atmospheres Group, student intern",
      period: "Feb 2024 – Aug 2026",
      text: "Analysed S/X-band data links (ground-station visibility, link margin, data volume) and supported FlatSat integration."
    },
    {
      title: "PULSE PocketQube, alternative payload",
      context: "TU Berlin Space System Design Project",
      period: "Winter 2025/26",
      text: "Proposed an onboard AI payload: a lightweight CNN classifying Timepix radiation data on an embedded board. 90.4% classification accuracy, with an estimated ~65% downlink reduction."
    },
    {
      title: "DAEJEON-SAT flight software review",
      context: "StepLab",
      period: "Dec 2024 – Jun 2025",
      text: "Reviewed the existing OBC flight software (communication stack, telemetry, command handling) for reuse and reported the assessment."
    }
  ],

  publications: [
    {
      group: "Journal articles",
      items: [
        { text: "**C. Lee**, et al., “IoT-NTN with VLEO and LEO Satellite Constellations and LPWAN: A Comparative Study of LoRa, NB-IoT, and Mioty,” *Electronics*, 14(9), 1798, 2025.", link: "https://doi.org/10.3390/electronics14091798", linkLabel: "DOI" },
        { text: "M. Kim†, **C. Lee**†, et al., “Real-Time Onboard AI for Remote Sensing: Cloud Detection,” *IEEE Geoscience and Remote Sensing Letters*, vol. 23, 6017205, 2026. († equal contribution)" }
      ]
    },
    {
      group: "International conferences",
      items: [
        { text: "**C. Lee**, Z. Yoon, “Onboard Super-Resolution-Enhanced Ship Detection for Small Satellites: Accuracy–Efficiency Trade-offs on Embedded Hardware,” *International Astronautical Congress (IAC 2026)*, Antalya, IAC-26-E2.2.9." },
        { text: "**C. Lee**, et al., “Optimizing LPWAN-based Satellite Constellations: A Comparative Study of VLEO and LEO Orbits,” *2nd VLEO Symposium*, Stuttgart, 2025." },
        { text: "**C. Lee**, et al., “Optimizing VLEO Constellations for IoT-NTN Using Genetic Algorithms,” *ICTC 2024*." }
      ]
    },
    {
      group: "Domestic conferences (in Korean)",
      items: [
        { text: "**C. Lee**, et al., “Data transmission and power efficiency of E/W-band communication for VLEO SAR satellites,” *KSAS Space Conference*, 2026." },
        { text: "**C. Lee**, et al., “Applicability of E/W-band communication for VLEO SAR satellites,” *KSAS Spring Conference*, 2026." },
        { text: "**C. Lee**, C. Jung, Y. Lee, Z. Yoon, “S- and X-band data link analysis for the CLOVE Venus observation mission,” *KICS Summer Conference*, 2024." }
      ]
    }
  ],

  talks: [
    { date: "Oct 2026", event: "International Astronautical Congress (IAC 2026)", place: "Antalya, Türkiye", detail: "Oral presentation, onboard ship detection; KARI national student delegate" },
    { date: "Oct 2026", event: "Space Generation Congress 2026", place: "Antalya, Türkiye", detail: "Working group on rising space nations and the global lunar agenda; guidelines presented on the final day" },
    { date: "Sep 2025", event: "ATLAS Satellite Design Workshop", place: "Stuttgart, Germany", detail: "Communication systems lead; first-ranked team design" },
    { date: "Jan 2025", event: "2nd VLEO Symposium", place: "Stuttgart, Germany", detail: "Oral presentation, LPWAN-based VLEO/LEO constellations" },
    { date: "Oct 2024", event: "ICTC 2024", place: "Korea", detail: "Oral presentation, genetic-algorithm VLEO constellation design" }
  ],

  education: [
    { school: "Korea Aerospace University", degree: "M.S., Artificial Intelligence (AI System Design), major in Space Systems Convergence", period: "Mar 2025 – Feb 2027 (expected)" },
    { school: "Technische Universität Berlin", degree: "Space System Design Project (9 ECTS)", period: "Winter 2025/26" },
    { school: "Korea Aerospace University", degree: "B.S., Electronics and Information Engineering", period: "Mar 2021 – Feb 2025" }
  ],

  skills: [
    { area: "Systems engineering", items: "Mission derivation, ConOps, requirements and verification planning, budgets, trade studies, PDR documentation" },
    { area: "Analysis", items: "MATLAB, FreeFlyer, GMAT; link budgets (UHF/S/X/Ka/E/W); orbit and constellation analysis" },
    { area: "Software", items: "Python, C/C++, Linux on NVIDIA Jetson, TensorRT, Git, LaTeX" }
  ],

  updated: "November 2026"
};
