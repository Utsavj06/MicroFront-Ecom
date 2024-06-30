import React, { useRef, useEffect } from "react";
import { mount } from "Product_List/List";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })
    return <div ref={ref}/>
}