# Project Images

This folder contains project thumbnail images for the portfolio.

## Image Requirements

- **Format**: JPG or PNG
- **Dimensions**: 800×600 px (or similar 4:3 ratio)
- **File size**: < 300 KB for optimal loading
- **Quality**: High-quality, professional screenshots or mockups

## Required Images

Replace these placeholder filenames with actual project images:

1. `ecommerce-dashboard.jpg` - E-Commerce Dashboard screenshot
2. `portfolio-builder.jpg` - Portfolio Builder Platform screenshot
3. `task-app.jpg` - Task Management App screenshot
4. `restaurant.jpg` - Restaurant Website screenshot
5. `fitness-tracker.jpg` - Fitness Tracker Mobile App screenshot
6. `blog-platform.jpg` - Blog Publishing Platform screenshot

## Creating Placeholder Images

Until you have real screenshots, you can:

1. **Use a design tool** (Figma, Canva) to create branded placeholders
2. **Use online generators**:
   - https://placeholder.com/
   - https://dummyimage.com/
3. **Screenshot your actual projects** and optimize them with:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)

## Example Placeholder Command

You can generate temporary placeholders using ImageMagick:

```bash
# Install ImageMagick first: brew install imagemagick
convert -size 800x600 -gravity center -background "#1f2937" -fill white \
  -pointsize 40 label:"E-Commerce\nDashboard" public/projects/ecommerce-dashboard.jpg
```

Or use a simple online service like:

```
https://via.placeholder.com/800x600/1f2937/ffffff?text=E-Commerce+Dashboard
```
