import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
	declarations: [
		ButtonComponent
	],
	imports: [
		MaterialModule
	],
	exports: [
		ButtonComponent
	]
})
export class UiModule { }