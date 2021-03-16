import { Component, Input } from '@angular/core';

import { IGenerations } from '../../services/generations/generations.types';

@Component({
  selector: 'app-generations-list',
  templateUrl: './generations-list.component.html',
  styleUrls: ['./generations-list.component.scss']
})
export class GenerationsListComponent {
  @Input() public generations: IGenerations[] = [];
}
