import IProduct from "./types";

const ProductDetailCard = ({
  name,
  description,
  price,
  stock,
  image,
}: IProduct) => {
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 z-10">
      <div className=" lg:w-full md:w-1/2 w-full bg-white justify-center flex rounded-3xl">
        {/* Imágenes */}
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden h-50">
          <img className="w-full" alt="Outdoor product image" src={image[0]} />
          <img
            className="mt-6 w-full"
            alt="Outdoor product image"
            src="https://ae01.alicdn.com/kf/S219300ccf78e483a913239c5d38f5362l.jpg_640x640q90.jpg"
          />
        </div>

        {/* Imágenes (versión móvil) */}
        <div className="md:hidden">
          <img
            className="w-full"
            alt="Outdoor product image"
            src="https://i.ibb.co/N7HrMKP/outdoor-product-image-1.jpg"
          />
        </div>

        {/* Detalles del producto */}
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 h-2/6  content-center bg-gray-400 border-black border-4 ">
          {/* Título y descripción */}
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">Categoria</p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              {name}
            </h1>
          </div>

          {/* Opciones de color */}
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Colors</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                Forest Green with Orange Accents
              </p>
              <div className="w-6 h-6 bg-gradient-to-b from-green-600 to-yellow-400 ml-3 mr-4 cursor-pointer"></div>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Opciones de tamaño */}
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Size</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">
                One size
              </p>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Botón de agregar al carrito */}
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
            Add to Cart {`$${price}`}
          </button>

          {/* Detalles adicionales del producto */}
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {description}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Price: {price}
            </p>
            <p>Stock: {stock}</p>
          </div>

          {/* Sección de Envío y Devoluciones */}
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                // onClick={() => setShowShipping(!showShipping)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Shipping and Returns
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  aria-label="show or hide"
                >
                  <svg
                    // className={`transform ${
                    //   showShipping ? "rotate-180" : "rotate-0"
                    // }`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
              // className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ${
              //   showShipping ? "block" : "hidden"
              // }`}
              >
                We offer free shipping on all orders. Returns are accepted
                within 30 days of purchase, subject to conditions.
              </div>
            </div>
          </div>

          {/* Sección de Contacto */}
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                // onClick={() => setShowContact(!showContact)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Contact Us</p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  aria-label="show or hide"
                >
                  <svg
                    // className={`transform ${
                    //   showContact ? "rotate-180" : "rotate-0"
                    // }`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div>
                Have questions or need assistance? Contact our customer support
                team for help with your order.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
