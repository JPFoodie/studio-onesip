# OneSip Studio - Sanity Schema Documentation

## Overview
This document provides comprehensive documentation of the Sanity CMS schemas used in the OneSip Studio project. These schemas define the content structure for managing sake-related content, recipes, blog posts, and associated metadata.

## Architecture Overview

### Schema Organization
```
schemas/
├── index.ts              # Main schema export
├── documents/            # Document schemas (main content types)
│   ├── author.ts
│   ├── tag.ts
│   ├── sake.ts
│   ├── recipe.ts
│   └── blogPost.ts
└── objects/              # Object schemas (reusable components)
    ├── portableBlocks.ts
    ├── imageWithCaption.ts
    ├── videoEmbed.ts
    └── seo.ts
```

## Document Schemas

### 1. Author (`author`)
**Purpose:** Represents content authors/contributors

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Author's display name |
| `bio` | text | ❌ | Author biography |
| `avatar` | image | ❌ | Profile image with hotspot support |

**Preview Configuration:**
- Title: `name`
- Media: `avatar`

---

### 2. Tag (`tag`)
**Purpose:** Categorization system for content

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Tag display name |
| `slug` | slug | ✅ | URL-friendly identifier (auto-generated from title, max 96 chars) |

**Preview Configuration:**
- Title: `title`

---

### 3. Sake (`sake`)
**Purpose:** Sake product information

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Sake product name |
| `externalId` | string | ❌ | OneSip Product ID for integration |
| `brewery` | string | ❌ | Brewery/manufacturer name |
| `image` | image | ❌ | Product image |

**Preview Configuration:**
- Title: `name`
- Subtitle: `brewery`
- Media: `image`

**Integration Note:** The `externalId` field is crucial for linking Sanity content with OneSip's product database.

---

### 4. Recipe (`recipe`)
**Purpose:** Comprehensive recipe content with sake pairing

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Recipe name |
| `slug` | slug | ✅ | URL slug (auto-generated, max 96 chars) |
| `summary` | text | ❌ | Brief description |
| `intro` | portableBlocks | ❌ | Article-style introduction with rich content |
| `image` | image | ❌ | Hero image with hotspot |
| `heroVideo` | videoEmbed | ❌ | Featured video |
| `ingredients` | array[string] | ✅ | List of ingredients |
| `instructions` | portableBlocks | ✅ | Step-by-step instructions with rich content |
| `gallery` | array[imageWithCaption] | ❌ | Additional images |
| `servings` | number | ❌ | Number of servings |
| `recipeYield` | string | ❌ | Yield description |
| `prepTime` | string | ❌ | ISO8601 format (e.g., PT15M) |
| `cookTime` | string | ❌ | ISO8601 format (e.g., PT30M) |
| `totalTime` | string | ❌ | ISO8601 format (e.g., PT45M) |
| `cuisine` | string | ❌ | Cuisine type |
| `pairingSake` | array[reference] | ❌ | References to sake documents |
| `author` | reference | ❌ | Reference to author document |
| `tags` | array[reference] | ❌ | References to tag documents |
| `datePublished` | datetime | ✅ | Publication date |
| `lastModified` | datetime | ❌ | Last update timestamp |
| `seo` | seo | ❌ | SEO metadata object |

**Preview Configuration:**
- Title: `title`
- Media: `image`
- Subtitle: Shows author name if present

**Time Format Note:** Use ISO8601 duration format for time fields (PT15M = 15 minutes, PT1H30M = 1 hour 30 minutes)

---

### 5. Blog Post (`blogPost`)
**Purpose:** Editorial content with flexible section-based structure

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Blog post title |
| `slug` | slug | ✅ | URL slug (auto-generated, max 96 chars) |
| `intro` | text | ❌ | Lead-in text |
| `summary` | string | ❌ | SEO summary (~150 chars) |
| `heroImage` | image | ❌ | Main image with alt text and caption fields |
| `author` | reference | ❌ | Reference to author document |
| `sections` | array[section] | ❌ | Dynamic content sections (see below) |
| `conclusion` | array[block] | ❌ | Closing content |
| `metaTitle` | string | ❌ | SEO title (max 70 chars) |
| `metaDescription` | string | ❌ | SEO description (max 160 chars) |

**Section Object Structure:**
Each section in the `sections` array contains:
- `heading` (string): Section title
- `body` (array): Mixed content (blocks, imageWithCaption, videoEmbed)
- `bullets` (array[string]): Bullet point list
- `priceRange` (string): Price information
- `sectionPhoto` (image): Section-specific image with alt/caption

**Preview Configuration:**
- Title: `title`
- Subtitle: Shows author name if present
- Media: `heroImage`

## Object Schemas (Reusable Components)

### 1. Portable Blocks (`portableBlocks`)
**Purpose:** Rich text content with embedded media

**Structure:**
- Array of:
  - `block`: Standard rich text blocks
  - `imageWithCaption`: Embedded images
  - `videoEmbed`: Embedded videos

---

### 2. Image with Caption (`imageWithCaption`)
**Purpose:** Image with metadata

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image` | image | ✅ | Image with hotspot support |
| `alt` | string | ✅ | Accessibility text |
| `caption` | string | ❌ | Image caption |
| `credit` | string | ❌ | Photo credit |

---

### 3. Video Embed (`videoEmbed`)
**Purpose:** Flexible video content (URL or file)

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `kind` | string | ✅ | 'url' or 'file' |
| `url` | url | ❌* | Video URL (required if kind='url') |
| `file` | file | ❌* | Video file (required if kind='file') |
| `poster` | image | ❌ | Preview image |
| `caption` | string | ❌ | Video caption |
| `transcript` | text | ❌ | Accessibility transcript |

**Conditional Display:** Fields show/hide based on `kind` selection

---

### 4. SEO (`seo`)
**Purpose:** Search engine optimization metadata

**Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `metaTitle` | string | ❌ | Page title (max 70 chars) |
| `metaDescription` | text | ❌ | Page description (max 160 chars) |
| `ogImage` | image | ❌ | Open Graph social sharing image |

## Mobile App Integration Guidelines

### API Considerations

1. **Field Types Mapping:**
   - `string` → String
   - `text` → String (multiline)
   - `number` → Integer/Float
   - `datetime` → ISO8601 DateTime
   - `slug` → String (URL-safe)
   - `image` → Object with URL and dimensions
   - `file` → Object with URL and metadata
   - `reference` → ID string (requires expansion)
   - `array` → Array/List

2. **Image Handling:**
   - All images support hotspot for smart cropping
   - Request specific dimensions using Sanity's image transformation API
   - Example: `?w=400&h=300&fit=crop&crop=focalpoint`

3. **Reference Expansion:**
   - References need to be expanded in GROQ queries
   - Example: `*[_type == "recipe"]{..., author->, tags[]->}`

4. **Rich Text (Portable Text):**
   - `portableBlocks` and `block` fields return Portable Text format
   - Requires custom serializer for native rendering
   - Consider using `@portabletext/react` or similar libraries

### GROQ Query Examples

**Fetch all recipes with expanded references:**
```groq
*[_type == "recipe"]{
  _id,
  title,
  slug,
  summary,
  image,
  ingredients,
  "author": author->{name, avatar},
  "pairingSake": pairingSake[]->{name, brewery, image},
  "tags": tags[]->{title, slug}
}
```

**Fetch sake products with external IDs:**
```groq
*[_type == "sake" && defined(externalId)]{
  _id,
  name,
  externalId,
  brewery,
  image
}
```

**Fetch blog posts with sections:**
```groq
*[_type == "blogPost"]{
  _id,
  title,
  slug,
  intro,
  heroImage,
  "author": author->{name},
  sections[]{
    heading,
    body,
    bullets,
    priceRange,
    sectionPhoto
  }
}
```

### Data Validation Notes

1. **Required Fields:** Ensure mobile app handles missing optional fields gracefully
2. **Time Formats:** Parse ISO8601 durations (PT15M) to user-friendly format
3. **Slug Generation:** Slugs are auto-generated but can be manually edited
4. **Character Limits:** Respect warning limits for SEO fields
5. **Media Files:** Implement proper caching for images and videos

### Sync Considerations

1. **External IDs:** Use `sake.externalId` for product sync with OneSip database
2. **Timestamps:** Track `lastModified` for incremental updates
3. **References:** Cache referenced documents to minimize API calls
4. **Preview Data:** Use preview configurations for list views

## Content Relationships

```
Author ←──────┐
              │
Tag ←─────────┼── Recipe
              │     ├── pairingSake → Sake
              │     └── seo → SEO Object
              │
              └── BlogPost
                    └── sections → Section Objects
```

## Best Practices for Mobile Implementation

1. **Caching Strategy:**
   - Cache author and tag documents (rarely change)
   - Implement TTL for recipe and blog content
   - Store images locally with proper cache invalidation

2. **Performance:**
   - Use projections to fetch only needed fields
   - Implement pagination for list views
   - Lazy load images and videos

3. **Offline Support:**
   - Store essential content locally
   - Queue content updates for sync
   - Handle reference resolution offline

4. **Error Handling:**
   - Validate required fields before display
   - Provide fallbacks for missing optional content
   - Handle network failures gracefully

## Version Control & Migration

- Schema changes should be backwards compatible
- Test migrations in development environment
- Document breaking changes in changelog
- Coordinate schema updates with mobile app releases

---

*This documentation reflects the current schema structure. For API access and authentication details, refer to the Sanity project settings.*