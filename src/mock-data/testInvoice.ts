import { InvoiceProps } from "../interfaces/invoice";

export const data = () => {
  return new Promise((resolve, reject) => {
    resolve(testInvoice);
    reject("error");
  });
};

const testInvoice: InvoiceProps = {
  toAddress: [
    {
      name: "Alteos GmbH",
      place: "Tauentzienstraße 7 b/c",
      state: "Berlin",
      zipCode: "10789",
      country: "GERMANY",
    },
    {
      name: "Alteos GmbH",
      place: "Tauentzienstraße 7 b/c",
      state: "Berlin",
      zipCode: "10789",
      country: "GERMANY",
    },
  ],
  fromAddress: {
    name: "Alteos GmbH",
    place: "Tauentzienstraße 7 b/c",
    state: "Berlin",
    zipCode: "10789",
    country: "GERMANY",
  },
  invoiceNumber: "NDCDK0000154",
  reference: "5C42D66DE - BETALT",
  issued: new Date("2023-03-29"),
  due: 12,
  net: 2944.0,
  tax: 736.0,
  gross: 3680.0,
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
  paymentLink: "https://www.google.com/",
  pdfDownloadLink: "https://www.google.com/",
};
