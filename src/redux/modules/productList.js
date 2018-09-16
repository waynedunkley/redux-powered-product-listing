const UPDATE_PRODUCTS_LIST = "UPDATE_PRODUCTS_LIST"

export const updateProductList = products => ({
  type: UPDATE_PRODUCTS_LIST,
  products,
})

export const handleUpdateProductList = () => dispatch => {
  dispatch(updateProductList())
}

const initialState = {
  pagination: 8,
  page: 1,
  items: [
    {
      id: 1,
      price: "$87.68",
      product_name: "Amitriptyline Hydrochloride",
      description: "synergize efficient metrics",
      product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff",
    },
    {
      id: 2,
      price: "$58.53",
      product_name: "Zicam",
      description: "repurpose world-class metrics",
      product_image: "http://dummyimage.com/345x342.jpg/dddddd/000000",
    },
    {
      id: 3,
      price: "$12.82",
      product_name: "Home Care Fluoride",
      description: "reinvent end-to-end relationships",
      product_image: "http://dummyimage.com/318x336.png/5fa2dd/ffffff",
    },
    {
      id: 4,
      price: "$55.33",
      product_name: "Amlodipine Besylate",
      description: "optimize visionary channels",
      product_image: "http://dummyimage.com/340x344.png/dddddd/000000",
    },
    {
      id: 5,
      price: "$30.22",
      product_name: "Cyclobenzaprine Hydrochloride",
      description: "reinvent back-end deliverables",
      product_image: "http://dummyimage.com/324x341.bmp/dddddd/000000",
    },
    {
      id: 6,
      price: "$72.06",
      product_name: "Buspirone HCl",
      description: "exploit dot-com communities",
      product_image: "http://dummyimage.com/303x315.png/cc0000/ffffff",
    },
    {
      id: 7,
      price: "$62.89",
      product_name: "BSS",
      description: "mesh compelling paradigms",
      product_image: "http://dummyimage.com/319x343.bmp/ff4444/ffffff",
    },
    {
      id: 8,
      price: "$39.19",
      product_name: "NuvaRing",
      description: "leverage distributed vortals",
      product_image: "http://dummyimage.com/302x307.jpg/dddddd/000000",
    },
    {
      id: 9,
      price: "$21.13",
      product_name: "TERCONAZOLE",
      description: "morph compelling infomediaries",
      product_image: "http://dummyimage.com/345x349.jpg/cc0000/ffffff",
    },
    {
      id: 10,
      price: "$12.92",
      product_name: "Rasuvo",
      description: "implement clicks-and-mortar infrastructures",
      product_image: "http://dummyimage.com/304x322.jpg/ff4444/ffffff",
    },
    {
      id: 11,
      price: "$78.81",
      product_name: "PAXIL",
      description: "implement back-end deliverables",
      product_image: "http://dummyimage.com/350x305.bmp/dddddd/000000",
    },
    {
      id: 12,
      price: "$72.76",
      product_name: "Clean Choice Alcohol Sanitizer",
      description: "brand transparent portals",
      product_image: "http://dummyimage.com/329x314.png/ff4444/ffffff",
    },
    {
      id: 13,
      price: "$67.38",
      product_name: "Topiramate",
      description: "mesh visionary initiatives",
      product_image: "http://dummyimage.com/313x300.bmp/cc0000/ffffff",
    },
    {
      id: 14,
      price: "$34.68",
      product_name: "Lentil",
      description: "extend B2B ROI",
      product_image: "http://dummyimage.com/310x310.bmp/5fa2dd/ffffff",
    },
    {
      id: 15,
      price: "$11.83",
      product_name: "Aveeno Baby Natural Protection Face",
      description: "redefine robust solutions",
      product_image: "http://dummyimage.com/328x346.jpg/dddddd/000000",
    },
    {
      id: 16,
      price: "$58.30",
      product_name: "CAPTOPRIL",
      description: "synthesize seamless methodologies",
      product_image: "http://dummyimage.com/340x330.jpg/cc0000/ffffff",
    },
    {
      id: 17,
      price: "$58.27",
      product_name: "Levora",
      description: "e-enable robust infomediaries",
      product_image: "http://dummyimage.com/311x327.jpg/dddddd/000000",
    },
    {
      id: 18,
      price: "$3.08",
      product_name: "Duloxetine",
      description: "envisioneer intuitive e-services",
      product_image: "http://dummyimage.com/334x307.jpg/dddddd/000000",
    },
  ],
}

export default function productList(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS_LIST:
      return {
        ...state,
      }
    default:
      return state
  }
}
