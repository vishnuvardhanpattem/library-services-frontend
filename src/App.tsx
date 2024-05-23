import './App.css';
import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBookspage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaConfig } from './lib/oktaConfig';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { RequireAuth } from './Auth/RequiredAuth';
import { MessagesPage } from './layouts/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './layouts/ManageLibraryPage/ManageLibraryPage';
import { PaymentPage } from './layouts/PaymentPage/PaymentPage';
import { PageNotFound } from './utils/PageNotFound';





const oktaAuth = new OktaAuth(oktaConfig);


export const App = () => {

  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate('/login');
  }

  const restoreOriginalUrl = async (_oktaAuth: any, originalUri: any) => {
    const newUrl = toRelativeUrl(originalUri || '/', window.location.origin);
    navigate(newUrl, { replace: true }); // Use navigate with replace option set to true
  };


  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUrl} onAuthRequired={customAuthHandler}>
        <Navbar />
        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/search' element={<SearchBooksPage />} />
            <Route path='/reviewlist/:bookid' element={<ReviewListPage />} />
            <Route path='/checkout/:bookid' element={<BookCheckoutPage />} />
            <Route path="/login" element={<LoginWidget config={oktaConfig} />} />
            <Route path="/login/callback" element={<LoginCallback />} />
            <Route
              path="/shelf"
              element={
                <RequireAuth>
                  <ShelfPage />
                </RequireAuth>
              }
            />
            <Route
              path="/messages"
              element={
                <RequireAuth>
                  <MessagesPage />
                </RequireAuth>
              }
            />
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <ManageLibraryPage />
                </RequireAuth>
              }
            />
            <Route
              path="/fees"
              element={
                <RequireAuth>
                  <PaymentPage />
                </RequireAuth>
              }
            />

            <Route path='*' element={<PageNotFound />} /> 
          </Routes>

        </div>
        <Footer />
      </Security>
    </div>

  )
}






