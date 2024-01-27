function formatDateToISOString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const timeZoneOffset = date.getTimezoneOffset();
    const timeZoneOffsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
    const timeZoneOffsetMinutes = Math.abs(timeZoneOffset) % 60;
    const timeZoneOffsetSign = timeZoneOffset >= 0 ? '-' : '+';
  
    const timeZoneDesignator = `${timeZoneOffsetSign}${String(timeZoneOffsetHours).padStart(2, '0')}:${String(timeZoneOffsetMinutes).padStart(2, '0')}`;
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timeZoneDesignator}`;
  }

  export default formatDateToISOString;