import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarService } from 'src/app/services/car.service';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';

import { MenuComponent } from './components/custom/menu/menu.component';
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
import { TabLazyComponent } from './components/primeng/table/tab-lazy/tab-lazy.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductService } from './services/product.service';
import { MenuService } from './services/menu.service';
import { MenuItemComponent } from './components/custom/menu/menu-item/menu-item.component';
import { FormBasicComponent } from './components/forms/form-basic/form-basic.component';
import { FormButtonsComponent } from './components/forms/form-buttons/form-buttons.component';
import { HomeComponent } from './pages/home/home.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    TabPaginComponent,
    TabSortComponent,
    TabBasicComponent,
    MenuComponent,
    TabEditComponent,
    TabScrollComponent,
    TabToggleComponent,
    TabResizeComponent,
    TabReorderComponent,
    TabSelecColComponent,
    TabExportComponent,
    TabContextMenuComponent,
    TabResponsiveComponent,
    TabCrudComponent,
    TabStateComponent,
    TabFixedHeaderComponent,
    TabLazyComponent,
    MenuItemComponent,
    FormBasicComponent,
    FormButtonsComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    PanelMenuModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [ AppComponent ],
  providers: [ CarService, ProductService, MenuService, MessageService ]
})

export class AppModule { }
