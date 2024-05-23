export const oktaConfig = {
    clientId: '0oagwosyxfmd49g8o5d7',
    issuer: 'https://dev-78372216.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}