import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWrapper = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-b2kt887f2m0nr3d7.us.auth0.com"
      clientId="Ys64VKfrXXBSb0OkrcR9LdmeARqTu32C"
      authorizationParams={{ redirect_uri: `${window.location.origin}/dashboard` }}
    >
      {children}
    </Auth0Provider>
  );
};
