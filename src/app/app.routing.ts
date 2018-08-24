import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeBackgroundComponent } from './change-background/change-background.component';
import { ExampleDetailsComponent }   from './example-details/example-details.component';
import { ExamplesComponent }   from './examples/examples.component';
import { FooterComponent }   from './footer/footer.component';
import { MainPanelComponent }   from './main-panel/main-panel.component';
import { SearchPanelComponent }   from './search-panel/search-panel.component';
import { TopBarComponent }   from './top-bar/top-bar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPanelComponent
  },
  {
    path: 'main',
    component: ExamplesComponent
  },
  {
    path: 'examples/:id',
    component: ExampleDetailsComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
