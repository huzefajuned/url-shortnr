```markdown
# URL Shortnr 🚀

A full-stack web application to create and manage shortened URLs.  
Built with **Next.js**, **Tailwind CSS**, **MongoDB**, and **Firebase**.  

👉 Live Demo: [urlshortnr.vercel.app](https://urlshortnr.vercel.app)

---

## ⚡ Features

- 🔗 **URL Shortening** – Generate short, shareable links.
- 📌 **Redirection** – Automatically redirect to the original URL.
- 📱 **Responsive UI** – Works seamlessly across devices.
- 🔒 **Environment Config** – Securely manage app credentials.

---

## 🛠 Tech Stack

- **Next.js** – SSR, static generation & API routes.
- **Tailwind CSS** – Utility-first styling for modern UI.
- **MongoDB (Atlas)** – Database for storing and managing URLs.
- **Firebase** – Authentication & analytics.

---

## 📂 Project Structure

```

url-shortnr/
├── app/               # Next.js app directory
├── lib/               # Utility functions
├── public/            # Static assets
├── components.json    # Component configuration
├── .env.sample        # Example environment variables
├── package.json       # Dependencies
├── tailwind.config.ts # Tailwind CSS config
└── README.md          # Documentation

````

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/huzefajuned/url-shortnr.git
cd url-shortnr
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the project root and copy values from `.env.sample`:

```bash
# MongoDB URL
NEXT_PUBLIC_DB_URL=your_mongodb_connection_url

# Local or production host
NEXT_PUBLIC_HOST_URL=http://localhost:3000
# NEXT_PUBLIC_HOST_URL=https://urlshortnr.vercel.app/

# Firebase Config
NEXT_PUBLIC_apiKey=your_firebase_api_key
NEXT_PUBLIC_authDomain=your_project.firebaseapp.com
NEXT_PUBLIC_projectId=your_project_id
NEXT_PUBLIC_storageBucket=your_project.appspot.com
NEXT_PUBLIC_messagingSenderId=your_sender_id
NEXT_PUBLIC_appId=your_app_id
NEXT_PUBLIC_measurementId=your_measurement_id
```

⚠️ **Note:** Never commit your real `.env` file to GitHub.

---

## 🗄 Setting up MongoDB

1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a **cluster** and get your connection string.
3. Replace it in `.env`:

```
NEXT_PUBLIC_DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net
```

4. Make sure your database has a collection for storing URLs.

---

## ▶️ Running Locally

```bash
npm run dev
# or
yarn dev
```

The app will be available at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deploy

### Build for production:

```bash
npm run build
npm start
```

### Deploy on Vercel:

1. Push your project to GitHub.
2. Import it on [Vercel](https://vercel.com).
3. Add the same `.env` values in Vercel’s **Environment Variables** section.
4. Deploy 🎉

---

## 🤝 Contributing

1. Fork the repo.
2. Create your feature branch:

   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit changes:

   ```bash
   git commit -m "Add my feature"
   ```
4. Push branch:

   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the **MIT License**.

---

👨‍💻 Developed by [Huzefa Bin Juned](https://github.com/huzefajuned)

```