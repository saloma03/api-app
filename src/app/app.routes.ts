import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home'
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'shop'

  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'blog'

  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about'

  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'contact'

  },
  {
    path: '**',
    component: NotfoundpageComponent,
    title: 'page not found'

  },
];
