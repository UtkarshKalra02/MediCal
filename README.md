<h1 align="center">MediCal 🩺</h1>

<div align="center">
A full-stack doctor-appointment booking app built with <b>Next.js</b> on the front-end and a <b>Strapi CMS</b> back-end. [oai_citation:0‡GitHub](https://github.com/UtkarshKalra02/MediCal)  
<a href="https://medi-cal-two.vercel.app" target="_blank"><b>Live demo →</b></a> [oai_citation:1‡GitHub](https://github.com/UtkarshKalra02/MediCal)
</div>

---

## ✨ Features
- **Search & discovery** – browse doctors by specialty, location, or name  
- **One-click booking** – real-time appointment creation & calendar view  
- **CMS-driven** – doctors, specialties, blogs, and FAQs are all editable in Strapi  
- **Auth & roles** – JWT-based auth with separate Patient / Doctor dashboards  
- **Responsive UI** – Tailwind CSS + shadcn/ui components for a clean, mobile-first layout  
- **Emails & notifications** – confirmation mails sent via Strapi email plugin  
- **Instant deployment** – Next.js front-end on Vercel, Strapi back-end can run locally or on any Docker-ready host


## 🏗️ Tech Stack
| Layer | Tech |
|-------|------|
| Front-end | Next.js 14 (App Router), React 18, Tailwind CSS, shadcn/ui |
| Back-end / CMS | Strapi v4, PostgreSQL (default) |
| Auth | Strapi Users & Permissions plugin (JWT) |
| Emails | Strapi Email plugin (nodemailer) |
| Deployment | Vercel (front-end) · Docker/Railway/Render (Strapi) |

## 🚀 Getting Started

### Prerequisites
- **Node.js ≥ 18**
- **pnpm / yarn / npm**
- **Docker** (recommended for Strapi) *or* local PostgreSQL

### 1 · Clone & install
```bash
git clone https://github.com/UtkarshKalra02/MediCal.git
cd MediCal
pnpm install          # or npm install / yarn
