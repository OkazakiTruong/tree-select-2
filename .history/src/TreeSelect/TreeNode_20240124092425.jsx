import React from "react";

export default function TreeNode({ treeData }) {
  return (
    <li>
      <span>{treeData.title}</span>
    </li>
  );
}
