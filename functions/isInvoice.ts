import { InvoiceProps } from "../interfaces/invoice";

function isInvoice(obj: any): obj is InvoiceProps {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "toAddress" in obj &&
    "fromAddress" in obj &&
    "invoiceNumber" in obj &&
    "reference" in obj &&
    "issued" in obj &&
    "due" in obj &&
    "lineItems" in obj &&
    "net" in obj &&
    "tax" in obj &&
    "gross" in obj &&
    "paymentLink" in obj &&
    "pdfDownloadLink" in obj
  );
}

export default isInvoice
