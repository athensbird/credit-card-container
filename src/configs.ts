export const BASE_ENDPOINT = 'http://localhost:4000';

export const encryptData = data => {
    if (!data) return "";
    const segments = data.split(' ');
    return segments.map(segment => segment.split('').map(char => 'X').join('')).join(' ');
}