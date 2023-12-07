import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ScoreCardComponent } from './components/score-card/score-card/score-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedPackageModule } from './shared/shared-package.module.ts/shared-package.module.ts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent, ScoreCardComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedPackageModule,
        ButtonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
