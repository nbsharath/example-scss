"use client";
import * as sass from "sass";
import { useEffect } from "react";

export async function logic(value: string) {
  if (value) {
    const compiledCSS = await sass.compileString("a {color: #663399}");
    console.log("compiled css", compiledCSS);
    return compiledCSS;
  }
}

export default function Component1() {
  useEffect(() => {
    async function init() {
      const compiledCSS = await logic("a {color: #663399}");
    }
    init();

    return () => {};
  }, []);

  return <div>css</div>;
}
