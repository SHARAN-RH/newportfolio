# Mobile Portfolio Version

This is a complete mobile-responsive version of the portfolio, built as a separate application alongside the desktop version.

## Features

- **Mobile-First Design**: Optimized for touch interactions and small screens
- **Responsive Components**: All components redesigned for mobile viewing
- **Touch-Friendly UI**: Large touch targets and swipe gestures
- **Performance Optimized**: Lightweight and fast loading
- **Dark/Light Theme**: Theme switching with system preference detection
- **Smooth Animations**: Framer Motion animations optimized for mobile

## Mobile Components

- `MobileHeader` - Collapsible navigation with slide-out menu
- `MobileHero` - Compact hero section with profile and CTA buttons
- `MobileAbout` - Card-based about section with education
- `MobileExperience` - Timeline-based experience display
- `MobileSkills` - Categorized skills with progress bars
- `MobileProjects` - Expandable project cards with load more
- `MobileCertificates` - Certificate cards with verification links
- `MobileBlog` - Filterable blog posts with categories
- `MobileContact` - Contact form with direct action buttons
- `MobilePreloader` - Mobile-optimized loading screen

## Development

### Run Mobile Version
```bash
npm run mobile:dev
```

### Build Mobile Version
```bash
npm run mobile:build
```

### Preview Mobile Build
```bash
npm run mobile:preview
```

## File Structure

```
src/mobile/
├── MobileApp.tsx           # Main mobile app component
├── index.tsx              # Mobile entry point
└── components/
    ├── MobileHeader.tsx
    ├── MobileHero.tsx
    ├── MobileAbout.tsx
    ├── MobileExperience.tsx
    ├── MobileSkills.tsx
    ├── MobileProjects.tsx
    ├── MobileCertificates.tsx
    ├── MobileBlog.tsx
    ├── MobileContact.tsx
    └── MobilePreloader.tsx
```

## Mobile-Specific Features

1. **Touch Navigation**: Slide-out menu with smooth animations
2. **Compact Layout**: Single-column layout optimized for mobile screens
3. **Load More Functionality**: Progressive loading for projects and blog posts
4. **Expandable Cards**: Tap to expand project details
5. **Direct Actions**: One-tap email, phone, and social media links
6. **Optimized Images**: Responsive images with proper sizing
7. **Fast Loading**: Minimal bundle size and optimized assets

## Accessing Mobile Version

- Development: `http://localhost:5174/mobile.html`
- Production: Deploy the `dist-mobile` folder

## Browser Support

- iOS Safari 12+
- Chrome Mobile 70+
- Firefox Mobile 68+
- Samsung Internet 10+

## Performance

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
