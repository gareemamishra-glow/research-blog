# How to publish your post on Research Blog

## Who can submit?
Anyone. You don't need to be a team member. Just a GitHub account.

## Step-by-step guide

### 1. Fork this repo
Click "Fork" at https://github.com/gareemamishra-glow/research-blog

### 2. Clone your fork
```bash
git clone https://github.com/YOUR-USERNAME/research-blog
cd research-blog
```

### 3. Create a branch
```bash
git checkout -b post/your-article-title
```

### 4. Create your post file
Create a new file at:
```
content/posts/YYYY-MM-DD-your-article-title.md
```
Example: `content/posts/2024-03-15-transformer-architecture-explained.md`

### 5. Use this frontmatter template
Copy and fill this at the top of your file:
```yaml
---
title: "Your Post Title Here"
date: 2024-03-15
author: "Your Full Name"
authorBio: "One sentence about you — your role, research area, or affiliation"
authorGitHub: "your-github-username"
tags: ["research", "machine-learning"]
description: "One sentence summary shown in post listings"
canonical_url: ""
draft: false
---
```

### 6. Write your post
Write your article in Markdown below the frontmatter.
- Minimum 400 words
- Use triple backticks for code blocks with language: ```python
- Place images in static/images/ and reference as ![alt](/images/filename.png)
- Use ## for section headings

### 7. Preview locally (optional but recommended)
```bash
brew install hugo        # Mac
hugo server -D           # starts at localhost:1313
```

### 8. Submit your post
```bash
git add content/posts/your-file.md
git commit -m "post: your article title"
git push origin post/your-article-title
```
Then go to your fork on GitHub and click "Compare & pull request".

## What happens next?
- A reviewer is automatically assigned
- The build is checked automatically
- A reviewer reads your post and either approves or requests changes
- Once approved and merged, your post is live within 2 minutes at https://gareemamishra-glow.github.io/research-blog/

## Questions?
Open an issue at https://github.com/gareemamishra-glow/research-blog/issues
