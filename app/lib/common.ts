// validate the URL
export function isValidUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    console.log('some erro', error)
    return false;
  }
}




