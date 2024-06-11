import React from "react";
import Tree from "./Tree";

export default function TreeNode({ treeData }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{treeData.title}</span>
      <ul className="ml-20">
        {treeData?.children && <Tree treeData={treeData.children} />}
      </ul>
    </li>
  );
}
