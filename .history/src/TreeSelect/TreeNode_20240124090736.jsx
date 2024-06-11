import React from "react";
import { TreeSelectContainer } from "./TreeSelectContainer";

export default function TreeNode({ treeData }) {
  console.log(treeData.children);
  return (
    <li>
      <span>{treeData.title}</span>
      {treeData?.children && <TreeSelectContainer data={treeData.children} />}
    </li>
  );
}
