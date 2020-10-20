import { parseISO, format } from "date-fns";
import { fr, es } from 'date-fns/locale'


export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const string = format(date, "d LLLL, yyyy", { locale: fr })
  return <time dateTime={dateString}>{string}</time>;
}
