export const personalInfo = {
  name: "Nishant Neupane",
  role: "Data Analyst",
  subtitles: ["Data Analyst", "Python Developer", "AI/ML Enthusiast"],
  tagline: "Turning Complex Data into High-Impact Business Decisions",
  summary:
    "Data Analyst with 4+ years of experience turning operational, financial, and business data into actionable insights using SQL, Python, Power BI, Tableau, and Excel. Skilled in automated reporting pipelines, KPI variance analysis, and predictive modeling that drive measurable ROI across cross-functional teams.",
  location: "Lindsay, Ontario, Canada",
  openTo: "Open to Relocation",
  workAuth: "Canadian Work Permit (Authorized to work in Canada)",
  email: "nishant.neupane@myjobfolio.com",
  linkedin: "https://www.linkedin.com/in/nishant-neupane-549650258/",
  github: "https://github.com/npn-nishant",
  profileImage: "/nishant-portrait.jpg",
};

export const heroStats = [
  { value: "4+", label: "Years Experience", detail: "BI, SQL & Python Analytics" },
  { value: "25+", label: "Business KPIs", detail: "Automated across Lyft & Twilio" },
  { value: "75%", label: "Time Saved", detail: "6h to <90m via Automated ETL" },
  { value: "18%", label: "Quality Gain", detail: "Discrepancy Reduction Rate" },
];

export const experience = [
  {
    company: "Lyft",
    role: "Data Analyst",
    location: "Toronto, Ontario, Canada",
    period: "02/2025 – Present",
    type: "Full-time",
    accent: "from-pink-500 to-rose-500",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    summary:
      "Leading operational analytics, KPI monitoring pipelines, and executive dashboards for ride-share operations across Canadian markets.",
    highlights: [
      {
        metric: "25+ KPIs",
        text: "Analyzed operational and business data using SQL and Python, identifying performance trends, anomalies, and data quality gaps across 25+ recurring KPIs.",
      },
      {
        metric: "75% Speedup",
        text: "Automated recurring reporting and data preparation using Python, SQL, and Power Query, cutting manual reporting time from 6 hours to under 90 minutes.",
      },
      {
        metric: "18% Discrepancy Drop",
        text: "Executed systematic data validation and quality checks across reporting datasets, reducing stakeholder-facing reporting discrepancies by 18%.",
      },
      {
        metric: "Executive Dashboards",
        text: "Built and maintained Power BI and Tableau dashboards tracking operational performance, providing business stakeholders timely visibility into exceptions.",
      },
      {
        metric: "Root-Cause Analysis",
        text: "Conducted trend, variance, and root-cause analysis on performance gaps, flagging 3 key operational drivers per weekly review to guide corrective actions.",
      },
      {
        metric: "Cross-Functional",
        text: "Collaborated with an 8-member cross-functional team of engineering, product, and business stakeholders to translate business requirements into analytical solutions.",
      },
    ],
    tech: ["SQL", "Python", "Power BI", "Tableau", "Power Query", "DAX", "Data Validation", "KPI Tracking"],
  },
  {
    company: "Twilio",
    role: "Python Developer",
    location: "Bangalore, India",
    period: "03/2020 – 04/2023",
    type: "Full-time",
    accent: "from-red-500 to-orange-500",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    summary:
      "Architected backend microservices, real-time data pipelines, and optimized database query engines supporting scalable communication workflows.",
    highlights: [
      {
        metric: "20% Latency Reduction",
        text: "Optimized backend processing pipelines and database queries, achieving a 20% latency reduction across frequently invoked analytical queries.",
      },
      {
        metric: "10+ Pipelines",
        text: "Built robust data pipelines and Elasticsearch-based querying solutions supporting 10+ critical application workflows and downstream analytics.",
      },
      {
        metric: "15% Fewer Bottlenecks",
        text: "Improved system reliability through query indexing, data structure refactoring, and proactive bottleneck elimination, decreasing processing failures by 15%.",
      },
      {
        metric: "REST APIs & Services",
        text: "Engineered scalable Python backend services and REST APIs in an Agile/Scrum environment with 8+ engineers and product managers.",
      },
    ],
    tech: ["Python", "FastAPI / Django", "Elasticsearch", "PostgreSQL", "REST APIs", "Data Pipelines", "Agile/Scrum"],
  },
];

export const projects = [
  {
    id: "marketing-kpi-dashboard",
    title: "Marketing Performance & Executive KPI Dashboard",
    category: "Business Intelligence",
    tagline: "Interactive Power BI & DAX analytics tracking $1.2M+ in marketing spend and conversion funnels",
    period: "2024",
    impact: "Provided executive visibility across 25+ marketing KPIs, identifying $45K in underperforming ad spend.",
    tools: ["Power BI", "DAX", "SQL", "Data Modeling", "Power Query", "Excel"],
    overview:
      "Designed and deployed an end-to-end Power BI dashboard integrating Google Ads, Meta Ads, and CRM data. Built custom DAX time-intelligence measures (MoM, YoY, Rolling 30-Day CAC, ROAS) to empower marketing leadership to reallocate budget dynamically.",
    keyFeatures: [
      "Dynamic DAX measures for Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Conversion Velocity.",
      "Multi-source star schema data model joining transaction logs with ad platform spend tables.",
      "Interactive drill-through capabilities from high-level channel ROI down to specific campaign ad sets.",
      "Automated refresh scheduled via Power BI Service gateway.",
    ],
    codeSnippet: {
      lang: "DAX",
      title: "Custom Time-Intelligence ROAS Calculation",
      code: `ROAS_Variance_YoY% = 
VAR CurrentROAS = [Total Revenue] / [Total Ad Spend]
VAR PriorYearROAS = CALCULATE(
    [Total Revenue] / [Total Ad Spend],
    SAMEPERIODLASTYEAR('Calendar'[Date])
)
RETURN 
    DIVIDE(CurrentROAS - PriorYearROAS, PriorYearROAS, 0)`,
    },
    metrics: [
      { label: "ROAS Gain", val: "+22%" },
      { label: "Reporting Cycle", val: "Daily Auto" },
      { label: "Ad Spend Tracked", val: "$1.2M+" },
    ],
  },
  {
    id: "customer-churn-analytics",
    title: "Customer Churn Prediction & Retention Analytics",
    category: "Machine Learning & AI",
    tagline: "End-to-end churn prediction pipeline using Python, Scikit-learn & interactive Power BI dashboards",
    period: "2024",
    impact: "Identified top 5 churn risk factors with 84% ROC-AUC, enabling customer success to proactively retain at-risk accounts.",
    tools: ["Python", "Scikit-Learn", "Pandas", "Power BI", "Statistical Modeling", "XGBoost"],
    overview:
      "Built a machine learning analytics pipeline to predict customer churn based on behavioral telemetry, subscription tenure, and support ticket frequency. Outputs were pushed to a Power BI dashboard with risk-scoring tiers.",
    keyFeatures: [
      "Rigorous exploratory data analysis (EDA), handling imbalanced classes via SMOTE and stratified cross-validation.",
      "Feature importance evaluation using SHAP values to identify key churn drivers (e.g. usage drop in weeks 3-4).",
      "Executive Power BI dashboard translating probabilities into actionable Tier 1 / Tier 2 outreach lists.",
    ],
    codeSnippet: {
      lang: "Python",
      title: "Model Pipeline & Feature Importance Analysis",
      code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from xgboost import XGBClassifier
import shap

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', XGBClassifier(n_estimators=200, max_depth=4, learning_rate=0.05, random_state=42))
])

pipeline.fit(X_train, y_train)
explainer = shap.TreeExplainer(pipeline.named_steps['model'])
shap_values = explainer.shap_values(X_test)`,
    },
    metrics: [
      { label: "ROC-AUC Score", val: "0.86" },
      { label: "Recall Rate", val: "82%" },
      { label: "Retention Impact", val: "+14%" },
    ],
  },
  {
    id: "fraud-detection-system",
    title: "Real-Time Financial Fraud Detection Engine",
    category: "Machine Learning & AI",
    tagline: "Anomaly detection and transaction classification workflow using precision-recall optimized models",
    period: "2023 - 2024",
    impact: "Flagged fraudulent transactions with 91% precision, minimizing false positive friction for legitimate users.",
    tools: ["Python", "Scikit-Learn", "NumPy", "Statistical Analysis", "Data Preprocessing", "Financial Analytics"],
    overview:
      "Developed a fraud detection classifier analyzing millions of anonymized financial transactions. Addressed extreme class imbalance (0.17% fraud rate) by prioritizing Precision-Recall AUC over standard accuracy.",
    keyFeatures: [
      "Implemented Isolation Forests and tuned Random Forests for anomalous transaction identification.",
      "Cost-sensitive threshold tuning to balance fraud losses against customer support overhead.",
      "Automated data cleaning and validation scripts catching schema drift and out-of-bound numerical inputs.",
    ],
    codeSnippet: {
      lang: "Python",
      title: "Cost-Sensitive Threshold Tuning",
      code: `from sklearn.metrics import precision_recall_curve
import numpy as np

precisions, recalls, thresholds = precision_recall_curve(y_test, y_pred_prob)
# Select threshold optimizing F2-score (prioritizing recall while retaining >=85% precision)
f2_scores = (5 * precisions * recalls) / (4 * precisions + recalls + 1e-10)
optimal_idx = np.argmax(f2_scores)
optimal_threshold = thresholds[optimal_idx]`,
    },
    metrics: [
      { label: "Precision", val: "91.2%" },
      { label: "Recall", val: "88.4%" },
      { label: "Latency", val: "<45ms" },
    ],
  },
  {
    id: "chat-with-pdf-rag",
    title: "Chat with PDF (Enterprise RAG System)",
    category: "GenAI & NLP",
    tagline: "Document Q&A system leveraging Gemini embeddings, FAISS vector index, and Streamlit UI",
    period: "2024",
    impact: "Reduced internal policy and technical documentation search time by 80% for research teams.",
    tools: ["Python", "FAISS", "Gemini API", "Streamlit", "LangChain", "NLP"],
    overview:
      "Created an interactive conversational search system allowing users to upload dense multi-page PDFs (financial reports, research papers, compliance contracts) and query them using natural language with source-grounded citations.",
    keyFeatures: [
      "Semantic chunking with overlapping windows to preserve contextual boundaries.",
      "Vector similarity retrieval utilizing FAISS with cosine similarity distance ranking.",
      "Grounded prompt engineering with source page citations preventing hallucinations.",
    ],
    codeSnippet: {
      lang: "Python",
      title: "FAISS Vector Search & Retrieval",
      code: `import faiss
from langchain_community.vectorstores import FAISS

def build_retriever(chunks, embeddings_model):
    vectorstore = FAISS.from_documents(chunks, embeddings_model)
    return vectorstore.as_retriever(
        search_type="similarity_score_threshold",
        search_kwargs={"k": 4, "score_threshold": 0.75}
    )`,
    },
    metrics: [
      { label: "Search Speed", val: "<1.2s" },
      { label: "Citation Accuracy", val: "98%" },
      { label: "Max Doc Size", val: "100+ pgs" },
    ],
  },
  {
    id: "xray-pneumonia-classification",
    title: "Chest X-Ray Pneumonia Classifier (Deep Learning)",
    category: "Machine Learning & AI",
    tagline: "Convolutional Neural Network (CNN) diagnosing pediatric pneumonia from radiological scans",
    period: "2023",
    impact: "Achieved 92.4% validation sensitivity on radiological scans using transfer learning with data augmentation.",
    tools: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Data Augmentation"],
    overview:
      "Engineered an automated diagnostic assistance model utilizing convolutional neural networks trained on 5,800+ chest X-ray scans. Applied heavy data augmentation and transfer learning to prevent overfitting.",
    keyFeatures: [
      "Transfer learning backbone using ResNet50 with custom classification head.",
      "Class-weighted loss calculation to overcome medical dataset diagnostic imbalance.",
      "Grad-CAM visual activation heatmaps to interpret network attention zones for medical auditability.",
    ],
    codeSnippet: {
      lang: "Python",
      title: "ResNet50 Fine-Tuning with Class Weights",
      code: `import tensorflow as tf
from tensorflow.keras.applications import ResNet50

base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
base_model.trainable = False

model = tf.keras.Sequential([
    base_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(1, activation='sigmoid')
])`,
    },
    metrics: [
      { label: "Sensitivity", val: "92.4%" },
      { label: "Accuracy", val: "91.8%" },
      { label: "Image Res", val: "224x224" },
    ],
  },
  {
    id: "smartpenny-financial-app",
    title: "SmartPenny Financial Literacy & Analytics Platform",
    category: "Data Engineering & APIs",
    tagline: "Django REST Framework backend with JWT authentication and budget analytics for families",
    period: "2023",
    impact: "Built full CRUD financial management engine with automated categorization and variance tracking.",
    tools: ["Django", "Django REST Framework", "Python", "JWT Auth", "PostgreSQL", "Docker"],
    overview:
      "Designed an extensible web backend supporting gamified financial education and expense tracking. Features secure token authentication, automated recurring budget calculations, and real-time ledger auditing.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) separating parent supervision and dependent allowances.",
      "Relational schema design with normalized tables, indexed foreign keys, and atomic transactions.",
      "Integrated analytics endpoints calculating monthly burn rate and category distribution.",
    ],
    codeSnippet: {
      lang: "Python",
      title: "Atomic Ledger Transaction Viewset",
      code: `from rest_framework import viewsets, permissions
from django.db import transaction

class TransactionViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    
    @transaction.atomic
    def perform_create(self, serializer):
        instance = serializer.save(user=self.request.user)
        # Recalculate account balance atomically
        account = instance.account
        account.balance += instance.amount if instance.is_credit else -instance.amount
        account.save()`,
    },
    metrics: [
      { label: "Test Coverage", val: "94%" },
      { label: "Avg Latency", val: "38ms" },
      { label: "API Endpoints", val: "18+" },
    ],
  },
];

export const skillsByCategory = [
  {
    category: "Data Analytics & BI",
    description: "Turning raw operational numbers into executive visibility and timely KPI monitoring",
    skills: [
      { name: "Power BI", level: "Expert", icon: "BarChart3", highlight: "DAX, Power Query, Star Schema" },
      { name: "Tableau", level: "Advanced", icon: "PieChart", highlight: "LOD Expressions, Interactive Dashboards" },
      { name: "Advanced Excel", level: "Expert", icon: "FileSpreadsheet", highlight: "VBA, Macros, Index/Match, Pivot" },
      { name: "KPI & Variance Analysis", level: "Expert", icon: "TrendingUp", highlight: "Trend Modeling, Root Cause" },
      { name: "Data Storytelling", level: "Expert", icon: "Presentation", highlight: "Executive Reporting, Decks" },
      { name: "Ad Hoc Analysis", level: "Advanced", icon: "Search", highlight: "Rapid Exploratory Data Auditing" },
    ],
  },
  {
    category: "SQL & Data Management",
    description: "Extracting, transforming, structuring, and ensuring integrity across enterprise databases",
    skills: [
      { name: "SQL (PostgreSQL, MySQL)", level: "Expert", icon: "Database", highlight: "Complex CTEs, Window Functions, Indexing" },
      { name: "Data Modeling", level: "Advanced", icon: "Network", highlight: "Star & Snowflake Schema Design" },
      { name: "ETL / ELT Pipelines", level: "Advanced", icon: "GitFork", highlight: "Automated Data Ingestion & Transformation" },
      { name: "Data Quality & Cleansing", level: "Expert", icon: "CheckCircle2", highlight: "Validation Frameworks, Schema Audits" },
      { name: "dbt (Data Build Tool)", level: "Intermediate", icon: "Layers", highlight: "Transformation Models, Jinja SQL" },
      { name: "Elasticsearch", level: "Advanced", icon: "Cpu", highlight: "Full-text Search, Aggregations" },
    ],
  },
  {
    category: "Programming & Machine Learning",
    description: "Statistical modeling, automated scripts, predictive analytics, and RESTful architectures",
    skills: [
      { name: "Python", level: "Expert", icon: "Terminal", highlight: "Pandas, NumPy, Scripting, Automation" },
      { name: "Scikit-Learn", level: "Advanced", icon: "Binary", highlight: "Classification, Regression, Clustering" },
      { name: "TensorFlow / CNNs", level: "Intermediate", icon: "Boxes", highlight: "Deep Learning, Computer Vision" },
      { name: "Statistical Modeling", level: "Advanced", icon: "Calculator", highlight: "Hypothesis Testing, A/B Testing" },
      { name: "FastAPI / Django", level: "Advanced", icon: "Server", highlight: "REST APIs, Backend Microservices" },
      { name: "Git / GitHub", level: "Advanced", icon: "GitBranch", highlight: "Version Control, CI/CD, Workflows" },
    ],
  },
  {
    category: "Cloud & Enterprise Platforms",
    description: "Cloud infrastructure, data lakes, and enterprise financial platforms",
    skills: [
      { name: "Microsoft Azure", level: "Intermediate", icon: "Cloud", highlight: "Azure Blob, Synapse, SQL DB" },
      { name: "Google Cloud (GCP)", level: "Intermediate", icon: "CloudCog", highlight: "BigQuery, Cloud Storage" },
      { name: "Databricks", level: "Intermediate", icon: "Sparkles", highlight: "Lakehouse, Spark Analytics" },
      { name: "Financial Analytics", level: "Advanced", icon: "DollarSign", highlight: "P&L Analysis, Budgeting, Forecasting" },
      { name: "SAP & Oracle Hyperion", level: "Intermediate", icon: "Building2", highlight: "Enterprise Financial Reporting" },
      { name: "Bloomberg Terminal", level: "Working Knowledge", icon: "LineChart", highlight: "Market Data & Portfolio Tracking" },
    ],
  },
];

export const education = [
  {
    institution: "Lambton College",
    country: "Canada",
    degree: "Postgraduate Diploma in Artificial Intelligence & Machine Learning",
    period: "05/2023 – 01/2025",
    details: "Specialized in predictive analytics, deep neural networks, computer vision, and applied ML pipelines.",
    badge: "Postgraduate Diploma",
  },
  {
    institution: "Nagarjuna College of Engineering",
    country: "India",
    degree: "Bachelor of Engineering in Information Science",
    period: "09/2012 – 08/2016",
    details: "Core foundation in algorithms, relational database design, software engineering, and data structures.",
    badge: "Bachelor of Engineering",
  },
];

export const certifications = [
  { name: "PwC Power BI Job Simulation", issuer: "Forage", date: "2024", badge: "Business Intelligence" },
  { name: "Python & Machine Learning for Financial Analysis", issuer: "Udemy", date: "2024", badge: "Financial ML" },
  { name: "AWS Fundamentals", issuer: "Udacity", date: "2023", badge: "Cloud Architecture" },
  { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", date: "2023", badge: "Analytics Core" },
];
