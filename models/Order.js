import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    line_items: Object,
    nama: String,
    email: String,
    alamat: String,
    kota: String,
    kodePos: String,
    provinsi: String,
    nomor: String,
    paid: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Order = models?.Order || model("Order", OrderSchema);
