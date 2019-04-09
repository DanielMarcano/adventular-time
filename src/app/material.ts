import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatListModule, MatIconModule]
})
export class MaterialModule { }

