import React from "react";
import { TreeSelectContainer } from "./TreeSelectContainer";

export default function TreeNode({ treeData }) {
  return (
    <li>
      <span>{treeData.title}</span>
      {treeData?.children && <TreeSelectContainer data={treeData.children} />}
    </li>
  );
}
