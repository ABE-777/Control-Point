import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { StudentForParent } from '../models/student-for-parent.model';
import { DismissalCard } from '../models/http-models/dismissal-card.model';
import { DismissalCardsList } from '../models/http-models/dismissal-cards-list.model';
import { MainParent } from '../models/main-parent';

@Injectable()
export class DismissalCardsService {

  constructor(private http: HttpClient) { }

  getStudentsOfCurrentUser(id: number): Observable<StudentForParent[]> {
    return this.http.get<StudentForParent[]>(`api/Parent/GetStudentsForParent/${id}`);
  }

  getStudentsForAdmin(): Observable<StudentForParent[]> {
    return this.http.get<StudentForParent[]>(`api/Parent/GetStudentsForAdmin`);
  }

  getListOfDismissalCards(): Observable<DismissalCardsList> {
    return this.http.get<DismissalCardsList>('api/Card/GetDismissalCards');
  }

  getDismissalCardById(id: number): Observable<DismissalCard> {
    return this.http.get<DismissalCard>(`api/Card/GetDismissalCardById/${id}`);
  }

  createDismissalCard(card: DismissalCard): Observable<any> {
    return this.http.post('api/Card/CreateDismissalCard', card);
  }

  updateDismissalCard(card: DismissalCard): Observable<any> {
    return this.http.put('api/Card/EditDismissalCard', card);
  }

  deleteDismissalCard(id: number): Observable<any> {
    return this.http.delete(`api/Card/DeleteDismissalCard/${id}`);
  }

  setDismissalCardsToActive(cardIds: number[]) {
    return this.http.put(`/api/Card/EditDismissalCardPrinted`, cardIds );
  }

  getMainParents() : Observable<MainParent[]>  {
    return this.http.get<MainParent[]>('/api/Card/GetMainParents');
  }

}
