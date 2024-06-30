import { Schema, model, models, Document } from "mongoose";

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: String;
  totalAmount: String;
  event: {
    _id: String;
    title: String;
  };
  buyer: {
    _id: String;
    firstName: String;
    lastName: String;
  };
}

export type IOrderItem = {
  _id: String;
  totalAmount: String;
  createdAt: Date;
  eventTitle: String;
  eventId: String;
  buyer: String;
};

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
