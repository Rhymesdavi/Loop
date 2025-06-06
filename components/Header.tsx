import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropdownList from "./DropdownList";
import RecordScreen from "./RecordScreen";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <div className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={"/assets/images/dummy.jpg"}
              width={66}
              height={66}
              alt="user"
              className="rounded-full"
            />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              width={16}
              height={16}
              alt="upload"
            />
            <span>Upload a video</span>
          </Link>
          <RecordScreen/>
        </aside>
      </section>

      <section className="search-filter">
        <div className="search">
            <input
                type="text"
                placeholder="Search for videos, tags, folders..."
            />
            <Image src="/assets/icons/search.svg" width={16} height={16} alt="search" />
        </div>

        <DropdownList />
      </section>
    </div>
  );
};

export default Header;
