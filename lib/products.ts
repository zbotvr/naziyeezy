export interface Product {
  id: string;
  name: string;
  image: string;
}

// Product images were generated with Midjourney
// and are stored in a public Vercel Blob storage bucket
export const products: Product[] = [
  {
    id: 'bully-album-01',
    name: 'BULLY',
    image:
      'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%223c6b4c8e4eca1d6319f42b2c05536831.833x833x1.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-02-10T06%3A23%3A23.552Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F84a0166f5f4c4bfe%2F3c6b4c8e4eca1d6319f42b2c05536831.833x833x1.jpg%3FExpires%3D1833776604%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DxVJuT405R0yFqSHDz89sgBQMhj2FIvcnDiKK1g3c8qwd5gug-RQUEXYXB2wDEjCH1CemJx~BwJkBzo6OTjNd~-moIbk-uA5FMwBC73p1-YT5fHZqQCMvgm-wSyP3Okwd9T2XXzYhPXmIt81LdKfbUID1WG4aj4H2mNj1pHa7y-ckNcXYcs4XCjFWPFkfo~ONWfxm~aDO~0cTfM9tTTFlEBL6PD58PQEQbWIrP0b3JGrj3l1ileS-EPxSDpaz1vqzn5Q~yHzJkpJIqpQjYz7WkqzWfJZe7KU4KK~99o27IZPQuW9igkY2CldVbZMjdK9HHXuW7aHSFeaZqac9~DIXbA__%22%7Dr-Id=K2ZIVPTIP2VGHC&Signature=xVJuT405R0yFqSHDz89sgBQMhj2FIvcnDiKK1g3c8qwd5gug-RQUEXYXB2wDEjCH1CemJx~BwJkBzo6OTjNd~-moIbk-uA5FMwBC73p1-YT5fHZqQCMvgm-wSyP3Okwd9T2XXzYhPXmIt81LdKfbUID1WG4aj4H2mNj1pHa7y-ckNcXYcs4XCjFWPFkfo~ONWfxm~aDO~0cTfM9tTTFlEBL6PD58PQEQbWIrP0b3JGrj3l1ileS-EPxSDpaz1vqzn5Q~yHzJkpJIqpQjYz7WkqzWfJZe7KU4KK~99o27IZPQuW9igkY2CldVbZMjdK9HHXuW7aHSFeaZqac9~DIXbA__',
  },
  {
    
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
