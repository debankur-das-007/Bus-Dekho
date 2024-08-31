import React from "react";
import NearYou from "./NearYou.jsx";
import "../../CSS/Styles/Body.css";
import SearchContent from "./SearchContent.jsx";
// export default function Body(props) {
export default function Body() {
    return (
        <>
            <SearchContent />
            <NearYou />
        </>
    )
}