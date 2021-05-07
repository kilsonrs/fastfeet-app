import { IRecipient } from './IRecipient';

interface IDelivery {
  id: string;
  status: 'pendente' | 'retirada' | 'cancelada' | 'entregue';
  package_name: string;
  start_date?: string | null;
  end_date?: string | null;
  signature: string;
  created_at: string;
  deliveryman: {
    name: string;
    avatar_url?: string | null;
  };
  recipient: IRecipient;
}

export type { IDelivery };
