import Container from "@/themes/Container";

import MerchandiseItem from "@/components/MerchandiseItem";
import CategoryList from "./components/CategoryList";
import Faqs from "./components/Faqs";

const MerchandiseList = () => {
  return (
    <Container style="py-7 esm:pt-0 merchandise flex flex-col items-center">
      <div className="merchandise-list  esm:mt-12">
        <CategoryList />
        <div className="items grid grid-cols-3 esm:grid-cols-1 mt-12 justify-center gap-7">
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg"
            }
            category={"Album"}
            productName={"EP Từ Đây Từ Nay"}
            price={599000}
            id={6}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256404/pinTVMP1_baucid.jpg"
            }
            category={"Merch"}
            productName={"Pin TVMP"}
            price={149000}
            id={7}
          />

          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg"
            }
            category={"Từ Đây… Từ Nay…"}
            productName={"Túi Tote"}
            price={225000}
            stockStatus={"out-stock"}
            id={9}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/z6095929752842_19a8cd219f714d974007bb5ed8691029_meszcf.jpg"
            }
            category={"TDTN"}
            productName={"Khăn Bandana TDTN"}
            price={229000}
            // stockStatus={"out-stock"}
            id={5}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/2_gno5mi.jpg"
            }
            category={"TVMP"}
            productName={"Sổ Tay TDTN"}
            price={99000}
            // stockStatus={"out-stock"}
            id={10}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/3_odtyvr.jpg"
            }
            category={"TVMP"}
            productName={"Bộ dây TDTN"}
            price={99000}
            // stockStatus={"out-stock"}
            id={11}
          />
          <MerchandiseItem
            category={"Chín Muồi"}
            productName={"Chín Vừa Tee"}
            price={349000}
            id={8}
          />
        </div>
      </div>

      <Faqs />
    </Container>
  );
};

export default MerchandiseList;
