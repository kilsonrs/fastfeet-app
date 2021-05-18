import ptBR, { format, parseISO } from 'date-fns';

const parseDate = (payload: Date | string): string => {
  if (typeof payload === 'string') {
    return format(parseISO(payload), 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }
  return format(payload, 'dd/MM/yyyy', {
    locale: ptBR,
  });
};

export { parseDate };
