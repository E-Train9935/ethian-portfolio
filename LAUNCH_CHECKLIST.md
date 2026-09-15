# Launch checklist

## Required before public launch

- [ ] Add `NEXT_PUBLIC_SITE_URL` after the Vercel project URL/domain is known.
- [ ] Add the real public contact email.
- [ ] Add the real LinkedIn profile URL.
- [x] GitHub profile points to `https://github.com/E-Train9935`.
- [x] RouteFlow deployed-app link verified; it currently opens the sign-in flow.
- [x] IntakeFlow deployment link included in the archive.
- [ ] Decide whether RouteFlow should get a recruiter-friendly guest/demo route before the portfolio is widely shared.
- [ ] Add repository links only for repos that are intentionally public and recruiter-ready.
- [ ] Add real project screenshots after the content/deployment pass.

## Local verification

Run:

```bash
npm install
npm run lint
npm run build
npm run start
```

Then verify:

- [ ] `/`
- [ ] `/projects/routeflow`
- [ ] `/projects/applyos`
- [ ] `/projects/financial-analysis-platform`
- [ ] mobile navigation
- [ ] reduced-motion mode
- [ ] WebGL disabled / fallback appearance
- [ ] RouteFlow external link
- [ ] IntakeFlow external link
- [ ] GitHub link
- [ ] email and LinkedIn after environment variables are added

## Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the `NEXT_PUBLIC_*` environment variables.
4. Deploy to a Vercel preview URL first.
5. Run the verification list above against the deployed URL.
6. Connect the custom domain only after the preview deployment is clean.
