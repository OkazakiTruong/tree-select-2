import React from "react";
import { TreeSelectContainer } from "./TreeSelect/TreeSelectContainer";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <TreeSelectContainer />
    </RecoilRoot>
  );
}
