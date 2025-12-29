/**
 * Generic API Service
 * Handles all HTTP requests with error handling
 */
class ApiService {
    /**
     * Fetch data from a URL
     * @param {string} url - The URL to fetch from
     * @returns {Promise} - Promise resolving to the response data
     */
    static get(url) {
        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error! status: ' + response.status);
                }
                return response.json();
            })
            .catch(function(error) {
                console.error('API request failed:', error);
                throw error;
            });
    }

    /**
     * Load local JSON data
     * @param {Object} data - The imported JSON data
     * @returns {Promise} - Promise resolving to the data
     */
    static loadLocal(data) {
        return Promise.resolve(data);
    }
}

export default ApiService;
