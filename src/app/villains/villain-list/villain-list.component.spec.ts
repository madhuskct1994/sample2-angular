import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute, Router } from '@angular/router';

import { DataTableModule } from 'angular2-datatable';
import { SharedModule } from '../../shared/shared.module';
import { MocksUtil } from '../../core/utilities/mocks.util';
import { VillainService } from '../shared/villain.service';
import { SpinnerService } from '../../core/spinner/spinner.service';
import { LoggerService } from '../../core/services/logger.service';
import { VillainListComponent } from './villain-list.component';

describe('VillainListComponent', () => {
  let component: VillainListComponent;
  let fixture: ComponentFixture<VillainListComponent>;
  const apiConfig = MocksUtil.createMockedApiConfig();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VillainListComponent],
      imports: [
        HttpModule,
        SharedModule,
        DataTableModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: 'api.config', useValue: apiConfig },
        { provide: 'cookie.user.id', useValue: 'backUserId' },
        { provide: 'cookie.token.id', useValue: 'backToken' },
        SpinnerService, LoggerService, VillainService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});