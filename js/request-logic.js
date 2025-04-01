// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  // Extract the file extension
  const match = filename.match(/.*\.([^\.]*)$/);

  // Check if a valid extension was found
  if (!match) {
    return "text/plain"; // Default content type for unknown extensions
  }

  const extension = match[1].toLowerCase(); // Convert to lowercase for case-insensitivity

  // Map extensions to content types
  const contentTypes = {
    "html": "text/html",
    "css": "text/css",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "txt": "text/plain"
  };

  // Return the matching content type or default to "text/plain"
  return contentTypes[extension] || "text/plain";
}

// Example Tests
console.log(getContentType("index.html")); // "text/html"
console.log(getContentType("styles.css")); // "text/css"
console.log(getContentType("photo.jpg")); // "image/jpeg"
console.log(getContentType("photo.jpeg")); // "image/jpeg"
console.log(getContentType("document.txt")); // "text/plain"
console.log(getContentType("unknownfile.xyz")); // "text/plain" (default case)
console.log(getContentType("noextension")); // "text/plain" (no extension)

