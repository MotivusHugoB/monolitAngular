import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Map the /jsp/hello endpoint to a dedicated feature module
  {
    path: 'jsp/hello',
    loadChildren: () => import('./features/greeting/greeting.module').then(m => m.GreetingModule),
    // This lazy loads the greeting module which will handle the hello page functionality
  },
  // Redirect empty path to the greeting page
  {
    path: '',
    redirectTo: 'jsp/hello',
    pathMatch: 'full'
  },
  // Catch-all route for 404 handling
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Use hash location strategy if the app will be deployed under a context path
      // or if you need to support older browsers without HTML5 history API
      // useHash: true,
      
      // Enable route tracing for debugging (disable in production)
      enableTracing: false,
      
      // Use HTML5 style navigation (remove # from URLs)
      // Requires proper server-side configuration to handle deep linking
      useHash: false,
      
      // Scroll to top on navigation
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }