import { generateGoogleCalendarUrl, CalendarEventData } from "@/lib/GoogleCalendar";
import { Button, ButtonProps } from "@/components/ui/button";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren,ButtonProps {
  event: CalendarEventData;
  label?: string; 
}


export function GoogleCalendarButton({ event, label = "Adicionar ao Google Calendar", className, size, variant,children }: Props) {
  const url = generateGoogleCalendarUrl(event);

  return (
    <Button 
    href={url} target={"_blank"}className={className} size={size} variant={variant}>
      {children || label}
    </Button>
  );
}

{/* </a> */}
{/* <a href={url} target="_blank" rel="noopener noreferrer"> */}