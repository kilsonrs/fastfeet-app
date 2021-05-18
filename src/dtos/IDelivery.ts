import { IRecipient } from './IRecipient';

interface IDelivery {
  id: string;
  status: 'pendente' | 'retirada' | 'cancelada' | 'entregue';
  package_name: string;
  start_date?: Date | null;
  end_date?: Date | null;
  signature: string;
  created_at: Date;
  deliveryman: {
    name: string;
    avatar_url?: string | null;
  };
  recipient: IRecipient;
}

export type { IDelivery };
