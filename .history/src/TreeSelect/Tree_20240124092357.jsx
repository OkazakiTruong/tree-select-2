import React from "react";
import TreeNode from "./TreeNode";

export default function Tree({ treeData }) {
  return (
    <ul>
      {treeData.map((data) => {
        return <TreeNode treeData={data} />;
      })}
    </ul>
  );
}
