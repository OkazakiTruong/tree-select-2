import React from "react";
import TreeNode from "./TreeNode";

export default function Tree({ treeData }) {
  return (
    <ul>
      {treeData.map((data) => {
        <TreeNode treeData={treeData} />;
      })}
    </ul>
  );
}
