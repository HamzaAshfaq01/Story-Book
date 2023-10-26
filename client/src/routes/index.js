import { useRoutes } from 'react-router-dom';
//
import { NewsList } from './elements';

import GuestGuard from '../auth/GuestGuard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <GuestGuard>
          <NewsList />,
        </GuestGuard>
      ),
    },
  ]);
}
