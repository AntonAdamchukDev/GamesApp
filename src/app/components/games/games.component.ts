import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, tap } from 'rxjs';

import { Game } from './interfaces/game';
import { SortConfig } from './interfaces/sort-config';
import { GamesDataService } from './services/games-data.service';
import { PARAMETERS } from './constants/Parameters';
import { Parameters } from './enums/Parameters';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public parameters = PARAMETERS;

  public isAscending = false;

  public sortingForm: FormGroup;

  public sortConfig: SortConfig = {
    property: '',
    dir: 'desc',
  };

  public isLoading$: Subject<boolean> = new Subject();

  public data$: Observable<Game[]> = this.gamesDataService.getGames().pipe(
    tap(()=>this.isLoading$.next(true))
  );

  constructor(
    private formBuilder: FormBuilder,
    private gamesDataService: GamesDataService
  ) {}

  ngOnInit(): void {
    this.sortingForm = this.formBuilder.group({
      name: [''],
      score: [''],
      parameter: [''],
    });
  }

  public toggleDir() {
    this.isAscending = !this.isAscending;
    this.sortConfig.dir = this.isAscending ? 'asc' : 'desc';
  }

  public setSortParameter() {
    if (
      this.sortingForm.controls['parameter']?.value === Parameters.ReleaseDate
    ) {
      this.sortConfig.property = 'first_release_date';
      return;
    }

    if (this.sortingForm.controls['parameter']?.value === Parameters.Score) {
      this.sortConfig.property = 'rating';
      return;
    }

    if (this.sortingForm.controls['parameter']?.value === Parameters.Name) {
      this.sortConfig.property = 'name';
    }
  }

  public clearForm() {
    this.sortingForm.patchValue({ name: '', score: '', parameter: '' });
    this.sortConfig.property = ''
    this.isAscending = false;
  }
}
