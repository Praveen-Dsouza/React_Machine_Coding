export const fileData = {
  id: "root",
  name: "root",
  isFolder: true,
  child: [
    {
      id: "1",
      name: "public",
      isFolder: true,
      child: [
        {
          id: "1.1",
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: "2",
      name: "src",
      isFolder: true,
      child: [
        {
          id: "2.1",
          name: "components",
          isFolder: true,
          child: [],
        },
        {
          id: "2.2",
          name: "data-sets",
          isFolder: true,
          child: [
            {
              id: "2.2.1",
              name: "file-data.js",
              isFolder: false,
            },
            {
              id: "2.2.2",
              name: "new.js",
              isFolder: false,
            },
          ],
        },
        {
          id: "2.3",
          name: "App.js",
          isFolder: false,
        },
        {
          id: "2.4",
          name: "index.js",
          isFolder: false,
        },
      ],
    },
    {
      id: "3",
      name: "package.json",
      isFolder: false,
    },
  ],
};

export const tenureData = [10, 15, 20, 25, 30];

export const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered.</div>,
  },
];
