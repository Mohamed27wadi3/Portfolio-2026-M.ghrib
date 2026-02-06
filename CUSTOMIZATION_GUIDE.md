# Cybersecurity Portfolio - Customization Guide

## 🎯 Quick Start Customization

### 1. Personal Information (Hero Section)
**File:** `/src/app/components/Hero.tsx`

Replace the following:
- Line 47: `Your Full Name` - Add your actual name
- Line 10: Update the typing text with your custom title
- Line 28: Replace the image URL with your professional photo

### 2. Contact Information
**File:** `/src/app/components/Contact.tsx`

Update these placeholders:
- Line 49: `your.email@example.com` - Your email address
- Line 70: `+213 XXX XXX XXX` - Your phone number
- Line 85: `Blida, Algeria` - Your location
- Lines 93-107: Update LinkedIn and GitHub URLs

### 3. Projects
**File:** `/src/app/components/Projects.tsx`

The `projects` array (lines 6-53) contains all project cards. Each project has:
- `title`: Project name
- `description`: Brief description
- `tags`: Array of technologies/tools used
- `gradient`: Color scheme for the card

Add, remove, or modify projects as needed.

### 4. CTF Experience
**File:** `/src/app/components/CTFExperience.tsx`

The `ctfEvents` array (lines 5-46) contains your CTF competitions:
- `type`: 'on-site' or 'online'
- `name`: Competition name
- `description`: Brief description
- `year`: Year participated
- `rank`: Your ranking/achievement

### 5. Achievements
**File:** `/src/app/components/Achievements.tsx`

Update the `stats` array (lines 6-33):
- `value`: The number to display
- `suffix`: Text after the number (e.g., 'rd', '+')
- `label`: Description
- `color`: Gradient colors

Update the hackathon achievement section (lines 77-95) with your specific achievement.

### 6. Certifications
**File:** `/src/app/components/Certifications.tsx`

The `certifications` array (lines 6-47) contains all your certifications:
- `title`: Certification name
- `issuer`: Organization that issued it
- `year`: Year obtained
- `description`: Brief description
- `skills`: Array of skills covered

### 7. Media Work
**File:** `/src/app/components/MediaWork.tsx`

Update the `mediaProjects` array (lines 5-26) with your video projects:
- `title`: Video title
- `type`: Category
- `duration`: Video length
- `thumbnail`: Description for image search

### 8. Events Gallery
**File:** `/src/app/components/EventsGallery.tsx`

Modify the `events` array (lines 7-38):
- `title`: Event name
- `query`: Keywords for image search (or replace with actual image URLs)
- `description`: Event description

### 9. Logo Carousel
**File:** `/src/app/components/LogoCarousel.tsx`

Update the `platforms` array (lines 5-14) with your active platforms:
- `name`: Platform name
- `icon`: Emoji or icon representation

To use actual logos, replace emojis with `<img>` tags.

### 10. About Section
**File:** `/src/app/components/About.tsx`

Update the content in lines 27-80:
- Educational information
- Research focus
- Leadership roles
- Professional details

## 🎨 Design Customization

### Color Scheme
The portfolio uses a dark-tech aesthetic with blue and purple accents. To change colors:

1. **Global gradients:** Look for `from-blue-400 to-purple-400` patterns
2. **Glow effects:** Modify `shadow-[0_0_30px_rgba(96,165,250,0.5)]`
3. **Backgrounds:** Change `bg-gradient-to-r from-blue-600 to-purple-600`

Common color classes used:
- Blue: `blue-400`, `blue-500`, `blue-600`
- Purple: `purple-400`, `purple-500`, `purple-600`
- Pink: `pink-400`, `pink-500`, `pink-600`

### Animation Timing
To adjust animation speeds:
- Hero typing: `/src/app/components/Hero.tsx` line 17 - change `50` (milliseconds)
- Loading screen: `/src/app/components/LoadingScreen.tsx` line 16 - change `30`
- Network particles: `/src/app/components/NetworkBackground.tsx` line 14 - adjust particle count

### Network Background
**File:** `/src/app/components/NetworkBackground.tsx`

Customize:
- Line 14: `particleCount` - Number of particles (default: 80)
- Line 15: `connectionDistance` - How far particles connect (default: 150)
- Line 30: Particle color (default: '#60a5fa')

## 📸 Adding Real Images

### Profile Photo
Replace the Unsplash URL in Hero.tsx with your actual photo:
```tsx
<img src="/path/to/your/photo.jpg" alt="Your Name" />
```

### Event Gallery
Replace Unsplash URLs in EventsGallery.tsx with actual event photos.

### Video Thumbnails
In MediaWork.tsx, replace the placeholder backgrounds with actual video thumbnails.

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `/src/app/components/`
2. Import it in `/src/app/App.tsx`
3. Add it to the Navigation items in `/src/app/components/Navigation.tsx`

### Modifying Animations
All animations use Motion (Framer Motion). Key properties:
- `initial`: Starting state
- `animate`: End state
- `transition`: Animation properties
- `whileHover`: Hover effects
- `whileTap`: Click effects

### Performance Optimization
- Reduce particle count in NetworkBackground.tsx for better mobile performance
- Lazy load images by adding `loading="lazy"` attribute
- Consider reducing animation complexity on mobile devices

## 📱 Responsive Design
The portfolio is fully responsive. Breakpoints:
- `md:` - Tablets and up (768px)
- `lg:` - Desktops (1024px)

## 🚀 Deployment Tips
1. Replace all "Your Name" placeholders
2. Update all contact information
3. Add real project links and GitHub repositories
4. Replace placeholder images with actual photos
5. Update CV download link in Hero.tsx
6. Test all contact form functionality
7. Optimize images for web (WebP format recommended)

## 📝 Footer
**File:** `/src/app/App.tsx` (lines 40-52)

Update copyright and credits with your information.

---

## ✨ Features Checklist
- [ ] Updated name and professional photo
- [ ] Added real contact information
- [ ] Customized projects list
- [ ] Updated CTF experience
- [ ] Modified certifications
- [ ] Added real event photos
- [ ] Updated platform links
- [ ] Tested all animations
- [ ] Verified mobile responsiveness
- [ ] Added CV download link

For questions or issues, refer to the component files - they're well-organized and commented!
