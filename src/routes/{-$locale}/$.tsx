import { createFileRoute } from '@tanstack/react-router';

import { NotFoundComponent } from '#/components/NotFoundComponent';

// Catch-all route for unknown paths - renders the 404 page
export const Route = createFileRoute('/{-$locale}/$')({
  component: NotFoundComponent,
});
