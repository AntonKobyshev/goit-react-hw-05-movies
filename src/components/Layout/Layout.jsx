import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Suspense fallback={ <Loader />} >
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};