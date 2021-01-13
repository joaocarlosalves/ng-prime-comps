import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPaginComponent } from './components/primeng/table/tab-pagin/tab-pagin.component';
import { TabSortComponent } from './components/primeng/table/tab-sort/tab-sort.component';
import { TabBasicComponent } from './components/primeng/table/tab-basic/tab-basic.component';
import { TabEditComponent } from './components/primeng/table/tab-edit/tab-edit.component';
import { TabScrollComponent } from './components/primeng/table/tab-scroll/tab-scroll.component';
import { TabToggleComponent } from './components/primeng/table/tab-toggle/tab-toggle.component';
import { TabResizeComponent } from './components/primeng/table/tab-resize/tab-resize.component';
import { TabReorderComponent } from './components/primeng/table/tab-reorder/tab-reorder.component';
import { TabSelecColComponent } from './components/primeng/table/tab-selec-col/tab-selec-col.component';
import { TabExportComponent } from './components/primeng/table/tab-export/tab-export.component';
import { TabContextMenuComponent } from './components/primeng/table/tab-context-menu/tab-context-menu.component';
import { TabResponsiveComponent } from './components/primeng/table/tab-responsive/tab-responsive.component';
import { TabCrudComponent } from './components/primeng/table/tab-crud/tab-crud.component';
import { TabStateComponent } from './components/primeng/table/tab-state/tab-state.component';
import { TabFixedHeaderComponent } from './components/primeng/table/tab-fixed-header/tab-fixed-header.component';
import { FormBasicComponent } from './components/forms/form-basic/form-basic.component';
import { FormButtonsComponent } from './components/forms/form-buttons/form-buttons.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },
  // Tabelas
  { path: 'tab-basica', component: TabBasicComponent },
  { path: 'tab-paginacao', component: TabPaginComponent },
  { path: 'tab-editar', component: TabEditComponent },
  { path: 'tab-sort', component: TabSortComponent },
  { path: 'tab-scroll', component: TabScrollComponent },
  { path: 'tab-toggle', component: TabToggleComponent },
  { path: 'tab-resize', component: TabResizeComponent },
  { path: 'tab-header', component: TabFixedHeaderComponent },
  { path: 'tab-reordenar', component: TabReorderComponent },
  { path: 'tab-selec-col', component: TabSelecColComponent },
  { path: 'tab-export', component: TabExportComponent },
  { path: 'tab-responsivo', component: TabResponsiveComponent },
  { path: 'tab-crud', component: TabCrudComponent },
  { path: 'tab-state', component: TabStateComponent },
  { path: 'tab-context-menu', component: TabContextMenuComponent },
  
  // Formulários, Campos, Botões
  { path: 'form-basico', component: FormBasicComponent },
  { path: 'form-botoes', component: FormButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
