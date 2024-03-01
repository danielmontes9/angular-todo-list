import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzListModule } from 'ng-zorro-antd/list';


const components: any[] = [];
const modules: any[] = [
  CommonModule,
  BrowserAnimationsModule,
  HttpClientModule,
  ReactiveFormsModule,

  NzTypographyModule, 
  NzGridModule,
  NzSpaceModule, 
  NzIconModule,
  NzButtonModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzMessageModule,
  NzResultModule,
  NzListModule
];


@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
