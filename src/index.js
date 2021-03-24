import { Router } from '@vaadin/router';
import './pages/home-page';
import './pages/quote.page';

const main = document.getElementById('main');

const routes = [
  {
    path: '/',
    component: 'home-page',
  },
  {
    path: '/quotes',
    component: 'quote-page',
  },
];
export const router = new Router(main);
router.setRoutes(routes);
