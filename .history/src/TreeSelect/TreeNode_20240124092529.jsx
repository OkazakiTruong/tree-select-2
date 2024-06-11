import React from "react";
import Tree from "./Tree";

export default function TreeNode({ treeData }) {
  return (
    <li>
      <span>{treeData.title}</span>
      <ul>{treeData?.children && <Tree treeData={treeData.children} />}</ul>
    </li>
  );
}
