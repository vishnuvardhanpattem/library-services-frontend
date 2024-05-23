// import {  redirect } from 'react-router-dom';
// import { useOktaAuth } from '@okta/okta-react';
// import { SpinnerLoading } from '../layouts/Utils/SpinnerLoading';
// import OktaSignInWidget from './OktaSignInWidget';

// const LoginWidget = ({ config }) => {
//     const { oktaAuth, authState } = useOktaAuth();
//     const onSuccess = (tokens) => {
//         oktaAuth.handleLoginRedirect(tokens);
//     };

//     const onError = (err) => {
//         console.log('Sign in error: ', err);
//     }

//     if (!authState) {
//         return (
//             <SpinnerLoading/>
//         );
//     }

//     return authState.isAuthenticated ?
//     redirect("/")
//     :
//     <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>;
// };

// export default LoginWidget;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import OktaSignInWidget from './OktaSignInWidget';
import { SpinnerLoading } from '../utils/SpinnerLoading';


const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();


  const onSuccess = (tokens) => {
    console.log("Tokens : ", tokens)
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log('Sign-in error:', err);
    // Handle error appropriately (e.g., display error message)
  };

  if (!authState) {
    return <SpinnerLoading />;
  }

  return (
    <div>
      {!authState?.isAuthenticated ? (
        <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
      ) : navigate("/")}
    </div>
  );
};

export default LoginWidget;
