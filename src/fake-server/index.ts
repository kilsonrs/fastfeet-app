/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer, Model } from 'miragejs';
import { IDelivery } from '../dtos/IDelivery';

import seeds from './seeds';

export function makeServer() {
  return createServer({
    models: {
      deliverers: Model,
      recipients: Model,
      deliveries: Model,
      issues: Model,
    },
    seeds(server) {
      server.db.loadData(seeds);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 100;
      this.post('/deliverers/sessions', async () => {
        return {
          user: {
            id: 'deliveryman_id',
            name: 'FastFeet Delivery Man',
            email: 'deliveryman@fastfeet.com',
            is_deliveryman: true,
          },
          token: 'any_token',
        };
      });

      this.get('/deliverers/:id/deliveries', async (_, request) => {
        const { completed } = request.queryParams;

        const isCompletedFilter = (delivery: IDelivery) =>
          delivery.end_date !== null;

        const isPendingFilter = (delivery: IDelivery) =>
          delivery.end_date === null;

        if (completed) {
          return this.db.deliveries.where(isCompletedFilter);
        }
        return this.db.deliveries.where(isPendingFilter);
      });

      this.patch('/deliveries/:id', async (_, request) => {
        const { params, requestBody } = request;
        const deliverymanData = JSON.parse(requestBody);

        const deliveryman = this.schema.findBy('deliverers', {
          id: params.id,
        });

        deliveryman?.update(deliverymanData);
      });

      this.post('/deliveries/:id/issues');
    },
  });
}
