---
name: Cyber Necrosis HUD
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#191c21'
  surface-container: '#1d2025'
  surface-container-high: '#282a30'
  surface-container-highest: '#33353b'
  on-surface: '#e2e2ea'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2ea'
  inverse-on-surface: '#2e3036'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffb1c4'
  on-secondary: '#65002e'
  secondary-container: '#ff4a8d'
  on-secondary-container: '#590028'
  tertiary: '#fff3f2'
  on-tertiary: '#680014'
  tertiary-container: '#ffcdcc'
  on-tertiary-container: '#bf002e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd9e1'
  secondary-fixed-dim: '#ffb1c4'
  on-secondary-fixed: '#3f001a'
  on-secondary-fixed-variant: '#8f0044'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b3'
  on-tertiary-fixed: '#400009'
  on-tertiary-fixed-variant: '#920021'
  background: '#111319'
  on-background: '#e2e2ea'
  surface-variant: '#33353b'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an aggressive, adrenaline-fueled aesthetic engineered for high-octane horror shooter streaming, round-based zombie marathons, and survival horror content. It fuses brutalist survivalist interfaces with high-tech esports broadcasting overlays. 

The visual identity embodies the feeling of an infected biometric terminal running on an overclocked cybernetic rig: razor-sharp angles, high-voltage feedback, and visceral apocalyptic tension. The experience must feel instantaneous, lethal, and visually electrifying—balancing the gritty tension of survival horror with the ultra-responsive, competitive precision of elite first-person shooter competition.

## Colors

The palette is anchored in an abyss of pitch-black and deep carbon slates, pierced by hyper-saturated radioactive neon accents:

- **Surface Tiers**:
  - `canvas-abyss`: `#07090e` (Base background level)
  - `surface-base`: `#0c0f17` (Cards, panels, HUD modules)
  - `surface-raised`: `#131826` (Active containers, popovers, elevated chips)
  - `surface-elevated`: `#1a2033` (Hover overlays and interactable states)

- **Neon Accents**:
  - **Electric Cyan (`#00f0ff`)**: Primary energy source. Used for live indicators, call-to-actions, vital shield metrics, and active tracking borders.
  - **Neon Fucsia (`#ff007f`)**: Secondary kinetic accent. Deployed for VIP badges, subscriber highlights, secondary interactive drivers, and neon gradient transitions.
  - **Visceral Blood Red (`#ff1744` / `#e60039`)**: Threat/Hazard accent. Reserved for kill streaks, zombie wave counters, alerts, high-priority notifications, and critical health states.

- **Text & Feedback Hierarchy**:
  - `text-primary`: `#f3f6fc` (High-contrast crystalline white)
  - `text-secondary`: `#8d9bb0` (Muted tactical slate)
  - `text-dim`: `#4e586e` (Sub-metadata, disabled stamps)
  - `border-ghost`: `rgba(0, 240, 255, 0.15)`
  - `border-active`: `linear-gradient(135deg, #00f0ff 0%, #ff007f 100%)`

## Typography

The typographic system utilizes `Space Grotesk` for headlines and narrative reading to achieve an aggressive, tech-forward, and angular presentation without sacrificing readability during mobile scanning. All display headlines leverage an uppercase casing style with tight letter spacing to simulate cinema posters and esports broadcast graphics.

`JetBrains Mono` serves as the tactical metadata, counter, and label font. It provides an immediate military HUD and diagnostic console feel, optimal for wave timers, stats, and tactical UI telemetry.

## Layout & Spacing

The layout is built upon an adaptive 12-column grid for desktop environments, downscaling to a 4-column compact flow on mobile screens (especially targeted at TikTok/Instagram in-app browser viewports). 

Content containers prioritize vertical density and scan speed:
- **Desktop (>= 1024px)**: 12-column layout with 20px gutters and max container width of 1280px. Dual-column layouts showcase live video feeds adjacent to interactive telemetry panels.
- **Mobile (< 768px)**: Edge-to-edge modular feed with locked margins (16px), optimized for one-thumb micro-interactions, full-width stream alert banners, and instant link-out touch targets.

## Elevation & Depth

Visual hierarchy does not rely on traditional muddy drop shadows; instead, it utilizes luminescence, surface tonal stratification, and high-frequency edge glows:

- **Level 0 (Floor)**: `#07090e` flat canvas with optional carbon scanline overlay at 3% opacity.
- **Level 1 (Card Deck)**: Surface `#0c0f17` elevated via crisp 1px borders of `rgba(0, 240, 255, 0.12)`.
- **Level 2 (Hover/Focus)**: Surface `#131826` with dynamic neon cyan glow: `0px 0px 20px rgba(0, 240, 255, 0.35)`.
- **Level 3 (Tactical Threat/Apex)**: Border glowing with dual gradient `#00f0ff` to `#ff007f` along with an outer drop bloom: `0px 0px 24px rgba(255, 0, 127, 0.4)`.

## Shapes

The interface embraces a strictly sharp geometric profile (`roundedness: 0`). Elements reject friendly, rounded curves in favor of industrial, ballistic geometry. 

Corners utilize 45-degree chamfers (`clip-path: polygon(...)`) on high-profile containers, tactical buttons, and live stream tags to invoke ballistic plate carriers, weapon HUD reticles, and survival tech consoles.

## Components

### Buttons
- **Primary Cyber Action**: Sharp rectangular or chamfered corners. Background of pure electric cyan (`#00f0ff`) with pitch-black (`#07090e`) uppercase bold text. Hover triggers a dual magenta glow (`0 0 16px #ff007f`) with an animated rightward slice sheen.
- **Tactical Secondary**: Background of `#0c0f17`, framed with a 1px border gradient transitioning from cyan to fuchsia. Label set in `JetBrains Mono` with text color `#00f0ff`.
- **Biohazard/Critical Alert**: Background of `#ff1744` with white text, accompanied by an intermittent pulse animation for "LIVE NOW" or "SUB DROP" events.

### Cards & Stream HUD Modules
- Containers use `#0c0f17` backing with 1px border `rgba(0, 240, 255, 0.15)`.
- Top-right corner features a simulated digital diagnostic stamp (e.g., `SYS.LOC // 115_ONLINE`).
- Top edge incorporates an accent line displaying a gradient from `#00f0ff` to `#ff007f`.

### Form Controls & Inputs
- **Input Fields**: Inset dark fill (`#07090e`), framed by 1px muted slate borders (`#1a2033`). On active focus, the border shifts to `#00f0ff` alongside an inner cyan ambient glow.
- **Checkboxes & Radios**: Angular square selectors with neon cyan check marks; toggle states trigger an immediate high-contrast neon fill.

### Live Indicator Chips
- Chamfered badge utilizing `#ff1744` at 15% opacity with an intense red border (`#ff1744`) and a blinking circular dot to designate live broadcasting status. Text styled in uppercase `JetBrains Mono` at `label-sm`.

### Link-in-Bio Quick Strips
- Full-width stacked buttons optimized for TikTok referrals: obsidian base, holographic cyan-magenta perimeter glow, accompanied by an icon slot on the left and a directional arrow indicator on the right.