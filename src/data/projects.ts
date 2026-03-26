export const projects = [
  {
    icon: "candlestick_chart",
    bgIcon: "trending_up",
    title: "AlgoTrader",
    description:
      "A fully autonomous algorithmic trading platform designed to execute complex equity strategies without human intervention. The system identifies high-potential stocks daily, analyzes market sentiment, and manages live capital with professional-grade risk controls to ensure consistent performance during market hours.",
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
      "An advanced digital security ecosystem that protects media assets using invisible forensic watermarking. By embedding traceable data directly into the fabric of images and video, it allows companies to identify the source of unauthorized leaks even if the content has been screenshotted, compressed, or re-recorded.",
    challenge:
      "Traditional watermarks (visible overlays, LSB pixel-flipping) are trivially defeated by cropping, JPEG re-compression, or simply screenshotting the content, creating a new file with entirely different pixel values and potential geometric distortion.",
    solution:
      "Embeds AES-256-GCM encrypted payloads into mid-frequency DCT coefficients across 8x8 blocks, paired with an FFT-based pilot signal for geometric recovery. Video uses A/B adaptive streaming, dual-encoded segments form a per-user binary \"DNA\" sequence via manifest orchestration, eliminating per-user transcoding at scale.",
    strategy:
      "Rust was chosen for its zero-cost abstractions and SIMD intrinsics (AVX2/NEON), critical for processing frequency blocks in parallel at <15ms image latency and real-time 60fps video. FFmpeg bindings handle segment encoding without reinventing codec logic. Reed-Solomon ECC and majority voting across blocks ensure blind extraction survives 50% JPEG quality, 720p→480p downscaling, and 15° rotation. The zero-copy ownership model eliminates unnecessary allocations in the media buffer pipeline.",
    tags: ["Rust", "FFmpeg", "SIMD", "DCT/FFT"],
    link: "https://jed-3rd.github.io/SpectraSeal-Demo/",
    linkType: "site",
    gradientDir: "to bottom right",
    iconRotation: "-12deg",
  },
  {
    icon: "palette",
    bgIcon: "design_services",
    title: "Chassis UI",
    description:
      "A versatile, framework-agnostic UI library that eliminates 'vendor lock-in' for design systems. It allows engineering teams to share a single library of 32+ components across different web frameworks—like React, Svelte, and Angular—while instantly switching between 12 distinct visual identities (such as Shopify Polaris or Material Design) via simple CSS tokens.",
    challenge:
      "Design systems usually couple visual identity to specific framework code, forcing teams to rewrite their entire component library if they want to change their look or switch from React to Svelte. Additionally, preventing CSS leakage in complex enterprise apps is difficult without breaking customization capabilities.",
    solution:
      "Built a 'Design System Bridge' using Lit-based Web Components that leverage Shadow DOM for perfect encapsulation. The system features a library of 32 components across 6 categories, 12 pre-built themes, and a double-fallback token pattern. It includes auto-generated framework wrappers for React, Angular, Svelte, and Astro, ensuring a 'write once, use everywhere' workflow.",
    strategy:
      "Lit was chosen for its minimal runtime footprint and native Web Component support, avoiding the overhead of a virtual DOM. Style Dictionary serves as the single source of truth, transforming JSON design tokens into CSS Custom Properties for sub-100ms theme switching. The architecture uses a monorepo with Turborepo and npm workspaces to orchestrate a complex build pipeline: processing tokens and themes first, then building the core components, and finally generating type-safe framework wrappers.",
    tags: ["Lit", "Web Components", "Style Dictionary", "Astro", "Turborepo", "TypeScript"],
    link: "https://jed-3rd.github.io/ChassisUI/",
    linkType: "site",
    gradientDir: "to bottom left",
    iconRotation: "45deg",
  },
];
