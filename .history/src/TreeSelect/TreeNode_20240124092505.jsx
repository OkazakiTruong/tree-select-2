import React from "react";
import Tree from "./Tree";

export default function TreeNode({ treeData }) {
  return (
    <li>
      <span>{treeData.title}</span>
      {treeData?.children && <Tree treeData={treeData.children} />}
    </li>
  );
}
