import React, { useCallback, useEffect, useState } from "react";
import Tree from "./Tree";
// import "./style.css";
import "./style.less";
import { useRecoilState } from "recoil";
import { treeAtom } from "../recoil/atoms/treeAtoms";
import { cloneFunction } from "../utils/deepClone";

export const TreeSelectContainer = () => {
  const [data, setData] = useRecoilState(treeAtom);
  const [cloneData, setCloneData] = useState([]);
  const [treeData, setTreeData] = useState([]);

  const getNewDataStructure = useCallback(
    (parentList) => {
      return parentList.map((parent) => {
        let childrenList = cloneData.filter(
          (item) => item.parentId === parent.id
        );
        if (childrenList.length) {
          childrenList = getNewDataStructure(childrenList);
          parent["children"] = childrenList;
        }
        return parent;
      });
    },
    [cloneData]
  );

  const checkAllData = (node, arr) => {
    return arr.map((parent) => {
      parent.checked = node.checked;
      if (parent?.children) {
        checkAllData(node, parent.children);
      }
      return parent;
    });
  };

  const checkChildData = (arr) => {
    return arr.map((parent) => {
      if (parent?.children) {
        const listChild = parent.children;
        checkChildData(listChild);
        parent.checked = listChild.every((item) => item.checked);
        console.log(parent);
        if (!parent.checked) {
          parent.pending = listChild.some(
            (item) => item?.pending || item.checked
          );
        } else {
          parent.pending = false;
        }
      }
      return parent;
    });
  };

  const handleChangeData = useCallback(
    (node) => {
      let newUpdatedArr = cloneData.map((item) => {
        if (item.id === node.id) {
          item = node;
        } else {
          item.titleActive = false;
        }
        return item;
      });
      if (node?.children) {
        newUpdatedArr = newUpdatedArr.map((item) => {
          item.id === node.id &&
            (item.children = checkAllData(item, item.children));
          return item;
        });
      }
      console.log(newUpdatedArr);
      setData(newUpdatedArr);
    },
    [cloneData]
  );
  useEffect(() => {
    setCloneData(cloneFunction(data));
  }, [data]);

  useEffect(() => {
    const parentList = cloneData.filter((item) => item.parentId === null);
    let newArr = getNewDataStructure(parentList);
    newArr = checkChildData(newArr);
    console.log(newArr);
    setTreeData(newArr);
  }, [cloneData]);

  return (
    <div className="container">
      <Tree treeData={treeData} handleChangeData={handleChangeData} />
    </div>
  );
};
