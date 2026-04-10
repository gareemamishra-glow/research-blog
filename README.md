# Open MSTACK Research Blog

A platform for the MSTACK team to publish blogs and projects. Posts are reviewed before going live.

**Live site:** https://gareemamishra-glow.github.io/research-blog/

---

## How to publish a blog post

### 1. Clone the repo
```bash
git clone https://github.com/gareemamishra-glow/research-blog
cd research-blog
```

### 2. Create a branch
```bash
git checkout -b blog/your-post-title
```

### 3. Create your blog file
Create a folder and file at:
```
content/blog/your-post-title/index.md
```
Example:
```bash
mkdir -p content/blog/my-first-post
```

### 4. Add this template to your file
```markdown
---
title: "Your Blog Title"
date: 2026-04-10
description: "One sentence summary shown on the blog listing page."
tags: ["Research", "AI"]
---

Write your blog post here in Markdown.

## Introduction
Your intro paragraph...

## Section Two
More content...
```

### 5. Commit and push your branch
```bash
git add content/blog/your-post-title/
git commit -m "post: your blog title"
git push origin blog/your-post-title
```

### 6. Open a Pull Request
Go to https://github.com/gareemamishra-glow/research-blog

GitHub will show a **"Compare & pull request"** banner — click it and submit.

### 7. Wait for review
- Admin reviews your post
- Once approved and merged, post is live within **2 minutes**

---

## How to publish a project

### 1. Create your project file
```
content/projects/your-project-name.md
```

### 2. Use this template
```markdown
---
title: "Your Project Title"
date: 2026-04-10
status: "active"
tags: ["AI", "Research"]
description: "One line description shown on the projects page."
featured: true
---

## Overview
What is this project?

## Key Features
- Feature one
- Feature two
```

**Status options:** `active` · `in-progress` · `archived`

### 3. Commit and push on a branch
```bash
git checkout -b project/your-project-name
git add content/projects/your-project-name.md
git commit -m "project: your project title"
git push origin project/your-project-name
```

### 4. Open a Pull Request
Same as blog — go to the repo on GitHub, click **"Compare & pull request"** and submit for review.

---

## Preview locally before submitting

```bash
# Install Hugo (Mac)
curl -L "https://github.com/gohugoio/hugo/releases/download/v0.160.0/hugo_extended_0.160.0_darwin-universal.pkg" -o hugo.pkg
sudo installer -pkg hugo.pkg -target /

# Run local server
hugo server -D
# Visit http://localhost:1313
```

---

## Review process

| Step | What happens |
|------|-------------|
| You push a branch and open a PR | GitHub notifies the admin |
| Admin reviews your post or project | Approves or requests changes |
| PR is merged | Site auto-deploys in ~2 minutes |

---

## Team roles

| Role | Can do |
|------|--------|
| Admin | Merge PRs, manage repo, deploy |
| Team member | Clone repo, submit PRs with blogs/projects |

---

## Questions?

Open an issue: https://github.com/gareemamishra-glow/research-blog/issues
