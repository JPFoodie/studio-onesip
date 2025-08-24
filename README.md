# OneSip Studio

A comprehensive Sanity Studio for managing OneSip recipe content with rich media support.

## Features

🍶 **Complete Content Management**
- **Recipes** with rich instructions supporting inline images and videos
- **Authors** with bio and avatar
- **Tags** for content organization  
- **Sake** products with brewery information and pairing recommendations

📝 **Rich Content Editing**
- Portable text editor with custom blocks
- **Image with Caption** blocks (with alt text, caption, and credit)
- **Video Embed** blocks (URL or file upload with poster images)
- **SEO** fields with validation for optimal search performance

🎨 **Media Management**
- Hotspot-enabled images for responsive cropping
- Video support (both URL embeds and file uploads)
- Gallery support for multiple images
- Poster image support for videos

## Getting Started

### Prerequisites

- Node.js 16+ 
- A Sanity project (project ID: `6enao730`)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone https://github.com/JPFoodie/studio-onesip.git
   cd studio-onesip
   npm install
   ```

2. **Add CORS origin:**
   ```bash
   npx sanity cors add http://localhost:3000 --credentials
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the Studio:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Content Types

### Recipe
Complete recipe management with:
- Title, slug, and summary
- Hero image and video support
- Gallery for multiple images  
- Structured metadata (servings, prep time, cook time, cuisine)
- **Rich instructions** with inline images and videos
- Sake pairing recommendations
- Author and tag relationships
- SEO optimization fields

### Author  
Author profiles with name, bio, and avatar

### Tag
Content categorization with title and slug

### Sake
Sake product information with:
- Name and brewery details
- External OneSip product ID
- Product images

## Rich Content Editing

When editing recipe instructions, use the **"+"** button to insert:

- **📝 Text blocks** - Standard rich text formatting
- **🖼️ Image with Caption** - Images with alt text, captions, and credits  
- **🎬 Video Embed** - Videos from URLs or file uploads with poster images

## Schema Structure

```
schemas/
├── documents/          # Main content types
│   ├── recipe.ts      # Recipe with rich content
│   ├── author.ts      # Author profiles  
│   ├── tag.ts         # Content tags
│   └── sake.ts        # Sake products
└── objects/           # Reusable content blocks
    ├── portableBlocks.ts    # Rich text with media
    ├── imageWithCaption.ts  # Image blocks
    ├── videoEmbed.ts        # Video blocks  
    └── seo.ts              # SEO metadata
```

## Development

- **Dev server:** `npm run dev`
- **Build:** `npm run build` 
- **Deploy:** `npm run deploy`

## Links

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://slack.sanity.io/)
- [OneSip](https://onesip.com)
