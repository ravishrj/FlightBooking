//
// import * as AuthorizeNet from "authorizenet";
// import { APIContracts, APIControllers } from "authorizenet";
// import configs from "../../../../constant";

// export async function POST(request) {
//   try {
//     // Log the request body for debugging
//     console.log("start me");

//     console.log("start me 2nd tradetai ke pahle");

//     // Parse the JSON data from the request
//     const { travelerInfo, cardDetails, billingInfo } = await request.json();
//     console.log({ travelerInfo, cardDetails, billingInfo }, "JSON DATA BACKEND");

//     console.log("start me 3nd tradetai ke baad");

//     console.log("Traveler Data:", travelerInfo);
//     console.log("Card Details:", cardDetails);
//     console.log("Billing Info:", billingInfo);

//     // Payment Processing with Authorize.Net
//     const merchantAuthenticationType =
//       new APIContracts.MerchantAuthenticationType();
//     merchantAuthenticationType.setName(configs.apiLoginKey);
//     merchantAuthenticationType.setTransactionKey(configs.transactionKey);

//     // Credit Card information
//     const creditCard = new APIContracts.CreditCardType();
//     creditCard.setCardNumber(cardDetails.cardNo);
//     creditCard.setExpirationDate(
//       cardDetails.expiry.month + cardDetails.expiry.year
//     ); // MMYYYY format
//     creditCard.setCardCode(`${cardDetails.cvv}`);

//     const paymentType = new APIContracts.PaymentType();
//     paymentType.setCreditCard(creditCard);

//     // Billing Information
//     var billTo = new APIContracts.CustomerAddressType();
//     billTo.setFirstName(`${travelerInfo.firstName}`);
//     billTo.setLastName(`${travelerInfo.lastName}`);
//     billTo.setCompany("Souveniropolis");
//     billTo.setAddress(`${billingInfo.address}`);
//     billTo.setCity(`${billingInfo.city}`);
//     billTo.setState(`${billingInfo.state}`);
//     billTo.setZip(`${billingInfo.postalCode}`);
//     billTo.setCountry(`${billingInfo.country}`);

//     // Order details (dynamic invoice number)
//     const orderDetails = new APIContracts.OrderType();
//     orderDetails.setInvoiceNumber("INV-" + new Date().getTime()); // Dynamic Invoice Number
//     orderDetails.setDescription(
//       "Flight Reservation for " +
//         `${travelerInfo.firstName}` +
//         " " +
//         `${travelerInfo.lastName}`
//     );

//     // Transaction details (example amount)
//     const transactionRequestType = new APIContracts.TransactionRequestType();
//     transactionRequestType.setTransactionType(
//       APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
//     );
//     transactionRequestType.setPayment(paymentType);
//     transactionRequestType.setAmount(100); // Example amount, replace with actual flight amount
//     transactionRequestType.setOrder(orderDetails);
//     transactionRequestType.setBillTo(billTo);

//     // Create transaction request
//     const createRequest = new APIContracts.CreateTransactionRequest();
//     createRequest.setMerchantAuthentication(merchantAuthenticationType);
//     createRequest.setTransactionRequest(transactionRequestType);

//     const ctrl = new APIControllers.CreateTransactionController(
//       createRequest.getJSON()
//     );

//     // Return a Promise to ensure the handler doesn't exit early
//     const apiResponse = await new Promise((resolve, reject) => {
//       ctrl.execute(function () {
//         const apiResponse = ctrl.getResponse();
//         if (apiResponse != null) {
//           resolve(apiResponse);
//         } else {
//           reject(new Error("No response from payment gateway"));
//         }
//       });
//     });

//     // Process the API response
//     const response = new APIContracts.CreateTransactionResponse(apiResponse);
//     console.log(response, "response");

//     if (
//       response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK
//     ) {
//       // Transaction successful
//       return new Response(
//         JSON.stringify({
//           success: true,
//           message: "Transaction Successful",
//           transactionId: response.getTransactionResponse().getTransId(),
//         }),
//         { status: 200 }
//       );
//     } else {
//       // Handle transaction failure
//       return new Response(
//         JSON.stringify({
//           success: false,
//           message: "Transaction Failed",
//         }),
//         { status: 400 }
//       );
//     }
//   } catch (error) {
//     // Log detailed error for debugging
//     console.error("Error processing flight reservation:", error);
//     return new Response(
//       JSON.stringify({
//         success: false,
//         message: "Internal Server Error",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }

import * as AuthorizeNet from "authorizenet";
import { APIContracts, APIControllers } from "authorizenet";
import configs from "../../../../../constant";

export async function POST(request) {
  try {
    console.log("start me");

    const { travelerInfo, cardDetails, billingInfo, contactInfo } =
      await request.json();
    console.log(
      { travelerInfo, cardDetails, billingInfo, contactInfo },
      "JSON DATA BACKEND"
    );

    // Payment Processing with Authorize.Net
    const merchantAuthenticationType =
      new APIContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(configs.apiLoginKey);
    merchantAuthenticationType.setTransactionKey(configs.transactionKey);
    console.log(configs.apiLoginKey, "apiLoginKey");
    console.log(configs.transactionKey, "transactionKey");

    //Credit Card information
    const creditCard = new APIContracts.CreditCardType();
    creditCard.setCardNumber(`${cardDetails.cardNo}`);
    creditCard.setExpirationDate(
      `${cardDetails.expiry.month}${cardDetails.expiry.year.slice(-2)}`
    );
    creditCard.setCardCode(`${cardDetails.expiry.cvv}`);

    // creditCard.setCardNumber("4242424242424242");
    // creditCard.setExpirationDate("0842");
    // creditCard.setCardCode("999");

    const paymentType = new APIContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    // Billing Information
    var billTo = new APIContracts.CustomerAddressType();
    billTo.setFirstName(`${travelerInfo.firstName}`);
    billTo.setLastName(`${travelerInfo.lastName}`);
    billTo.setCompany("Souveniropolis");
    billTo.setAddress(`${billingInfo.address}`);
    billTo.setCity(`${billingInfo.city}`);
    billTo.setState(`${billingInfo.state}`);
    billTo.setZip(`${billingInfo.postalCode}`);
    billTo.setCountry(`${billingInfo.country}`);

    // Order details (dynamic invoice number)
    const orderDetails = new APIContracts.OrderType();
    orderDetails.setInvoiceNumber("INV-" + new Date().getTime()); // Dynamic Invoice Number
    orderDetails.setDescription(
      "Flight Reservation for " +
        `${travelerInfo.firstName}` +
        " " +
        `${travelerInfo.lastName}`
    );

    // Transaction details (example amount)
    const transactionRequestType = new APIContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(
      APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
    );
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(100); // Example amount, replace with actual flight amount
    transactionRequestType.setOrder(orderDetails);
    transactionRequestType.setBillTo(billTo);
    // Customer Request
    var customer = new APIContracts.CustomerDataType();
    customer.setEmail(`${contactInfo.email}`);

    // Attach customer email for receipt
    // Create transaction request
    const createRequest = new APIContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);
    transactionRequestType.setCustomer(customer);
    const ctrl = new APIControllers.CreateTransactionController(
      createRequest.getJSON()
    );

    const apiResponse = await new Promise((resolve, reject) => {
      ctrl.execute(function () {
        const apiResponse = ctrl.getResponse();
        if (apiResponse != null) {
          resolve(apiResponse);
        } else {
          reject(new Error("No response from payment gateway"));
        }
      });
    });

    const response = new APIContracts.CreateTransactionResponse(apiResponse);

    if (
      response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK
    ) {
      // Transaction successful
      return new Response(
        JSON.stringify({
          success: true,
          message: "Transaction Successful",
          transactionId: response.getTransactionResponse().getTransId(),
        }),
        { status: 200 }
      );
    } else {
      // Log detailed error messages from Authorize.Net response
      const messages = response.getMessages();
      let errorMessages = [];

      if (messages && messages.getMessage()) {
        const messageArray = messages.getMessage();
        messageArray.forEach((message) => {
          errorMessages.push(
            `Code: ${message.getCode()}, Text: ${message.getText()}`
          );
        });
      }

      // Return detailed error messages
      return new Response(
        JSON.stringify({
          success: false,
          message: "Transaction Failed",
          errorDetails: errorMessages, // Detailed error information
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing flight reservation:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
