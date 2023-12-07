import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './body/inicio/inicio.component';
import { EstudioComponent } from './body/estudio/estudio.component';
import { PrivadaProyectoComponent } from './body/privada-proyecto/privada-proyecto.component';
import { PublicoProyectoComponent } from './body/publico-proyecto/publico-proyecto.component';
import { SingularesComponent } from './body/singulares/singulares.component';
import { UnifamiliarProyectoComponent } from './body/unifamiliar-proyecto/unifamiliar-proyecto.component';
import { NicosiaComponent } from './body/privada-proyecto/nicosia/nicosia.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'body/privada-proyecto/privada-proyecto.component',
    component: PrivadaProyectoComponent,
  },
  {
    path: 'body/publico-proyecto/publico-proyecto.component',
    component: PublicoProyectoComponent,
  },

  {
    path: 'body/singulares/singulares.component',
    component: SingularesComponent,
  },
  {
    path: 'body/estudio/estudio.component',
    component: EstudioComponent,
  },
  {
    path: 'body/unifamiliar-proyecto/unifamiliar-proyecto.component',
    component: UnifamiliarProyectoComponent,
  },
  {
    path: 'body/privada-proyecto/nicosia/nicosia.component',
    component: NicosiaComponent,
  },
  {
    path: 'nicosia',
    component: NicosiaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
