# TODO - Auth flow + dashboard routing fix

## Plan steps

- [x] Update CLIENT Login.jsx with loading/error handling + toast/message on invalid credentials.

- [x] Update CLIENT AuthContext.jsx to keep `user` + `rtc_token` in sync and persist on refresh.

- [x] Update CLIENT ProtectedRoute in routes/AppRoutes.jsx so it relies on token/user persistence reliably.

- [x] Update CLIENT Dashboard.jsx to render welcome username safely and include Create/Join/Logout.

- [x] Ensure CLIENT api.js uses correct baseURL/proxy and sends Authorization header.

- [x] (If needed) Add SERVER auth profile/token validation alignment.

## Followup

- [ ] Restart frontend + backend.
- [ ] Test login → redirect to /dashboard.
- [ ] Test protected routes after refresh.
