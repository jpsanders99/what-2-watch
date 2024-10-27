import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { Observable } from 'rxjs';
import { Media } from '../models/media.model';
import { MediaApiActions } from '../state/media.actions';
import { selectMedia } from '../state/media.selector';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ButtonModule, CommonModule, DataViewModule, FormsModule, HttpClientModule, InputTextModule, RatingModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  query!: string;
  media$: Observable<Array<Media>> = this.store.select(selectMedia);

  constructor(
    private searchService: SearchService,
    private store: Store
  ) { }

  public search() {
    this.query ?
      this.searchService
        .search(this.query, 1)
        .subscribe((media) =>
          this.store.dispatch(MediaApiActions.retrievedMediaList({ media }))
        ) : null;
  }
}
