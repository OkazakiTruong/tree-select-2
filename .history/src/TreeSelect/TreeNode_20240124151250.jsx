import React, { useState } from "react";
import Tree from "./Tree";

export default function TreeNode({ node, handleChangeData }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCheck = (e) => {
    node.checked = e.target.checked;
    handleChangeData(node);
  };
  return (
    <li>
      <span className="item-wrapper">
        {node?.children && (
          <span className="ic-open-menu">
            <i class="fa-solid fa-caret-right"></i>
          </span>
        )}
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
        <span className="checkbox-title">{node.title}</span>
      </span>
      <ul className={`ml-20 checkbox-children ${isOpen && "open"}`}>
        {node?.children && (
          <Tree treeData={node.children} handleChangeData={handleChangeData} />
        )}
      </ul>
    </li>
  );
}
