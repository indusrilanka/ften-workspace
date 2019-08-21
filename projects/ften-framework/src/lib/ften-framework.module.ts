import { NgModule } from '@angular/core';
import { FtenFrameworkComponent } from './ften-framework.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [FtenFrameworkComponent, ContentComponent, HomeComponent],
  imports: [],
  exports: [FtenFrameworkComponent, ContentComponent, HomeComponent]
})
export class FtenFrameworkModule {}
