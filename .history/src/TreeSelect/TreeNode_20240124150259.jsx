import React from "react";
import Tree from "./Tree";

export default function TreeNode({ node, handleChangeData }) {
  const handleCheck = (e) => {
    node.checked = e.target.checked;
    handleChangeData(node);
  };
  return (
    <li>
      <span className="item-wrapper">
        {node?.children && <i class="fa-solid fa-caret-right"></i>}
        <label
          className="checkbox-custom"
          htmlFor={`checkbox${node.id}`}
        ></label>
        <input
          type="checkbox"
          id={`checkbox${node.id}`}
          checked={node.checked}
          onChange={handleCheck}
        />
        <span>{node.title}</span>
      </span>
      <ul className="ml-20">
        {node?.children && (
          <Tree treeData={node.children} handleChangeData={handleChangeData} />
        )}
      </ul>
    </li>
  );
}
