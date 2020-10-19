This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Я використав Redux тільки для того щоб зберегти стейт в сторі, але ніяк не використовував його після цього, тому що аплікація дуже проста і дані прогружаються тільки при першому відкритті сторінки, а для цього я використав метод Next.js getServerSideProps, щоб в соурс коді сторінки були прогружені ці дані і пошукові роботи могли їх бачити(одна з прични використання SSR).
