/**
 * Extracts paths from a nested object, e.g. `a.b.c = "value"`
 */
export const extractObjectPaths = (obj, currentPath = '', list = []) => {
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      if (value != null) {
        const path = Array.isArray(obj)
          ? `${currentPath}[${key}]`
          : currentPath ? `${currentPath}.${key}` : key;
  
        if (typeof value === 'object') {
          extractObjectPaths(value, path, list);
        } else {
          list.push([path, String(value)]);
        }
      }
    }
    return list;
  };
  