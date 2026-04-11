# PaceRun Store

Landing page Angular don gian de gioi thieu cua hang giay running.

## Chay local

```bash
npm install
npm start
```

Mo `http://localhost:4200`.

## Build production

```bash
npm run build
```

Static output duoc tao trong `dist/running-store/browser`.

## Deploy len Vercel

### Cach 1: Deploy bang Git

1. Day project len GitHub, GitLab hoac Bitbucket.
2. Dang nhap Vercel va chon **Add New Project**.
3. Import repository `running-store`.
4. Vercel thuong se tu nhan dien Angular.
5. Neu can nhap tay:

```txt
Build Command: npm run build
Output Directory: dist/running-store/browser
```

6. Bam **Deploy**.

### Cach 2: Deploy bang Vercel CLI

1. Cai Vercel CLI:

```bash
npm i -g vercel
```

2. Dang nhap va tao preview deployment:

```bash
vercel
```

3. Day ban production:

```bash
vercel deploy --prod
```
