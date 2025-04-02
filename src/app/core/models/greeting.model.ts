/**
 * Greeting model representing the response from the REST API endpoint
 * 
 * This model corresponds to the data returned by ApiController.getGreeting()
 * in the original monolith application. It provides type safety for the
 * greeting message returned from the /api/greeting endpoint.
 * 
 * In Angular, we use interfaces or classes to define the shape of data
 * returned from API calls, which helps with type checking and IDE support.
 */
export interface Greeting {
  /**
   * The greeting message returned from the server
   * 
   * In the original implementation, this was a simple string.
   * We maintain the same structure here for compatibility.
   */
  message: string;
}

/**
 * Alternative implementation as a class if we need methods or default values
 */
export class GreetingModel implements Greeting {
  /**
   * Default constructor with optional message parameter
   * 
   * @param message The greeting message from the API
   */
  constructor(public message: string = '') {}
  
  /**
   * Utility method to check if greeting is empty
   */
  isEmpty(): boolean {
    return !this.message || this.message.trim().length === 0;
  }
  
  /**
   * Format the greeting message with additional text
   * 
   * @param prefix Optional text to add before the message
   * @returns Formatted greeting message
   */
  getFormattedMessage(prefix: string = ''): string {
    return `${prefix}${this.message}`;
  }
}