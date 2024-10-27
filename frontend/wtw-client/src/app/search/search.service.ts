import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Media } from '../models/media.model';
import { MediaList } from '../models/mediaList.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) { }

  search(query: string, pageNumber: number): Observable<Array<Media>> {
    return this.http
      .get<MediaList>(
        `http://localhost:5006/media-search?query=${query}&pageNumber=${pageNumber}`
      )
      .pipe(map((mediaList: MediaList) => mediaList.results || []));
  }
}