import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NumGenComponent} from './num-gen/num-gen.component';


const routes: Routes = [
  {path: '', component: NumGenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolPagesRoutingModule {
}
