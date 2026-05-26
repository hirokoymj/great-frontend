Basics

1. What is Auth0 and what problem does it solve?
   Auth0 is a third-party authentication service. It handles login, signup, and user management so you don't have to build it from scratch.

2. What is the difference between Authentication and Authorization?
   Authentication verifies who you are (login). Authorization verifies what you can do (permissions).

3. What is OAuth 2.0 and how does Auth0 use it?
   OAuth 2.0 is a protocol for granting access to resources without sharing passwords. Auth0 uses it to issue access tokens after a user logs in.

4. What is OpenID Connect (OIDC) and how does it differ from OAuth 2.0?
   OIDC is built on top of OAuth 2.0 and adds identity — it issues an id_token (JWT) that contains user profile info. OAuth 2.0 alone only handles authorization, not identity.
