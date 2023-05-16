export function formatDateTime(timeutc) {
  const date = new Date(timeutc);
  const day = date.getDate();
  const month = date.getMonth() + 1; // months are zero-based
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Pad single digit values with leading zero
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");
  const formattedYear = String(year);
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const formattedTime = `[${formattedDay}-${formattedMonth}-${formattedYear}] - [${formattedHours}:${formattedMinutes}:${formattedSeconds}]`;
  return formattedTime; // [dd-mm-yyyy] - [hh:mm:ss]
}

export function formatLocalDateTime(timeutc) {
  const time = new Date(timeutc);

  // Convert to the desired format
  const formattedDate = time.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

  // Combine the formatted date and time
  const result = `${formattedDate} (${formattedTime} WIB)`;
  return result;
}
