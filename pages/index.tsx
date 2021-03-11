import React from 'react';
import Home from '@templates/home';
import { SWRConfig } from 'swr';
import { SnackbarProvider } from 'notistack';

export default function Index(): JSX.Element {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
      }}
    >
      <SnackbarProvider>
        <Home />
      </SnackbarProvider>
    </SWRConfig>
  );
}
