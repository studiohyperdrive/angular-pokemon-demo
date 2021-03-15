import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenerationsService } from '../../services/generations/generations.service';
import { IGenerations } from '../../services/generations/generations.types';

@Component({
  templateUrl: './overview.page.html',
})
export class OverviewPageComponent implements OnInit {
  public generations$: Observable<IGenerations[]>;

  constructor(
    private generationsService: GenerationsService,
  ) { }

  public ngOnInit(): void {
    this.generations$ = this.generationsService.fetchList();
  }
}
