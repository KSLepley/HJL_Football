# Media Assets for Harold "Jayden" Lepley Football Website

## 📁 Folder Structure
```
assets/
├── images/
│   ├── player-photo.jpg          # Main player headshot
│   ├── action-shots/             # Game action photos
│   │   ├── catching-1.jpg
│   │   ├── tackling-1.jpg
│   │   └── celebration-1.jpg
│   └── team-photos/              # Team and group photos
│       ├── team-huddle.jpg
│       └── sideline.jpg
└── videos/
    ├── highlights/               # Game highlight videos
    │   ├── touchdown-catch.mp4
    │   ├── interception.mp4
    │   └── big-hit.mp4
    └── interviews/               # Interview or profile videos
        └── player-interview.mp4
```

## 📸 Image Requirements

### Player Photo (Main)
- **File**: `player-photo.jpg`
- **Size**: 400x600px (2:3 ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution, clear face
- **Background**: Solid color or blurred background preferred

### Action Shots
- **Size**: 800x600px (4:3 ratio) or 1200x800px (3:2 ratio)
- **Format**: JPG
- **Quality**: High resolution, clear action
- **Content**: Catching, running, tackling, celebrating

## 🎬 Video Requirements

### Highlight Videos
- **Format**: MP4 (preferred) or WebM
- **Duration**: 10-30 seconds per highlight
- **Resolution**: 1080p (1920x1080) minimum
- **File Size**: Under 50MB per video for web
- **Content**: Best plays, touchdowns, big hits

### Video Optimization
- Use tools like HandBrake to compress videos
- Keep file sizes under 50MB for fast loading
- Consider creating shorter clips (10-15 seconds)

## 🚀 How to Upload

### Method 1: Direct File Upload (Easiest)
1. **Add files to the folders above**
2. **Commit and push to GitHub**:
   ```bash
   git add assets/
   git commit -m "Add player photos and videos"
   git push origin main
   ```
3. **Files will be live** at: `https://your-site.vercel.app/assets/images/filename.jpg`

### Method 2: Drag & Drop to Vercel
1. Go to your Vercel dashboard
2. Find your project
3. Go to "Storage" or "Files" tab
4. Upload directly to the `assets` folder

### Method 3: External Hosting (Recommended for Videos)
For better performance with videos, consider:
- **YouTube**: Upload videos, then embed
- **Vimeo**: Professional video hosting
- **Cloudinary**: Image and video optimization

## 📝 File Naming Convention
- Use lowercase letters and hyphens
- Be descriptive: `touchdown-catch-week8.mp4`
- Avoid spaces and special characters
- Keep names short but clear

## 🎯 Next Steps
1. Add your photos to `assets/images/`
2. Add videos to `assets/videos/`
3. Update the HTML files to reference your media
4. Test on mobile devices for responsiveness

## 💡 Pro Tips
- **Compress images** before uploading (use TinyPNG or similar)
- **Create multiple sizes** for different uses (thumbnail, full-size)
- **Add alt text** for accessibility
- **Test loading speeds** on different devices
