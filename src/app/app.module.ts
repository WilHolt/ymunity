import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from './core/state/application.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { StatecityPipe } from './shared/pipes/statecity.pipe';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    CoreModule,
    ModulesModule,
    MatDialogModule,
    NgxsModule.forRoot([ApplicationState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [

  ], bootstrap: [AppComponent]
})
export class AppModule { }
