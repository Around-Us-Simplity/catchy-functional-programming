type NodeType = {
  dir: string;
  parent?: NodeType | null;
  child?: (NodeType | FileType)[];
};

type FileType = {
  filename: string;
  size: number;
};

const getCmd = (str: string) => str.slice(2, 4);

const getFileOrFolder = (str: string, parent: NodeType): NodeType | FileType => {
  const [first, second] = str.split(" ");
  return first === "dir" ? { dir: second, parent } : { filename: second, size: parseInt(first) };
};

const filterToFolder = (fileList: (NodeType | FileType)[]) => fileList.filter(val => "dir" in val) as NodeType[];

const isFileType = (node: NodeType | FileType): node is FileType => (node as FileType).size !== undefined;

export function getNodeByInput(lines: string[]) {
  const node: NodeType = {
    dir: "/",
    parent: null,
  };
  const len = lines.length;

  let i,
    currNode = node;

  for (i = 0; i < len; i++) {
    const line = lines[i];
    const cmd = getCmd(line);
    if (cmd === "cd") {
      switch (line.slice(5)) {
        case "..":
          if (!currNode.parent) throw new Error("no parent");
          currNode = currNode.parent;
          break;
        case "/":
          currNode = node;
          break;
        default:
          if (!currNode.child) throw new Error("has no child");
          try {
            currNode = filterToFolder(currNode.child).find(ch => ch.dir === line.slice(5))!;
          } catch {
            throw new Error("cannot find child");
          }
      }
    }
    if (cmd === "ls") {
      i++;
      currNode.child = [];
      while (i < len && getCmd(lines[i]) !== "cd") {
        currNode.child.push(getFileOrFolder(lines[i++], currNode));
      }
      if (i >= len) break;
      getCmd(lines[i]) === "cd" && i--;
    }
  }
  return node;
}

const getTotal = (node: NodeType): number =>
  !node.child
    ? 0
    : node.child.reduce((acc, ch) => (isFileType(ch) ? acc + ch.size : ch.dir ? acc + getTotal(ch) : acc), 0);

export const sumall = (node: NodeType, limit = 100000): number => {
  let total = 0;

  const temp = getTotal(node);
  if (temp < limit) {
    total += temp;
  }

  if (node.child) {
    for (const c of node.child) {
      if (!isFileType(c)) {
        total += sumall(c);
      }
    }
  }

  return total;
};

export const getSmallEnough = (node: NodeType) => {
  const total = getTotal(node);
  const remainSize = 70_000_000 - total;
  const arr: number[] = [];
  const getAllDir = (node: NodeType, fn: (nod: NodeType) => void): void =>
    node.child?.forEach(ch => !isFileType(ch) && ch.child && (fn(ch), getAllDir(ch, fn)));

  getAllDir(node, c => {
    const val = getTotal(c);
    remainSize + val > 30_000_000 && arr.push(val);
  });
  return arr.slice().sort((a, b) => a - b)[0];
};
