import React from "react";
import TreeNode from "./TreeNode";

function Tree({ treeData, handleChangeData }) {
  console.log("render");
  return (
    <ul className="checkbox-container">
      {treeData.map((data) => {
        return (
          <TreeNode
            node={data}
            key={data.id}
            handleChangeData={handleChangeData}
          />
        );
      })}
    </ul>
  );
}
export default React.memo(Tree);
