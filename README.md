This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of SSR 

Open [http://localhost:3000/ssg](http://localhost:3000/ssg) with your browser to see the result of SSG.

+++In the dev mode (localhost) 2 page alway display time in realtime eg (today at 3:36 PM)
But in the live app, only SSR page display time in realtime 

The SSR page always matches the current time because the getServerSideProps function is always called when the page is refreshed.
Whereas getStaticProps on the SSG page is called only when the page is loaded (1 time when we loaded this app in first time)

