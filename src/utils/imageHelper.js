import { ASSETS_PATH } from '../config/constants';

/**
 * Helper functions for image handling
 */

/**
 * Get full path for company image
 * @param {string} imageName - The image filename
 * @returns {string} - Full image path
 */
export const getCompanyImagePath = (imageName) => {
    return `${ASSETS_PATH.COMPANIES}/${imageName}`;
};

/**
 * Get full path for project image
 * @param {string} imageName - The image filename
 * @returns {string} - Full image path
 */
export const getProjectImagePath = (imageName) => {
    return `${ASSETS_PATH.PROJECTS}/${imageName}`;
};

/**
 * Process data to include full image paths
 * @param {Object} data - The data object
 * @param {Function} pathResolver - Function to resolve image paths
 * @returns {Object} - Processed data with full image paths
 */
export const processImagePaths = (data, pathResolver) => {
    const processed = {};
    Object.keys(data).forEach(key => {
        processed[key] = {
            ...data[key],
            imageUri: pathResolver(data[key].imageUri)
        };
    });
    return processed;
};
