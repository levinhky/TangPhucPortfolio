import { formatPrice } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface MerchandiseItemProps {
  id?: number;
  image?: string;
  category?: string;
  productName?: string;
  price?: number;
  stockStatus?: string;
}

const MerchandiseItem = (props: MerchandiseItemProps) => {
  const {
    id = 1,
    image = "/aochinmuoi.png",
    category = "Danh mục sản phẩm",
    productName = "Tên sản phẩm",
    price = 10000,
    stockStatus = "in-stock",
  } = props;
  return (
    <div className="merchandise-item flex flex-col max-w-[360px] mb-5">
      <div className="m-auto">
        <Link href={`/merchandise/${id}`} className="image">
          <Image
            src={image}
            width={360}
            height={360}
            className="rounded-lg aspect-360/360"
            alt="ao"
          />
        </Link>
      </div>

      <div className="info">
        <h6 className="category">{category}</h6>
        <Link href={`/merchandise/${id}`}>
          <h2 className="product-name">{productName}</h2>
        </Link>
        <div
          className={`price ${
            stockStatus === "out-stock" ? "line-through" : ""
          }`}
        >
          {formatPrice(price)}
        </div>
      </div>
    </div>
  );
};

export default memo(MerchandiseItem);
