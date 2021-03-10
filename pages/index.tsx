import React from 'react';
import Home from '@templates/home';
import { SWRConfig } from 'swr';

export default function Index(): JSX.Element {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
      }}
    >
      <Home />
    </SWRConfig>
  );
}
