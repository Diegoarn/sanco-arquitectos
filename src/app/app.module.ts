import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './body/inicio/inicio.component';
import { EstudioComponent } from './body/estudio/estudio.component';
import { PublicoProyectoComponent } from './body/publico-proyecto/publico-proyecto.component';
import { PrivadaProyectoComponent } from './body/privada-proyecto/privada-proyecto.component';
import { UnifamiliarProyectoComponent } from './body/unifamiliar-proyecto/unifamiliar-proyecto.component';
import { SingularesComponent } from './body/singulares/singulares.component';
import { NicosiaComponent } from './body/privada-proyecto/nicosia/nicosia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    EstudioComponent,
    PublicoProyectoComponent,
    PrivadaProyectoComponent,
    UnifamiliarProyectoComponent,
    SingularesComponent,
    NicosiaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
