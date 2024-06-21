import { AdminRoutes } from './adminRoute';
import { sellerRoutes } from './sellerRoute';

export const privateRoutes = [
    ...AdminRoutes,
    ...sellerRoutes
]