import React from "react";
import { TreeSelectContainer } from "./TreeSelect/TreeSelectContainer";

let data = [
  {
    title: "tieu de 0",
    id: 0,
    parentId: null,
  },
  {
    title: "tieu de 1",
    id: 1,
    parentId: null,
  },
  {
    title: "tieu de 1.0",
    id: 2,
    parentId: 1,
  },
  {
    title: "tieu de 1.1",
    id: 3,
    parentId: 1,
  },
  {
    title: "tieu de 1.2",
    id: 4,
    parentId: 1,
  },
  {
    title: "tieu de 1.2.0",
    id: 7,
    parentId: 4,
  },
  {
    title: "tieu de 1.2.1",
    id: 8,
    parentId: 4,
  },
  {
    title: "tieu de 1.2.2",
    id: 9,
    parentId: 4,
  },
  {
    title: "tieu de 1.2.2.1",
    id: 10,
    parentId: 9,
  },
  {
    title: "tieu de 0.1",
    id: 5,
    parentId: 0,
  },
  {
    title: "tieu de 0.2",
    id: 6,
    parentId: 0,
  },
];
export default function App() {
  const getNewDataStructure = (parentList) => {
    return parentList.map((parent) => {
      let childrenList = data.filter((item) => item.parentId === parent.id);
      if (childrenList.length) {
        parent["children"] = childrenList;
        getNewDataStructure(childrenList);
      }
      return parent;
    });
  };
  return (
    <div>
      <TreeSelectContainer data={data} />
    </div>
  );
}
