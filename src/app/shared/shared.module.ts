import { NgModule } from '@angular/core';
import { MaterialModule } from './ui/material/material.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [MaterialModule],
  exports: [
    MaterialModule,
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ],
})
export class SharedModule {}
