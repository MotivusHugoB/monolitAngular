import { Component, OnInit } from '@angular/core';

/**
 * HelloComponent - Angular component that replaces the JSP template
 * 
 * Migration notes:
 * - Converted from a simple JSP template to a standalone Angular component
 * - No AngularJS controllers or services were present in the original code
 * - Created a component with a template that matches the original JSP content
 * - Added OnInit lifecycle hook for potential future initialization needs
 */
@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h2>Hello from JSP!</h2>
    </div>
  `,
  styles: [`
    h2 {
      font-family: Arial, sans-serif;
    }
  `]
})
export class HelloComponent implements OnInit {
  
  constructor() { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   */
  ngOnInit(): void {
    // Initialize component data or make API calls if needed
    // The original JSP was static with no initialization logic
  }
}