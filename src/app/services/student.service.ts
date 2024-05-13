import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student-model';
import { API_URL } from '../../environmet/environment';

const URL_BASE = `${API_URL}student`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // Save
  saveStudent(student: Student) {
    return this.httpClient.post(`${URL_BASE}/save`, student);
  }

  // Fetch list
  getList() {
    return this.httpClient.get(`${URL_BASE}/list`);
  }

  // Fetch 1 by id
  getById(id: string) {
    return this.httpClient.get(`${URL_BASE}/by-id/${id}`);
  }

  // Delete
  deleteById(id: string) {
    return this.httpClient.delete(`${URL_BASE}/by-id/${id}`);
  }

}
