import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import IProduct from "../products/types";
import styles from "./featured.module.css";

export const CardFeatured: React.FC<IProduct> = ({ name, image }) => {
  return (
    <div className="flex flex-row justify-center">
      <div className={styles.featured}>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-black font-semibold m-6">
            {name.toUpperCase()}
          </h1>
          <button className="button">SHOP NOW</button>
        </div>
        <img src={image[0]} alt={name} className={styles.featuredImage} />
      </div>
    </div>
  );
};

export const CardProductFeatured: React.FC<IProduct> = ({
  name,
  price,
  image,
  description,
}) => {
  return (
    <Card className="mt-6 w-96 bg-white/10">
      <CardHeader color="blue-gray" className="relative h-56 mt-3">
        <img
          src={image[0]}
          alt="card-image"
          className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="white" className="mb-2">
          {name}
        </Typography>
        <Typography variant="h4" color="pink" className="mb-2">
          ${price}
        </Typography>
        <Typography className="text-white/50">{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <button className="button">Read More</button>
      </CardFooter>
    </Card>
  );
};
