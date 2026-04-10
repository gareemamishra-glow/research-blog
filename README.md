# Research Blog

An open platform for research papers, technical articles, and engineering insights.

**Live site:** https://gareemamishra-glow.github.io/research-blog/

---

## Submit your post

Anyone with a GitHub account can publish on this blog. Posts are submitted as Pull Requests and reviewed before going live.

**Quick steps:**
1. Fork this repo
2. Create `content/posts/YYYY-MM-DD-your-title.md`
3. Fill in the frontmatter (title, author, tags, description)
4. Write your article in Markdown
5. Open a Pull Request

**Full guide:** [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## Post frontmatter template

```yaml
---
title: "Your Post Title"
date: 2024-03-15
author: "Your Full Name"
authorBio: "One sentence about you"
authorGitHub: "your-github-username"
tags: ["research", "engineering"]
description: "One sentence summary"
canonical_url: ""
draft: false
---
```

---

## Preview locally

```bash
git clone https://github.com/gareemamishra-glow/research-blog
cd research-blog
brew install hugo        # Mac  |  choco install hugo-extended  # Windows
hugo server -D           # visit http://localhost:1313
```

---

## Review process

- Every PR is automatically assigned to a reviewer
- Build is checked automatically — broken posts are flagged before review
- Reviewer approves or requests edits
- On merge, post goes live within 2 minutes

---

## Team roles

| Role | Can do |
|------|--------|
| Admin | Manage repo, add reviewers, merge anything |
| Reviewer | Approve and merge post PRs |
| Contributor | Submit posts via Pull Request (anyone) |

To become a reviewer, open an issue and introduce yourself.

---

## Questions?

Open an issue: https://github.com/gareemamishra-glow/research-blog/issues
