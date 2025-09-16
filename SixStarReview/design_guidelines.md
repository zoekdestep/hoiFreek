# Design Guidelines: Corporate Performance Review Parody Website

## Design Approach: Reference-Based (Playful Corporate Mockery)
**Justification**: This is an experience-focused, visual-rich project that parodies corporate aesthetics while celebrating startup achievements. The design should blend professional corporate styling with playful, celebratory elements.

**Primary Reference**: Corporate performance review systems (Workday, BambooHR) with a satirical twist, enhanced by celebratory product launch aesthetics.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Background: 48 95% 85% (warm yellow base matching uploaded design)
- Text Primary: 0 0% 15% (dark charcoal for readability)
- Text Secondary: 0 0% 45% (medium gray)
- Card Background: 0 0% 98% (crisp white cards)

**Accent Colors:**
- Success Green: 142 69% 45% (for positive metrics)
- Corporate Blue: 220 50% 40% (for section headers)
- Warning Orange: 35 85% 55% (sparingly for "drama" metrics)

**Confetti Elements**: Use bright, saturated colors (320 75% 65%, 200 85% 60%, 280 70% 65%) for decorative elements

### B. Typography
**Font Families:**
- Primary: Inter (professional, corporate feel)
- Accent: Outfit (for playful elements and ratings)

**Hierarchy:**
- H1: 32px bold (main title)
- H2: 24px semibold (section headers)
- H3: 18px medium (subsection titles)
- Body: 16px regular
- Small: 14px (metrics, captions)

### C. Layout System
**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-6 to p-8
- Section margins: my-8 to my-12
- Card spacing: gap-4 to gap-6
- Icon spacing: mr-2, ml-4

### D. Component Library

**Cards & Containers:**
- Performance metric cards with subtle shadows
- Expandable/collapsible sections with smooth animations
- Rounded corners (rounded-lg to rounded-xl)
- Subtle border treatments

**Interactive Elements:**
- Star rating display (1-6 stars with golden styling)
- Expand/collapse buttons with chevron icons
- Progress bars for metrics
- Tooltip for "Wait—you can give six?" annotation

**Data Displays:**
- Metric dashboard with percentage/ratio displays
- Color-coded performance indicators
- Badge-style labels for categories

### E. Visual Treatments

**Confetti Elements:**
- Small geometric shapes (circles, triangles, squares) scattered across background
- Subtle opacity (20-30%) to avoid overwhelming text
- Various sizes and rotations for organic feel

**Gradients:**
- Subtle gradient overlays on metric cards
- Honor badge/achievement styling with gentle gradients

**Shadows & Depth:**
- Soft drop shadows on cards (shadow-sm to shadow-md)
- Subtle hover effects on interactive elements

## Images
**No large hero image required**. The design relies on:
- Small decorative confetti shapes throughout
- Icon-based metric displays
- Corporate-style achievement badges/certificates styling

## Key Design Principles
1. **Corporate Satire**: Professional styling with deliberately exaggerated corporate language
2. **Celebratory Mood**: Bright, positive colors with festive confetti elements
3. **Clear Hierarchy**: Well-organized sections that expand/collapse smoothly
4. **Playful Contrast**: Serious corporate aesthetic with humorous, over-the-top content
5. **Responsive Joy**: Design maintains playful spirit across all device sizes

## Interactive Behavior
- Smooth accordion-style expansion for performance sections
- Gentle hover effects on cards and buttons
- Star rating with subtle animation
- Progressive disclosure of detailed feedback within each section

This design balances professional corporate aesthetics with celebration and humor, creating an engaging parody that honors both corporate culture and startup achievements.