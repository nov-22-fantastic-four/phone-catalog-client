export interface Phone {
  id: string,
  productId: number,
  name: string,
  namespaceId: string,
  capacityAvailable: string[],
  capacity: string,
  colorsAvailable: string[],
  priceRegular: number,
  priceDiscount: number,
  color: string,
  images: string[],
  description: Description[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[],
}

interface Description {
  title: string,
  text: string[]
}
