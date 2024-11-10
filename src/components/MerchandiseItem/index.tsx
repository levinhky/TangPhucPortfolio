import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const MerchandiseItem = () => {
  return (
    <div className="merchandise-item flex flex-col">
      <Link href={"/merchandise/1"} className="image">
        <Image src={"/aochinmuoi.png"} width={400} height={400} alt="ao" />
      </Link>

      <div className="info">
        <h6 className="category">Danh mục sản phẩm</h6>
        <Link href={"/merchandise/1"}>
          <h2 className="product-name">
            Tên sản phẩm Tên sản phẩm Tên sản phẩm
          </h2>
        </Link>
        <div className="price">000.000đ</div>
      </div>
    </div>
  );
};

export default memo(MerchandiseItem);
