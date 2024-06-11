import React from "react";
import Tree from "./Tree";

export default function TreeNode({ treeData }) {
  return (
    <li>
      {treeData?.children && "down"}
      <label
        className="checkbox-custom"
        htmlFor={`checkbox${treeData.id}`}
      ></label>
      <input type="checkbox" id={`checkbox${treeData.id}`} />
      <span>{treeData.title}</span>
      <ul className="ml-20">
        {treeData?.children && <Tree treeData={treeData.children} />}
      </ul>
    </li>
  );
}
