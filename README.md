# Nishant Neupane — Data Analyst Portfolio

A high-performance, modern Data Analyst portfolio built with **React 19**, **Vite**, and **Tailwind CSS**. Optimized for instant edge deployment on **Cloudflare Pages**.

## 🚀 Live Demo & Features
- **Live Interactive Hero Dashboard**: Real-time simulated Power BI marketing dashboard with 6M / 30D time toggles, interactive SVG trendlines with tooltips, channel acquisition progress, and revenue segmentation donut chart.
- **Concrete Business ROI Focus**: Quantified impact callouts from Lyft (6h → 90m reporting automation, 18% discrepancy drop) and Twilio (20% query latency optimization).
- **Interactive Project Case Studies & Code**:
  - Marketing Performance & KPI Dashboard (Power BI / DAX Time Intelligence)
  - Customer Churn Prediction & Retention Analytics (Python / Scikit-learn / XGBoost / SHAP)
  - Real-Time Financial Fraud Detection Engine (Precision/Recall Optimization)
  - Chat with PDF Enterprise RAG System (Gemini API / FAISS / Streamlit)
  - Chest X-Ray Pneumonia Deep Learning Classifier (TensorFlow / CNN)
  - SmartPenny Financial Literacy Platform (Django REST Framework / PostgreSQL)
- **Categorized Technical Arsenal**: 10 core highlight tools + searchable skills taxonomy across BI, SQL, Python/ML, and Enterprise Cloud platforms.
- **Interactive Resume Modal**: One-click preview with print-to-PDF and copyable contact info.
- **One-Click Contact Integration**: Instant copy toast for `nishant.neupane@myjobfolio.com` and LinkedIn profile links.

---

## 🛠️ Local Development

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ☁️ Deploying to Cloudflare Pages (Free & Instant)

### Option 1: Automatic Continuous Deployment with GitHub (Recommended)
1. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Nishant Neupane Portfolio"
   git branch -M main
   git remote add origin https://github.com/npn-nishant/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. Open your [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. In the left sidebar, navigate to **Compute (Workers) > Workers & Pages** (or **Pages**).
4. Click **Create Application** > **Pages** > **Connect to Git**.
5. Select your GitHub repository.
6. Configure the build settings:
   - **Framework Preset**: `Vite`
   - **Root directory**: `frontend`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
7. Click **Save and Deploy**. Cloudflare will build and publish your site at `https://<your-project>.pages.dev` in ~30 seconds with global CDN and automatic HTTPS!

---

### Option 2: Direct CLI Deployment via Wrangler
If you prefer deploying directly from your computer terminal without connecting Git:
```bash
cd frontend
npm run build
npx wrangler pages deploy dist --project-name=nishant-portfolio
```
1. You will be prompted to log in to Cloudflare in your browser once.
2. Cloudflare will upload your build assets and immediately give you a live `.pages.dev` link!

---

### Custom Domain (e.g., `nishantneupane.com`)
1. In Cloudflare Pages, go to **Custom domains** > **Set up a custom domain**.
2. Enter your domain name and follow the DNS verification steps. Cloudflare handles automatic SSL certificates.
