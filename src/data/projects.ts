export const projects = [
  {
    icon: "candlestick_chart",
    bgIcon: "trending_up",
    title: "AlgoTrader",
    description:
      "A production-grade automated US equity day-trading system. Screens the market pre-open, scores candidates with a LightGBM ML pipeline and FinBERT sentiment analysis, then executes 14 intraday algorithms through Alpaca's brokerage API, fully autonomous during market hours.",
    challenge:
      "Building a zero-intervention trading system that manages real capital across three float tiers, with robust risk controls, 4x PDT margin utilization, and reliable EOD liquidation, all on a cost-efficient serverless infrastructure.",
    solution:
      "Go trading engine on ECS Fargate with EventBridge scheduling (~81% cost reduction vs always-on), a 14-step risk approval pipeline, SQS FIFO for per-symbol ordering, weekly walk-forward ML retraining with SHAP pruning and KS drift detection, and a real-time Svelte dashboard via WebSocket push.",
    strategy:
      "Go was chosen for the trading engine for its goroutine concurrency model and single-binary deployment, critical for processing 8 parallel symbol streams with sub-millisecond latency. Python handles the ML layer (LightGBM, FinBERT) where ecosystem maturity matters more than speed. ECS Fargate with EventBridge scheduling eliminates idle compute costs, while SQS FIFO guarantees per-symbol message ordering without a self-managed broker. Terraform codifies the entire stack for reproducible deploys.",
    tags: ["Go", "Python", "AWS", "Terraform", "LightGBM", "PostgreSQL"],
    link: "https://github.com/jed-3rd/AlgoTrader",
    linkType: "github",
    gradientDir: "to top right",
    iconRotation: "12deg",
  },
  {
    icon: "fingerprint",
    bgIcon: "security",
    title: "SpectraSeal",
    description:
      "A high-performance forensic watermarking ecosystem that embeds traceable, near-invisible identifiers into images and video streams. Uses transform-domain steganography to survive screenshots, re-compression, and analog-hole attacks.",
    challenge:
      "Traditional watermarks (visible overlays, LSB pixel-flipping) are trivially defeated by cropping, JPEG re-compression, or simply screenshotting the content, creating a new file with entirely different pixel values and potential geometric distortion.",
    solution:
      "Embeds AES-256-GCM encrypted payloads into mid-frequency DCT coefficients across 8x8 blocks, paired with an FFT-based pilot signal for geometric recovery. Video uses A/B adaptive streaming, dual-encoded segments form a per-user binary \"DNA\" sequence via manifest orchestration, eliminating per-user transcoding at scale.",
    strategy:
      "Rust was chosen for its zero-cost abstractions and SIMD intrinsics (AVX2/NEON), critical for processing frequency blocks in parallel at <15ms image latency and real-time 60fps video. FFmpeg bindings handle segment encoding without reinventing codec logic. Reed-Solomon ECC and majority voting across blocks ensure blind extraction survives 50% JPEG quality, 720p→480p downscaling, and 15° rotation. The zero-copy ownership model eliminates unnecessary allocations in the media buffer pipeline.",
    tags: ["Rust", "FFmpeg", "SIMD", "DCT/FFT"],
    link: "https://jed.tonti-denbow.com/spectraseal",
    linkType: "site",
    gradientDir: "to bottom right",
    iconRotation: "-12deg",
  },
  {
    icon: "palette",
    bgIcon: "design_services",
    title: "Chassis UI",
    description:
      "A framework-agnostic design system bridge that solves design system lock-in. Swap an entire visual identity — Material 3, Shopify Polaris, IBM Carbon — by changing a single CSS import, without touching component logic.",
    challenge:
      "Design systems couple visual identity to component logic, locking teams into a single ecosystem. Migrating between systems (e.g., Polaris to Carbon) means rewriting components, not just restyling them, and CSS leaking between Shadow DOM boundaries breaks encapsulation at scale.",
    solution:
      "Headless Web Components built with Lit expose CSS Shadow Parts for safe external styling, wired to a global token schema via CSS Custom Properties. Style Dictionary transforms raw design tokens into system-specific variable files — theme-swapping is a single CSS import with <100ms style recalculation. Framework wrappers for React, Vue, Svelte, and Angular are auto-generated via @lit/react.",
    strategy:
      "Lit was chosen over heavier frameworks for its minimal runtime footprint, Web Components need lifecycle management, not a virtual DOM. PostCSS and CSS Modules handle token processing at build time, keeping runtime cost near zero. Style Dictionary provides the single-source-of-truth pipeline from design tokens to platform code, making new system support (Fluent, Atlassian) a CSS mapping file with no JS changes. Astro powers the docs site and Storybook provides isolated component testing, both leveraging the same Web Components directly.",
    tags: ["Lit", "Web Components", "PostCSS", "Style Dictionary", "Astro", "Storybook"],
    link: "https://jed.tonti-denbow.com/chassisui",
    linkType: "site",
    gradientDir: "to bottom left",
    iconRotation: "45deg",
  },
];
