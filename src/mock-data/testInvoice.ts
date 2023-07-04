import { Invoice } from "../interfaces/invoice";

export const testInvoice: Invoice = {
  toAddress: {
    name: "Alteos GmbH",
    place: "Tauentzienstraße 7 b/c",
    state: "Berlin",
    zipCode: "10789",
    country: "GERMANY",
  },
  fromAddress: {
    name: "Alteos GmbH",
    place: "Tauentzienstraße 7 b/c",
    state: "Berlin",
    zipCode: "10789",
    country: "GERMANY",
  },
  invoiceNumber: "NDCDK0000154",
  reference: "5C42D66DE - BETALT",
  issued: new Date(),
  due: 10,
  net: 2944.0,
  tax: 736.0,
  gross: 3680.00,
  lineItems: [
    {
      name: "2-Day Workshop Pass w. Hotel - Early Bird",
      quantity: 2,
      unitPrice: 1465.0,
      tax: 25,
      amount: 2930.0,
    },
    {
      name: "2-Day Workshop Pass w. Hotel - Early Bird",
      quantity: 2,
      unitPrice: 1465.0,
      tax: 25,
      amount: 2930.0,
    },
  ],
  paymentLink: "google.com",
  pdfDownloadLink: "google.com"
};
