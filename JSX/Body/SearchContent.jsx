import React, { useState } from "react";
import SearchContent1 from "./SearchContent1";
import SearchContent2 from "./SearchContent2";
// import "../Styles/SearchContent.css"
import "../../CSS/Styles/SearchContent.css";
export default function SearchContent() {
    return (
        <div className="search-content">
            <SearchContent1 />
            <SearchContent2 />
        </div>
    );
}