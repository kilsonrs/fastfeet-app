/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer, Model } from 'miragejs';
import { IDelivery } from '../dtos/IDelivery';
import { parseString } from '../utils/parseString';

import seeds from './seeds';

export function makeServer() {
  return createServer({
    models: {
      neighborhoods: Model,
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

      this.get('/neighborhoods', async (_, request) => {
        const { neighborhood } = request.queryParams;
        return this.db.neighborhoods.where(({ name }: { name: string }) =>
          parseString(name).includes(parseString(neighborhood)),
        );
      });

      this.get('/deliverers/:id/deliveries', async (_, request) => {
        const { completed, neighborhood } = request.queryParams;

        const neighborhoodFilter = (delivery: IDelivery) =>
          delivery.recipient.neighborhood === neighborhood;

        const isCompletedFilter = (delivery: IDelivery) =>
          delivery.end_date !== null;

        const isPendingFilter = (delivery: IDelivery) =>
          delivery.end_date === null;

        let deliveries;

        if (completed) {
          deliveries = this.db.deliveries.where(isCompletedFilter);
          if (neighborhood) {
            return deliveries.filter(neighborhoodFilter);
          }
          return deliveries;
        }

        deliveries = this.db.deliveries.where(isPendingFilter);

        if (neighborhood) {
          return deliveries.filter(neighborhoodFilter);
        }
        return deliveries;
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
