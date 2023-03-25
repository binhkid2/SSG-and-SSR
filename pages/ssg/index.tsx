import Link from "next/link";
import { formatRelative } from "date-fns";

export async function getStaticProps() {
    // Run API calls in parallel
    const productsResponse = await fetch("https://fakestoreapi.com/products");
    const products = await productsResponse.json();
    return {
      props: {
        product: products,
        timeOfLoad: new Date().toISOString(),
      },
    };
  }

  const SSG = ({ product, timeOfLoad }: { product: Array<{ id: number, title: string, description: string, price: number }>, timeOfLoad: string }) => {
    const relativeTimeOfLoad = formatRelative(Date.parse(timeOfLoad), new Date());
    return (
      <div className="mx-auto  w-3/4 my-16">
        <div className="my-8">
          <h2 className="text-6xl text-center">
            Products with Static Generation{" "}
          </h2>
          <p className="text-center">{relativeTimeOfLoad}</p>
        </div>
        {product.map((pr) => (
          <div
            className="border-2 shadow-sm border-gray-200 rounded p-3 my-4"
            key={pr.id}
          >
            <div className="space-y-2">
              <p className="font-bold"> Title: {pr.title}</p>
              <p> Description: {pr.description}</p>
              <p className="text-lg"> ${pr.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default SSG;

  