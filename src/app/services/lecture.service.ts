import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecture } from '../models/lecture-model';
import { API_URL } from '../../environmet/environment';

const URL_BASE = `${API_URL}lecture`;

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  //  Save
  saveLecture(lecture: Lecture) {
    return this.httpClient.post(`${URL_BASE}/save`, lecture);
  }

  //  Fetch 1 by id
  getById(id: string) {
    return this.httpClient.get(`${URL_BASE}/by-id/${id}`);
  }

  //  Delete
  deleteById(id: string) {
    return this.httpClient.delete(`${URL_BASE}/by-id/${id}`);
  }

  //  Assign student to lecture
  assign(studentId: string, lectureId: string) {
    return this.httpClient.post(`${URL_BASE}/assign-student`, { studentId, lectureId });
  }
}
