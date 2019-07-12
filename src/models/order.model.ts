import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  orderNum: string;

  @property({
    type: 'string',
    required: true,
  })
  customerNum: string;

  @property({
    type: 'string',
    required: true,
  })
  customerEmail: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
