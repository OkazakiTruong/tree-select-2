import React from "react";
import TreeNode from "./TreeNode";

export default function Tree({ treeData }) {
  return (
    <ul>
      {treeData.map((data) => {
        {
          console.log(data);
        }
        <TreeNode treeData={data} />;
      })}
    </ul>
  );
}
