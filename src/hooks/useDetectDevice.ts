import { DEVICE } from "@/utils/constants";
import { useEffect, useState } from "react";

/**
 * should use this hook in lazy loading components
 * if not, cannot get true device at the first time render
 */
//TODO: We will not apply this hook in the future
//TODO: Should detect the device base on domain user enter, such as fb
//TODO: should change url user go to in mobile such as: m.example.com
const useDetectDevice = () => {
  const [device, setDevice] = useState<string>("");
  const [innerWidth, setInnerWidth] = useState(null);

  const handleResize = (innerWidth: any) => {
    setInnerWidth(innerWidth);
    setDevice(
      innerWidth >= 1024
        ? DEVICE.DESKTOP
        : innerWidth >= 768
        ? DEVICE.TABLET
        : DEVICE.MOBILE
    );
  };

  useEffect(() => {
    if (window) {
      handleResize(window.innerWidth);
      window.addEventListener("resize", (e: any) =>
        handleResize(e.target.innerWidth)
      );
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", (e: any) =>
          handleResize(e.target.innerWidth)
        );
      }
    };
  }, []);

  return {
    device,
    innerWidth,
  };
};

export default useDetectDevice;
