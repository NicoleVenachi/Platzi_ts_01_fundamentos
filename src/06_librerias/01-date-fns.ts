import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);

const rta = subDays(date, 30); ///restar fecha
const str = format(rta, 'yyyy/MM/dd'); //formatear fecha

console.log(str);
