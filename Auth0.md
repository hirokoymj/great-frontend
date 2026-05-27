# Auth0

- Getting Start (React) https://auth0.com/docs/quickstart/spa/react
- Auth0 dashboard: https://manage.auth0.com/dashboard/us/dev-
- Auth0 -> Applications -> My App
- Auth0 -> User Management -> Users
- Auth0 -> Branding -> Emial Templates

## Basics

1. What is Auth0 and what problem does it solve?
   Auth0 is a third-party authentication service. It handles login, signup, and user management so you don't have to build it from scratch.

2. What is the difference between Authentication and Authorization?
   Authentication verifies who you are (login). Authorization verifies what you can do (permissions).

3. What is OAuth 2.0 and how does Auth0 use it?
   OAuth 2.0 is a protocol for granting access to resources without sharing passwords. Auth0 uses it to issue access tokens after a user logs in.

4. What is OpenID Connect (OIDC) and how does it differ from OAuth 2.0?
   OIDC is built on top of OAuth 2.0 and adds identity — it issues an id_token (JWT) that contains user profile info. OAuth 2.0 alone only handles authorization, not identity.

## OAuth 2.0

Have you ever logged into a website using Google or Facebook, instead of creating a password? This is OAuth 2.0 in action.

OAuth 2.0 allows apps to access user data without sharing passwords. It involves four key players:

- **User** — you, trying to login
- **Client** — the app you are logging into
- **Authorization Server** — like Google or Facebook, verifying your identity
- **Resource Server** — where your protected data is stored

---

### Why is OAuth 2.0 secure?

The core reason is: **your password is never shared with the app you're logging into.**

Here's a concrete example — "Login with Google" on a third-party site:

```
1. You click "Login with Google" on App X
2. App X redirects you to Google (Authorization Server)
3. You enter your password → directly on Google's page, not App X
4. Google issues a short-lived ACCESS TOKEN to App X
5. App X uses that token to access only what it's allowed to
```

| Reason                       | Explanation                                                             |
| ---------------------------- | ----------------------------------------------------------------------- |
| Password never leaves Google | App X never sees your Google password                                   |
| Token is limited scope       | Token only allows what you granted (e.g. read email, not delete)        |
| Token expires                | Even if stolen, it becomes useless quickly                              |
| You can revoke access        | Disconnect App X from Google at any time without changing your password |

---

### When does Auth0 use OAuth 2.0?

Auth0 acts as the **Authorization Server** in the OAuth 2.0 flow — replacing Google or Facebook with your own identity system.

```
User → Your App → Auth0 (Authorization Server) → issues token → Your App
```

| Action                                    | OAuth 2.0 role                     |
| ----------------------------------------- | ---------------------------------- |
| User clicks Login                         | Your app redirects to Auth0        |
| Auth0 verifies email/password             | Auth0 acts as Authorization Server |
| Auth0 redirects to `/dashboard`           | With an access token + id token    |
| `ProtectedRoute` checks `isAuthenticated` | Validates the token from Auth0     |

**One line summary:**

> OAuth 2.0 is secure because you always authenticate with a trusted server directly — the app you're using never touches your password, only a limited, expiring token.
