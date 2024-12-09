"use client";
import { memo, useState } from "react";

const categories = [
  { id: "all", label: "Tất cả" },
  { id: "hat", label: "Nón" },
  { id: "shirt", label: "Áo" },
  { id: "bag", label: "Túi" },
];
const CategoryList = () => {
  const [categoryActive, setCategoryActive] = useState("all");

  const handleActiveCategory = (type: string) => () => setCategoryActive(type);
  return (
    <div className="flex items-center justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category ${
            categoryActive === category.id ? "category--active" : ""
          } sub-title--small h-10 px-5 flex items-center justify-center`}
          onClick={handleActiveCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default memo(CategoryList);
