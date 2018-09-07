export const typeOfObject = unknown => (Array.isArray(unknown) ? 'array' : typeof unknown);
