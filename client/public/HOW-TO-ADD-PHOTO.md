# How to Add Your Developer Photo

## Quick Steps

1. **Choose your photo**: Select a professional headshot or photo of yourself
2. **Rename it**: Name the file `developer-photo.jpg` (or `.png`, `.webp`)
3. **Place it here**: Copy the photo to `/client/public/` folder
4. **Update the path** (if different extension): 
   - Open `client/src/components/Hero.jsx`
   - Find line 71: `src="/developer-photo.jpg"`
   - Update the extension if you used .png or .webp

## Photo Guidelines

**Recommended Specifications:**
- **Dimensions**: At least 800x800 pixels (square)
- **Format**: JPG, PNG, or WebP
- **Style**: Professional headshot or casual developer photo
- **Background**: Ideally a clean or blurred background
- **Lighting**: Well-lit, clear shot of your face

**Tips:**
- The photo will be displayed in a circular frame
- Make sure your face is centered
- Avoid photos with too much text or busy backgrounds
- If you don't have a professional photo, a clean selfie works too!

## Fallback

If no photo is added, the component will automatically show a beautiful purple gradient as a placeholder.

## Animations Applied

Your photo will have these cool effects:
- ✨ **Floating animation**: Gentle up and down movement
- 🌟 **Glowing border**: Animated spinning ring around the photo
- 💫 **Blur effects**: Soft glowing accents
- 📱 **Responsive**: Looks great on all devices!
