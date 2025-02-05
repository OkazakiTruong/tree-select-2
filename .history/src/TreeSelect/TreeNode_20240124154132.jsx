import React, { useState } from "react";
import Tree from "./Tree";

export default function TreeNode({ node, handleChangeData }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCheck = (e) => {
    node.checked = e.target.checked;
    handleChangeData(node);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleActiveTitle = () => {
    node.titleActive = !node.titleActive;
    handleChangeData(node);
  };
  return (
    <li>
      <span className="item-wrapper">
        {node?.children && (
          <span className="ic-open-menu" onClick={handleOpen}>
            <i class={`fa-solid fa-caret-right ${isOpen && "open"}`}></i>
          </span>
        )}
        <label
          className={`checkbox-custom ${node.checked && "checked"} ${
            node?.pending && "pending"
          }`}
          htmlFor={`checkbox${node.id}`}
        >
          <span className="checkbox-tick">
            <i class="fa-solid fa-check"></i>
          </span>
        </label>
        <input
          type="checkbox"
          id={`checkbox${node.id}`}
          checked={node.checked}
          onChange={handleCheck}
        />
        <span className="checkbox-title" onClick={handleActiveTitle}>
          {node.title}
        </span>
      </span>
      <ul className={`ml-20 checkbox-children ${isOpen && "open"}`}>
        {node?.children && (
          <Tree treeData={node.children} handleChangeData={handleChangeData} />
        )}
      </ul>
    </li>
  );
}
