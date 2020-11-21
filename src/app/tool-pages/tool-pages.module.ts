import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolPagesRoutingModule } from './tool-pages-routing.module';
import { NumGenComponent } from './num-gen/num-gen.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatButtonModule} from '@angular/material/button';
import {ButtonsModule, TableModule} from 'angular-bootstrap-md';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [NumGenComponent],
  imports: [
    CommonModule,
    ToolPagesRoutingModule,
    MatInputModule,
    FormsModule,
    ClipboardModule,
    MatButtonModule,
    ButtonsModule,
    TableModule,
    MatRadioModule,
    MatTooltipModule
  ]
})
export class ToolPagesModule { }
