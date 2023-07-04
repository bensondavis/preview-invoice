import { Address } from "./address";
import { LineItems } from "./lineItems";

export interface Invoice {
  toAddress: Address,
  fromAddress: Address,
  invoiceNumber: string,
  reference: string,
  issued: Date,
  due: number
  lineItems: LineItems[]
  net: number,
  tax: number,
  gross: number,
  paymentLink: string,
  pdfDownloadLink: string,
}