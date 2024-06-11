import React from "react";
import { TreeSelectContainer } from "./TreeSelectContainer";

export default function TreeNode({ treeData }) {
  return (
    <>
      <div>
        <span>{treeData.title}</span>
      </div>
      {/* {treeData?.children&& <TreeSelectContainer />} */}
    </>
  );
}
