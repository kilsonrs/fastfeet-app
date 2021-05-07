import ptBR, { format, parseISO } from 'date-fns';

const parseDate = (payload: string): string => {
  return format(parseISO(payload), 'dd/MM/yyyy', {
    locale: ptBR,
  });
};

export { parseDate };
