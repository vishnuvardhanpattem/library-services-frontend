import { useNavigate, useLocation } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

export function RequireAuth({ children }) {
  let {authState} = useOktaAuth();
  let location = useLocation();
  let navigate = useNavigate();

  if (!authState?.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    navigate('/login', { state: { from: location } });
    return null;
  }

  return children;
}
