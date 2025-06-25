export interface CalendarEventData {
  title: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
}

function formatGoogleDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function generateGoogleCalendarUrl(event: CalendarEventData): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${formatGoogleDate(event.start)}/${formatGoogleDate(event.end)}`,
    details: event.description || "",
    location: event.location || "",
    sf: "true",
    output: "xml",
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}
