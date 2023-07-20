import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import styles from "./Localization.module.css";
import globeSvg from "@/Assets/world-globe-line-icon.svg";
import Image from "next/image";

const Localization = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    router.replace(`/${value}${pathname}`);
  };

  return (
    <div className={styles.container}>
      <Image src={globeSvg} alt="globe" className={styles.img} />
      <select
        defaultValue={locale}
        onChange={(e) => handleChange(e.target.value)}
        className={styles.select}
      >
        <option value="en">en</option>
        <option value="de">de</option>
      </select>
    </div>
  );
};

export default Localization;
