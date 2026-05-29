# Accessibility Fixes for Material-UI Components

## Overview
This document provides specific code fixes for three critical WCAG 2.1 accessibility issues identified by Lighthouse audit.

---

## 1. Fix Heading Order Violation

### Problem
Headings skip levels (e.g., h1 → h3 or h1 → h5), breaking document structure for screen readers.

### Solution
Use MUI's `component` prop to set semantic HTML while maintaining visual design with `variant` prop.

### Pattern
```jsx
// ❌ WRONG - Skips heading levels
<MKTypography variant="h5">Las Kanopi</MKTypography>

// ✅ CORRECT - Sequential semantic structure
<MKTypography variant="h5" component="h2">Las Kanopi</MKTypography>
```

### File: `src/pages/Services/LasKanopi.js`

**Lines 198-200** - Change:
```jsx
<MKTypography variant="h2" mb={3}>
  Kenapa Memilih Jasa Las Kanopi Indian Jaya?
</MKTypography>
```
To:
```jsx
<MKTypography variant="h2" component="h2" mb={3}>
  Kenapa Memilih Jasa Las Kanopi Indian Jaya?
</MKTypography>
```

**Lines 211-213** - Change:
```jsx
<MKTypography variant="h3" mt={4} mb={2}>
  Jenis Material Kanopi yang Kami Sediakan
</MKTypography>
```
To:
```jsx
<MKTypography variant="h3" component="h3" mt={4} mb={2}>
  Jenis Material Kanopi yang Kami Sediakan
</MKTypography>
```

**Lines 246-248** - Change:
```jsx
<MKTypography variant="h3" mt={4} mb={2}>
  Keunggulan Layanan Kami
</MKTypography>
```
To:
```jsx
<MKTypography variant="h3" component="h3" mt={4} mb={2}>
  Keunggulan Layanan Kami
</MKTypography>
```

**Lines 253-255, 263-265, 273-275, 283-285** - Change all h6 inside feature boxes:
```jsx
<MKTypography variant="h6" color="white" mb={1}>
  ✓ Free Survey
</MKTypography>
```
To:
```jsx
<MKTypography variant="h6" component="h4" color="white" mb={1}>
  ✓ Free Survey
</MKTypography>
```

**Lines 293-295** - Change:
```jsx
<MKTypography variant="h3" mt={4} mb={2}>
  Estimasi Harga Las Kanopi Per Meter (2026)
</MKTypography>
```
To:
```jsx
<MKTypography variant="h3" component="h3" mt={4} mb={2}>
  Estimasi Harga Las Kanopi Per Meter (2026)
</MKTypography>
```

**Lines 368-370** - Change:
```jsx
<MKTypography variant="h3" mt={4} mb={2}>
  Area Layanan Las Kanopi
</MKTypography>
```
To:
```jsx
<MKTypography variant="h3" component="h3" mt={4} mb={2}>
  Area Layanan Las Kanopi
</MKTypography>
```

**Lines 445-447** - Change:
```jsx
<MKTypography variant="h5" color="white" mb={2} textAlign="center">
  Konsultasi Gratis
</MKTypography>
```
To:
```jsx
<MKTypography variant="h5" component="h3" color="white" mb={2} textAlign="center">
  Konsultasi Gratis
</MKTypography>
```

### Apply Same Pattern to All Service Pages

**Files to update:**
- `src/pages/Services/LasPagar.js`
- `src/pages/Services/LasTralis.js`
- `src/pages/Services/LasStainless.js`
- `src/pages/Services/LasPanggilan.js`

**Pattern for all service pages:**
```jsx
// After h1 (page title), use h2 for main sections
<MKTypography variant="h2" component="h2">Main Section</MKTypography>

// Use h3 for subsections
<MKTypography variant="h3" component="h3">Subsection</MKTypography>

// Use h4 for feature boxes/cards
<MKTypography variant="h6" component="h4">Feature Title</MKTypography>
```

### File: `src/pages/Presentation/index.js`

**Lines 722-724** - Change:
```jsx
<MKTypography variant="h5" fontWeight="bold" mb={2} color="dark">
  {service.title}
</MKTypography>
```
To:
```jsx
<MKTypography variant="h5" component="h2" fontWeight="bold" mb={2} color="dark">
  {service.title}
</MKTypography>
```

**Lines 902-904** - Change:
```jsx
<MKTypography variant="h6" fontWeight="bold" mb={1.5} color="dark">
  {step.title}
</MKTypography>
```
To:
```jsx
<MKTypography variant="h6" component="h3" fontWeight="bold" mb={1.5} color="dark">
  {step.title}
</MKTypography>
```

---

## 2. Fix Empty/Invisible Links

### Problem
Links without discernible text fail accessibility for screen readers.

### Solution
Add `aria-label` attribute to all icon-only or image-only links.

### File: `src/footer.routes.js`

**Lines 19-31** - Change social icons:
```jsx
socials: [
  {
    icon: <FacebookIcon />,
    label: "Facebook Indian Jaya Las",
    // link: "https://www.facebook.com/CreativeTim/",
  },
  {
    icon: <TwitterIcon />,
    label: "Twitter Indian Jaya Las",
    // link: "https://twitter.com/creativetim",
  },
  {
    icon: <YouTubeIcon />,
    label: "YouTube Indian Jaya Las",
    // link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  },
],
```

### File: `src/examples/Footers/DefaultFooter/index.js`

**Lines 42-48** - Already has aria-label, but ensure it's always present:
```jsx
<Link to={brand.route} aria-label={`Kembali ke ${brand.name} beranda`}>
  <MKBox
    component="img"
    src={brand.image}
    alt={brand.name}
    maxWidth="2rem"
    width="32"
    height="32"
    loading="lazy"
    decoding="async"
    mb={2}
  />
</Link>
```

**Lines 54-68** - Social links already have aria-label from label prop (good!).

### File: `src/pages/Presentation/index.js`

**Lines 360-380** - WhatsApp link (already has text, but ensure proper structure):
```jsx
<MKBox
  component="a"
  href="https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat WhatsApp dengan Indian Jaya Las"
  sx={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    // ... rest of styles
  }}
>
  <MKBox component="span" mr={1} aria-hidden="true">
    💬
  </MKBox>
  Chat WhatsApp Sekarang
</MKBox>
```

**Lines 392-410** - Phone link:
```jsx
<MKBox
  component="a"
  href="tel:081212154019"
  aria-label="Telepon Indian Jaya Las di 081212154019"
  sx={{
    // ... styles
  }}
>
  <MKBox component="span" mr={1} aria-hidden="true">
    📞
  </MKBox>
  Telepon Sekarang
</MKBox>
```

### File: `src/examples/Navbars/DefaultNavbar/index.js`

**Lines 517-530** - Logo link needs aria-label:
```jsx
<MKBox
  component={Link}
  to="/"
  aria-label="Kembali ke beranda Indian Jaya Las"
  lineHeight={1}
  py={transparent ? 1.5 : 0.75}
  pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
>
  {/* Logo content */}
</MKBox>
```

---

## 3. Fix Low Contrast Text

### Problem
Body text colors (#7b809a) fail WCAG AA contrast ratio (4.5:1) on white backgrounds.

### Solution
Update theme colors to meet WCAG AA standards.

### File: `src/assets/theme/base/colors.js`

**Lines 28-31** - Change text color:
```jsx
text: {
  main: "#495057",      // Changed from #7b809a (contrast ratio 8.59:1 ✓)
  focus: "#495057",     // Changed from #7b809a
},
```

**Lines 52-55** - Change secondary color:
```jsx
secondary: {
  main: "#495057",      // Changed from #7b809a (contrast ratio 8.59:1 ✓)
  focus: "#343a40",     // Changed from #8f93a9 (contrast ratio 11.63:1 ✓)
},
```

### File: `src/assets/theme/base/typography.js`

**Lines 127-132** - Update body1:
```jsx
body1: {
  fontFamily: baseProperties.fontFamily,
  fontSize: baseProperties.fontSizeXL,
  fontWeight: baseProperties.fontWeightRegular,
  lineHeight: 1.625,
  color: "#495057",  // Add explicit color override
},
```

**Lines 134-139** - Update body2:
```jsx
body2: {
  fontFamily: baseProperties.fontFamily,
  fontSize: baseProperties.fontSizeMD,
  fontWeight: baseProperties.fontWeightRegular,  // Changed from fontWeightLight
  lineHeight: 1.6,
  color: "#495057",  // Add explicit color override
},
```

### Alternative: Use sx prop for specific components

If you don't want to change the global theme, use inline overrides:

```jsx
// For body text with low contrast
<MKTypography 
  variant="body1" 
  color="text" 
  sx={{ color: "#495057" }}
  mb={2}
>
  Your text content here
</MKTypography>

// For body2 text
<MKTypography 
  variant="body2" 
  sx={{ color: "#495057" }}
>
  Smaller text content
</MKTypography>
```

### Specific Files with Contrast Issues

**File: `src/pages/Presentation/sections/Testimonials.js`**

Find all `<MKTypography variant="body2">` and add:
```jsx
<MKTypography variant="body2" sx={{ color: "#495057" }}>
  {testimonial.text}
</MKTypography>
```

**File: `src/pages/Services/LasKanopi.js` (and all service pages)**

Update all body text:
```jsx
<MKTypography variant="body1" sx={{ color: "#495057" }} mb={2}>
  <strong>Indian Jaya Las</strong> adalah bengkel las profesional...
</MKTypography>
```

---

## Color Contrast Reference

### WCAG AA Compliant Colors (on white #ffffff background)

| Color | Hex | Contrast Ratio | Status |
|-------|-----|----------------|--------|
| Original text | #7b809a | 3.77:1 | ❌ Fail |
| **New text** | **#495057** | **8.59:1** | ✅ Pass |
| Grey 700 | #495057 | 8.59:1 | ✅ Pass |
| Grey 800 | #343a40 | 11.63:1 | ✅ Pass |
| Grey 900 | #212529 | 15.30:1 | ✅ Pass |
| Dark main | #344767 | 9.73:1 | ✅ Pass |

### Recommended Usage

- **Body text (body1, body2)**: `#495057` (grey 700)
- **Emphasis text**: `#343a40` (grey 800)
- **High contrast text**: `#212529` (grey 900)
- **Headings**: Keep `#344767` (dark.main)

---

## Testing Checklist

### 1. Heading Order
- [ ] Run Lighthouse audit
- [ ] Check "Heading elements are not in a sequentially-descending order" is resolved
- [ ] Verify with screen reader (NVDA/JAWS) that heading navigation works correctly

### 2. Link Names
- [ ] All icon-only links have `aria-label`
- [ ] All image links have descriptive `alt` text or `aria-label`
- [ ] Run Lighthouse audit - "Links do not have a discernible name" should pass

### 3. Color Contrast
- [ ] Run Lighthouse audit
- [ ] Check "Background and foreground colours do not have a sufficient contrast ratio" is resolved
- [ ] Use browser DevTools Accessibility panel to verify contrast ratios
- [ ] Test with Chrome DevTools: Inspect element → Accessibility → Contrast

---

## Quick Implementation Guide

### Step 1: Update Theme (Global Fix)
1. Update `src/assets/theme/base/colors.js`
2. Update `src/assets/theme/base/typography.js`

### Step 2: Fix Heading Structure (Per Page)
1. Start with `src/pages/Services/LasKanopi.js`
2. Add `component` prop to all headings
3. Repeat for all service pages
4. Update `src/pages/Presentation/index.js`

### Step 3: Fix Links (Multiple Files)
1. Update `src/footer.routes.js` - add labels to social icons
2. Update `src/examples/Footers/DefaultFooter/index.js` - add aria-label to logo link
3. Update `src/pages/Presentation/index.js` - add aria-labels to CTA links
4. Update `src/examples/Navbars/DefaultNavbar/index.js` - add aria-label to logo

### Step 4: Verify
1. Run `npm start`
2. Open Chrome DevTools → Lighthouse
3. Run Accessibility audit
4. Verify all three issues are resolved

---

## Additional Recommendations

### 1. Add Skip to Main Content Link
```jsx
// In App.js or main layout
<MKBox
  component="a"
  href="#main-content"
  sx={{
    position: "absolute",
    left: "-9999px",
    zIndex: 999,
    "&:focus": {
      left: "50%",
      transform: "translateX(-50%)",
      top: "10px",
      padding: "8px 16px",
      backgroundColor: "primary.main",
      color: "white",
      textDecoration: "none",
      borderRadius: "4px",
    },
  }}
>
  Skip to main content
</MKBox>
```

### 2. Add Language Attribute
```jsx
// In public/index.html
<html lang="id">
```

### 3. Ensure Focus Indicators
All interactive elements should have visible focus states (already handled by MUI).

---

## Summary

**Total Files to Modify:**
1. `src/assets/theme/base/colors.js` - Update text colors
2. `src/assets/theme/base/typography.js` - Update body typography
3. `src/pages/Services/LasKanopi.js` - Fix heading order
4. `src/pages/Services/LasPagar.js` - Fix heading order
5. `src/pages/Services/LasTralis.js` - Fix heading order
6. `src/pages/Services/LasStainless.js` - Fix heading order
7. `src/pages/Services/LasPanggilan.js` - Fix heading order
8. `src/pages/Presentation/index.js` - Fix heading order + link labels
9. `src/footer.routes.js` - Add social icon labels
10. `src/examples/Footers/DefaultFooter/index.js` - Add logo aria-label
11. `src/examples/Navbars/DefaultNavbar/index.js` - Add logo aria-label

**Estimated Time:** 2-3 hours for complete implementation and testing.
