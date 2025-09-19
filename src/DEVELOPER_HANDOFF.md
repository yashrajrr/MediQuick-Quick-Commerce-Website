# MediQuick Website - Developer Handoff

## Design System Tokens

### Color Tokens

#### Clinical Clean Theme (Default)
```css
--mq-primary: #4F9AF7;
--mq-primary-foreground: #ffffff;
--mq-accent: #10B981;
--mq-accent-foreground: #ffffff;
--mq-success: #10B981;
--mq-warn: #F59E0B;
--mq-error: #EF4444;
--mq-background: #ffffff;
--mq-foreground: #0F172A;
--mq-card: #F8FAFC;
--mq-muted: #F1F5F9;
--mq-border: rgba(15, 23, 42, 0.1);
```

#### Modern Gradient Theme
```css
--mq-primary: #0FB5A6;
--mq-accent: #FF6B5B;
--mq-background: #F7F8FA;
--mq-card: #ffffff;
--mq-secondary: #E8F5F4;
```

#### Dark Mode Theme
```css
--mq-primary: #06B6D4;
--mq-accent: #F97316;
--mq-background: #0F172A;
--mq-foreground: #F8FAFC;
--mq-card: #1E293B;
```

### Neutral Scale
```css
--mq-neutral-50: #F8FAFC;
--mq-neutral-100: #F1F5F9;
--mq-neutral-200: #E2E8F0;
--mq-neutral-300: #CBD5E1;
--mq-neutral-400: #94A3B8;
--mq-neutral-500: #64748B;
--mq-neutral-600: #475569;
--mq-neutral-700: #334155;
--mq-neutral-800: #1E293B;
--mq-neutral-900: #0F172A;
```

### Typography Tokens

#### Font Families
```css
--mq-font-headline: 'SF Pro Display', 'Inter', 'Poppins', system-ui, sans-serif;
--mq-font-body: 'Inter', system-ui, sans-serif;
--mq-font-ui: 'Inter', system-ui, sans-serif;
```

#### Font Sizes (Desktop)
```css
--mq-h1: 48px;
--mq-h2: 36px;
--mq-h3: 28px;
--mq-h4: 24px;
--mq-h5: 20px;
--mq-h6: 18px;
--mq-body: 16px;
--mq-body-sm: 14px;
--mq-ui-small: 12px;
```

#### Font Weights
```css
--mq-weight-normal: 400;
--mq-weight-medium: 500;
--mq-weight-semibold: 600;
--mq-weight-bold: 700;
```

### Spacing Scale (8pt Grid)
```css
--mq-space-1: 4px;
--mq-space-2: 8px;
--mq-space-3: 12px;
--mq-space-4: 16px;
--mq-space-6: 24px;
--mq-space-8: 32px;
--mq-space-12: 48px;
--mq-space-16: 64px;
--mq-space-20: 80px;
--mq-space-24: 96px;
--mq-space-32: 128px;
```

### Border Radius
```css
--mq-radius-xs: 4px;
--mq-radius-sm: 6px;
--mq-radius-md: 8px;
--mq-radius-lg: 12px;
--mq-radius-xl: 16px;
--mq-radius-2xl: 20px;
--mq-radius-3xl: 24px;
--mq-radius-full: 9999px;
```

### Elevation/Z-Index
```css
--mq-z-base: 0;
--mq-z-dropdown: 10;
--mq-z-sticky: 20;
--mq-z-card: 30;
--mq-z-modal: 50;
--mq-z-toast: 100;
```

## Animation Tokens

### Duration
```css
--mq-anim-micro: 120ms;
--mq-anim-short: 240ms;
--mq-anim-medium: 360ms;
--mq-anim-long: 600ms;
```

### Easing Functions
```css
--mq-ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);
--mq-ease-emphasized: cubic-bezier(0.22, 0.9, 0.28, 1);
--mq-ease-decelerated: cubic-bezier(0.0, 0.0, 0.2, 1);
--mq-ease-accelerated: cubic-bezier(0.4, 0.0, 1, 1);
```

## Key Micro-interactions

### Add-to-Cart Fly Animation
```css
@keyframes flyToCart {
  0% {
    transform: scale(1) translateX(0) translateY(0);
    opacity: 1;
  }
  50% {
    transform: scale(0.8) translateX(200px) translateY(-100px);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.2) translateX(400px) translateY(-200px);
    opacity: 0;
  }
}

.animate-fly-to-cart {
  animation: flyToCart var(--mq-anim-long) var(--mq-ease-emphasized) forwards;
}
```

Duration: **600ms**  
Easing: **cubic-bezier(0.22, 0.9, 0.28, 1)**

### Button Press Animation
```css
.animate-scale-press {
  transition: transform var(--mq-anim-micro) var(--mq-ease-default);
}

.animate-scale-press:active {
  transform: scale(0.97);
}
```

Duration: **120ms**  
Easing: **ease-in**

### Card Hover Animation
```css
.animate-card-hover {
  transition: 
    transform var(--mq-anim-short) var(--mq-ease-default),
    box-shadow var(--mq-anim-short) var(--mq-ease-default);
}

.animate-card-hover:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

Duration: **240ms**  
Transform: **translateY(-6px) + scale(1.02)**

### Toast Slide Animation
```css
.animate-slide-up {
  animation: slideUp var(--mq-anim-short) var(--mq-ease-default);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

Duration: **240ms**  
Easing: **ease-out**

### Staggered List Items
```css
.animate-stagger-item {
  opacity: 0;
  transform: translateY(12px);
  animation: staggerItem var(--mq-anim-short) var(--mq-ease-default) forwards;
}

@keyframes staggerItem {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Stagger Delay: **60ms** between items  
Item Duration: **220-280ms**

## Responsive Breakpoints

### Desktop First Approach
```css
/* Desktop (1440px+) - Base styles */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--mq-space-6);
}

/* Tablet (1024px) */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 0 var(--mq-space-4);
  }
  
  :root {
    --mq-h1: 40px;
    --mq-h2: 32px;
    --mq-h3: 24px;
  }
}

/* Mobile Large (768px) */
@media (max-width: 768px) {
  :root {
    --mq-h1: 32px;
    --mq-h2: 28px;
    --mq-h3: 20px;
  }
}

/* Mobile Small (375px) */
@media (max-width: 375px) {
  :root {
    --mq-h1: 28px;
    --mq-h2: 24px;
    --mq-h3: 18px;
    --mq-body: 14px;
  }
}
```

## Performance Guidelines

### Animation Optimization
- Use `transform` and `opacity` properties for animations
- Add `will-change: transform` for elements that will animate
- Remove `will-change` after animations complete
- Prefer CSS animations over JavaScript for simple transitions

### Critical Performance Tips
```css
/* Good - GPU accelerated */
.animate-element {
  will-change: transform;
  transform: translateX(100px);
  transition: transform 240ms ease;
}

/* Avoid - triggers layout/paint */
.avoid-element {
  left: 100px;
  transition: left 240ms ease;
}
```

## Accessibility Standards

### WCAG AA Compliance
- **Body text**: Minimum contrast ratio of 4.5:1
- **Large text**: Minimum contrast ratio of 3:1
- **Interactive elements**: Minimum 44×44px touch target
- **Focus indicators**: Visible and clear focus states

### Required ARIA Labels
```html
<!-- Product cards -->
<button aria-label="Add Paracetamol 500mg to cart">
  <span aria-hidden="true">+</span>
</button>

<!-- Search -->
<input aria-label="Search medicines and health products" />

<!-- Cart badge -->
<button aria-label="Shopping cart, 3 items">
  <span aria-hidden="true">🛒</span>
  <span class="sr-only">3 items in cart</span>
</button>
```

## Component Library

### Product Card States
- **Default**: Base card appearance
- **Hover**: Elevated with shadow and scale
- **Loading**: Skeleton placeholder
- **Out of Stock**: 60% opacity with disabled state
- **Prescription Required**: Warning badge
- **Drug Interactions**: Alert badge

### Button Variants
- **Primary**: `bg-primary hover:bg-primary/90`
- **Secondary**: `bg-secondary hover:bg-secondary/80`
- **Accent**: `bg-accent hover:bg-accent/90`
- **Destructive**: `bg-destructive hover:bg-destructive/90`
- **Outline**: `border-border hover:bg-accent`
- **Ghost**: `hover:bg-accent hover:text-accent-foreground`

## Icon System (SVG)

### Core Icons (20 essential)
1. `home` - House/Home
2. `search` - Magnifying glass
3. `cart` - Shopping cart
4. `prescriptions` - Document/prescription pad
5. `reminders` - Bell with notification
6. `profile` - User circle
7. `emergency` - Lightning bolt/medical cross
8. `chat` - Message bubble
9. `location` - Map pin
10. `filter` - Funnel/filter
11. `heart` - Heart (favorites)
12. `share` - Share arrow
13. `star` - Star (ratings)
14. `clock` - Time/delivery
15. `shield` - Security/verification
16. `pill` - Medicine/tablet
17. `upload` - Upload arrow
18. `camera` - Camera (prescription scan)
19. `phone` - Phone (emergency)
20. `leaf` - Sustainability/green

### Export Specifications
- **Format**: SVG
- **Sizes**: 16px, 24px, 32px (1x, 1.5x, 2x)
- **Stroke width**: 1.5px for line icons
- **Corner radius**: 2px for consistent rounded look

## Theme Implementation

### CSS Custom Properties Approach
```css
/* Theme switching */
:root {
  /* Default (Clinical Clean) theme */
}

.theme-gradient {
  /* Override tokens for gradient theme */
}

.theme-dark {
  /* Override tokens for dark theme */
}
```

### JavaScript Theme Switching
```javascript
const applyTheme = (themeId) => {
  const root = document.documentElement;
  root.className = root.className.replace(/theme-\w+/g, '');
  
  if (themeId !== 'default') {
    root.classList.add(`theme-${themeId}`);
  }
};
```

## Content & Microcopy Tokens

### Success Messages
- **Prescription Uploaded**: "Prescription uploaded — verified ✓"
- **Added to Cart**: "Added to cart successfully"
- **Order Placed**: "Order confirmed! Delivery in 30 minutes"

### Warning Messages
- **Drug Interactions**: "Heads up — this drug interacts with Metformin"
- **Prescription Required**: "Prescription required for this medicine"
- **Out of Stock**: "Currently out of stock"

### CTA Copy
- **Primary Actions**: "Order now", "Upload prescription", "Start shopping"
- **Secondary Actions**: "Learn more", "View details", "Continue"
- **Subscription**: "Refill monthly", "Subscribe & save"

### Tone Guidelines
- **Friendly**: Use conversational, approachable language
- **Clear**: Avoid medical jargon, use simple terms
- **Trustworthy**: Emphasize safety, verification, and expertise
- **Urgent**: For emergency features, be direct and actionable

## Lottie Animation Suggestions

### Hero Section Micro-animations
1. **Pill bottle** with floating pills (2-3 second loop)
2. **Delivery truck** with moving wheels and route line
3. **Prescription scan** with checkmark validation
4. **Heart beat** for health monitoring features

### Loading States
1. **Medicine loading**: Pills dropping into a bottle
2. **Search loading**: Magnifying glass with scanning line
3. **Upload progress**: Document with progress bar
4. **Delivery tracking**: Animated map with moving dot

## Testing Checklist

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Color contrast validation
- [ ] Touch target sizes (mobile)
- [ ] Focus indicators visible

### Performance Testing
- [ ] Animation performance (60fps)
- [ ] Image optimization
- [ ] Bundle size optimization
- [ ] Core Web Vitals metrics

### Cross-browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing
- [ ] Desktop (1440px, 1200px)
- [ ] Tablet (1024px, 768px)
- [ ] Mobile (375px, 360px, 320px)

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Contact**: Design System Team