import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

/**
 * Feature module for the Hello functionality
 * 
 * This module encapsulates the Hello feature which was previously
 * implemented as a JSP page. It provides a simple view that displays
 * a greeting message.
 */
const routes: Routes = [
  { path: '', component: HelloComponent }
];

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule, // Imported for common directives like ngIf, ngFor
    RouterModule.forChild(routes)
  ]
})
export class HelloModule { }