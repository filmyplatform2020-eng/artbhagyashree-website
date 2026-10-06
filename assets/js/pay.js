/* ==========================================================================
   ART BHAGYASHREE STUDIO — Payment adapter
   ==========================================================================
   DESIGN: Static-demo friendly. `initPay` returns a Promise that resolves
   with a payment result. Today it runs a labelled SANDBOX simulation so the
   whole cart → checkout → confirmation flow is testable end-to-end without a
   payment provider.

   PRODUCTION SWITCH:
   1. Set CONFIG.provider to one of: 'razorpay' | 'cashfree' | 'backend'.
   2. Point `createOrderOnServer` at YOUR backend endpoint which:
        - creates an order intent server-side with the correct amount
        - verifies the webhook / callback signature
        - returns order_id, amount, currency, signature
   3. After server-side signature verification, the server issues the
      entitlement (course access / shipment tracking), NOT the client.
   4. Replace the `sandbox` branch below with the real provider SDK call.
   Do NOT accept a client-supplied "success" as payment proof in production.
   ========================================================================== */

(function () {
  "use strict";

  window.ABS = window.ABS || {};

  const CONFIG = {
    provider: "sandbox",      /* sandbox | razorpay | cashfree | backend */
    keyId: "",                /* e.g. Razorpay key_id — keep in env, not repo */
    apiBase: "",              /* your backend base URL */
    currency: "INR"
  };

  /* Real integration point — replace with your backend call. */
  function createOrderOnServer(order) {
    /* Example fetch to your backend:
    return fetch(CONFIG.apiBase + "/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: order.total, currency: CONFIG.currency, items: order.items })
    }).then((r) => r.json());
    */
    return Promise.resolve({
      order_id: "backend-order-" + Date.now(),
      amount: order.total,
      currency: CONFIG.currency
    });
  }

  /* Sandbox simulation — clearly labelled, no money moves. */
  function sandboxPay(order) {
    return new Promise((resolve) => {
      /* resolve immediately so the demo flow completes; in production this
         branch is replaced by the provider SDK (checkout.open). */
      setTimeout(() => {
        resolve({
          ok: true,
          provider: "sandbox",
          order_id: "sbx_" + Date.now(),
          transaction_id: "TXN" + Math.random().toString(36).slice(2, 10).toUpperCase(),
          message: "Sandbox payment simulated — no real charge."
        });
      }, 700);
    });
  }

  function initPay(order) {
    return createOrderOnServer(order).then((serverOrder) => {
      switch (CONFIG.provider) {
        case "sandbox":
        default:
          return sandboxPay(serverOrder);
        /* production cases:
        case "razorpay":
          return razorpayCheckout(serverOrder);
        case "cashfree":
          return cashfreeCheckout(serverOrder);
        case "backend":
          return redirectToBackendCheckout(serverOrder);
        */
      }
    });
  }

  window.ABS.initPay = initPay;
  window.ABS.payConfig = CONFIG;
})();
