import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * GreetingService
 * 
 * This service is responsible for fetching greeting messages from the backend API.
 * 
 * Migration notes:
 * - Converted from AngularJS service that likely used $http to fetch from ApiController
 * - Implemented as an Angular Injectable service with providedIn: 'root' for tree-shaking
 * - Uses HttpClient instead of AngularJS $http
 * - Returns Observables instead of promises
 * - Added proper TypeScript typing
 * - Implemented comprehensive error handling with RxJS operators
 */
@Injectable({
  providedIn: 'root' // Makes the service tree-shakable and available as a singleton
})
export class GreetingService {
  // Base API URL for greeting endpoints
  private apiUrl = '/api';

  /**
   * Constructor with Angular's dependency injection
   * @param http Angular HttpClient for making HTTP requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Gets a greeting message from the server
   * @returns Observable<string> containing the greeting message
   */
  getGreeting(): Observable<string> {
    return this.http.get(`${this.apiUrl}/greeting`, { responseType: 'text' })
      .pipe(
        // Map the response to extract any needed data
        map((response: string) => response),
        // Handle any errors that might occur
        catchError(this.handleError)
      );
  }

  /**
   * Error handler for HTTP requests
   * @param error The error response
   * @returns An observable that errors with a user-friendly message
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred while fetching the greeting';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;
    }
    
    // Log the error for debugging purposes
    console.error(errorMessage);
    
    // Return an observable with a user-facing error message
    return throwError(() => new Error(errorMessage));
  }
}