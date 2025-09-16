# 📸 How to Upload Photos and Videos

## 🚀 Quick Start Guide

### Step 1: Prepare Your Media
1. **Player Photo**: Take a clear headshot (400x600px recommended)
2. **Action Shots**: Get photos of Jayden playing (catching, running, tackling)
3. **Videos**: Record his best plays (10-30 seconds each)

### Step 2: Upload to GitHub (Easiest Method)

#### Option A: Using GitHub Website
1. Go to https://github.com/KSLepley/HJL_Football
2. Click "Add file" → "Upload files"
3. Drag your photos to `assets/images/` folder
4. Drag your videos to `assets/videos/highlights/` folder
5. Add commit message: "Add player photos and videos"
6. Click "Commit changes"

#### Option B: Using Terminal (if you have Git)
```bash
# Navigate to your project folder
cd /Users/kaylielepley/HJL_PWB

# Add your media files
git add assets/images/player-photo.jpg
git add assets/videos/highlights/touchdown-catch.mp4

# Commit and push
git commit -m "Add player photos and videos"
git push origin main
```

### Step 3: File Naming
Use these exact names for the website to work:

**Images (JPEG format):**
- `player-photo.jpg` (or `.jpeg`) - Main headshot
- `touchdown-catch-poster.jpg` - Video thumbnail
- `interception-poster.jpg` - Video thumbnail
- `big-hit-poster.jpg` - Video thumbnail
- `route-running-poster.jpg` - Video thumbnail
- `punt-return-poster.jpg` - Video thumbnail
- `blocking-poster.jpg` - Video thumbnail

**Videos:**
- `touchdown-catch.mp4`
- `interception.mp4`
- `big-hit.mp4`
- `route-running.mp4`
- `punt-return.mp4`
- `blocking.mp4`

## 🎬 Video Optimization Tips

### Before Uploading:
1. **Compress videos** to under 50MB each
2. **Use MP4 format** for best compatibility
3. **Keep videos short** (10-30 seconds)
4. **Create thumbnails** (poster images) for each video

### Free Tools to Use:
- **HandBrake** (free video compressor)
- **TinyPNG** (compress images)
- **Canva** (create video thumbnails)

## 📱 Alternative: YouTube/Vimeo (Recommended for Videos)

For better performance, upload videos to YouTube/Vimeo and embed them:

1. **Upload to YouTube** (unlisted or public)
2. **Get the video ID** from the URL
3. **Replace video tags** in highlights.html with:
```html
<iframe width="100%" height="200" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen>
</iframe>
```

## 🔧 Troubleshooting

### If images don't show:
1. Check file names match exactly
2. Make sure files are in the right folders
3. Try refreshing the page (Ctrl+F5)

### If videos don't play:
1. Check file format (MP4 works best)
2. Try compressing the video
3. Consider using YouTube instead

## 📋 Checklist

- [ ] Player photo uploaded as `player-photo.jpg`
- [ ] Action photos added to `assets/images/`
- [ ] Highlight videos added to `assets/videos/highlights/`
- [ ] Video thumbnails created and uploaded
- [ ] Files committed and pushed to GitHub
- [ ] Website refreshed to see changes

## 🎯 Pro Tips

1. **Start with one video** to test the process
2. **Use high-quality photos** - they make a big difference
3. **Keep file sizes reasonable** for fast loading
4. **Test on mobile** to make sure everything looks good
5. **Ask for help** if you get stuck!

---

**Need help?** The website will automatically update once you upload files to GitHub!
