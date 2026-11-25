# Com Com Restaurant

Marketing and reservations website for **Com Com** — Vietnamese street food at 183–185 Battersea Park Road, London SW11 4LB.

Built as a Next.js App Router site in the style of [photarestaurants.com](https://www.photarestaurants.com/), with Com Com’s own address, hours, menu, and photos.

## Stack

- Next.js + TypeScript + Tailwind CSS
- Deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`
- Multi-step reservations API (`POST /api/bookings`) stored in Cloudflare KV (`BOOKINGS`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local Next.js development
- `npm run build` — Next.js production build
- `npm run preview` — OpenNext build + local Workers preview
- `npm run deploy` — OpenNext build + deploy to Cloudflare Workers
- `npm run lint` — ESLint

## Deploy

```bash
export CLOUDFLARE_API_TOKEN=...
npm run deploy
```

## Contact (restaurant)

- Phone: 020 7720 9928
- Email: comcomrestaurant@gmail.com
