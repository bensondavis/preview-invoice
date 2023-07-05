import { Address } from "./address";
import { LineItems } from "./lineItems";

export interface InvoiceProps {
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