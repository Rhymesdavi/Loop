"use client";
import Image from "next/image";
import { useState } from "react";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="curosr-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              width={14}
              height={14}
              alt="menu"
            />
            Most Recent
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            width={20}
            height={20}
            alt="arrow-down"
          />
        </div>
      </div>

      {isOpen && (
        <ul className="dropdown">
            {["Most recent", "Most liked"].map((option) => (
                <li key={option} className="list-item">{option}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
