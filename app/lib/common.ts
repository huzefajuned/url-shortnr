// validate the URL
export function isValidUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    console.log("some erro", error);
    return false;
  }
}

// format short url in  {/abc-xyx} for better visibilty.
export function formatUrl(url: string) {
  if (!url) {
    return "invalid url type";
  }

  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1] || "invalid url type";
}
