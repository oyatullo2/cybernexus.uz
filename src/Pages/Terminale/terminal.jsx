import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Virtual fayl tizimi
const filesystem = {
  home: {
    user: {
      ctfs: {
        ctf1: {
          "readme.txt": "flag{welcome}",
          "hint.txt": "Use: cat readme.txt",
        },
        ctf2: {
          ".flag.txt": "flag{hidden}",
          "hint.txt": "Use: ls -a; cat .flag.txt",
        },
        ctf3: {
          "log.txt": "Log: flag{grep_it} at 12:00",
          "hint.txt": "Use: grep flag log.txt",
        },
        ctf4: {
          "part1.txt": "flag{com",
          "part2.txt": "bine}",
          "hint.txt": "Use: cat part1.txt part2.txt",
        },
        ctf5: {
          "challenge.txt": "ZmxhZ3tkZWNvZGV9",
          "hint.txt": "Use: base64 -d challenge.txt",
        },
        ctf6: {
          folder: { "flag.txt": "flag{folder}" },
          "hint.txt": "Use: cd folder; cat flag.txt",
        },
        ctf7: { "secret.txt": "flag{read}", "hint.txt": "Use: cat secret.txt" },
        ctf8: {
          "cipher.txt": "synt{cipher}",
          "hint.txt": "ROT13: synt means flag",
        },
        ctf9: {
          passwd: "user:flag{passwd}:1000:1000",
          "hint.txt": "Use: cat passwd",
        },
        ctf10: { "hint.txt": "Use: cat /root/flag.txt" },
        ctf11: { "notes.txt": "flag{note}", "hint.txt": "Use: cat notes.txt" },
        ctf12: {
          ".secret.txt": "flag{secret}",
          "hint.txt": "Use: ls -a; cat .secret.txt",
        },
        ctf13: {
          "data.txt": "Data: flag{find} at 13:00",
          "hint.txt": "Use: grep flag data.txt",
        },
        ctf14: {
          "half1.txt": "flag{jo",
          "half2.txt": "in}",
          "hint.txt": "Use: cat half1.txt half2.txt",
        },
        ctf15: {
          "encoded.txt": "ZmxhZ3tiYXNlNjR9",
          "hint.txt": "Use: base64 -d encoded.txt",
        },
        ctf16: {
          deep: { "flag.txt": "flag{deep}" },
          "hint.txt": "Use: cd deep; cat flag.txt",
        },
        ctf17: { "info.txt": "flag{info}", "hint.txt": "Use: cat info.txt" },
        ctf18: {
          "code.txt": "synt{rot13}",
          "hint.txt": "ROT13: synt means flag",
        },
        ctf19: {
          config: "user:flag{config}:1000:1000",
          "hint.txt": "Use: cat config",
        },
        ctf20: { "hint.txt": "Use: cat /etc/secret.txt" },
        ctf21: { "memo.txt": "flag{memo}", "hint.txt": "Use: cat memo.txt" },
        ctf22: {
          ".hidden.txt": "flag{stealth}",
          "hint.txt": "Use: ls -a; cat .hidden.txt",
        },
        ctf23: {
          "logs.txt": "Logs: flag{search} at 14:00",
          "hint.txt": "Use: grep flag logs.txt",
        },
        ctf24: {
          "chunk1.txt": "flag{me",
          "chunk2.txt": "rge}",
          "hint.txt": "Use: cat chunk1.txt chunk2.txt",
        },
        ctf25: {
          "hex.txt": "666c61677b6865787d",
          "hint.txt": "Use: xxd hex.txt; decode hex",
        },
        ctf26: {
          nested: { "flag.txt": "flag{nested}" },
          "hint.txt": "Use: cd nested; cat flag.txt",
        },
        ctf27: {
          "backup.txt": "flag{backup}",
          "hint.txt": "Use: cat backup.txt",
        },
        ctf28: {
          "crypt.txt": "ZmxhZ3tjcnlwdH0=",
          "hint.txt": "Use: base64 -d crypt.txt",
        },
        ctf29: {
          shadow: "user:flag{shadow}:1000:1000",
          "hint.txt": "Use: cat shadow",
        },
        ctf30: { "hint.txt": "Use: cat /root/hidden.txt" },
      },
    },
  },
  root: { "flag.txt": "flag{root}", "hidden.txt": "flag{elite}" },
  etc: {
    passwd: "root:x:0:0:root:/root:/bin/bash",
    "secret.txt": "flag{final}",
  },
};

export const Terminal = () => {
  const [input, setInput] = useState(" ");
  const [output, setOutput] = useState([
    "Hacker CTF Terminaliga xush kelibsiz. Buyruqlar uchun `help` yozing.",
  ]);
  const [currentDir, setCurrentDir] = useState("/home/user");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabCount, setTabCount] = useState(0);
  const [aliases, setAliases] = useState({});
  const terminalRef = useRef(null);

  // Copy-paste’ni taqiqlash
  useEffect(() => {
    const prevent = (e) => e.preventDefault();
    document.addEventListener("copy", prevent);
    document.addEventListener("paste", prevent);
    document.addEventListener("contextmenu", prevent);
    return () => {
      document.removeEventListener("copy", prevent);
      document.removeEventListener("paste", prevent);
      document.removeEventListener("contextmenu", prevent);
    };
  }, []);

  // Matrix yomg‘iri effekti
  useEffect(() => {
    const matrix = document.querySelector(".matrix-rain");
    if (!matrix) return;
    for (let i = 0; i < 100; i++) {
      const span = document.createElement("span");
      span.textContent = String.fromCharCode(0x30a0 + Math.random() * 96);
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDelay = Math.random() * 5 + "s";
      matrix.appendChild(span);
    }
    return () => {
      matrix.innerHTML = "";
    };
  }, []);

  // Terminalni oxiriga avtomatik aylantirish
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Jild yoki faylni olish
  const getNode = (path) => {
    if (!path || path === "/") return filesystem;
    const parts = path.split("/").filter((p) => p);
    let node = filesystem;
    for (const part of parts) {
      if (!node[part]) return null;
      node = node[part];
    }
    return node;
  };

  // Yo‘lni hal qilish
  const resolvePath = (path) => {
    if (!path) return currentDir;
    const base = path.startsWith("/") ? "" : currentDir;
    const parts = `${base}/${path}`.split("/").filter((p) => p);
    const result = [];
    for (const part of parts) {
      if (part === ".") continue;
      if (part === "..") {
        result.pop();
      } else {
        result.push(part);
      }
    }
    const fullPath = "/" + result.join("/");
    return fullPath || "/";
  };

  // Fayl yoki jild mavjudligini tekshirish
  const pathExists = (path) => {
    if (!path || path === "/") return true;
    const parentPath = path.substring(0, path.lastIndexOf("/") || 1) || "/";
    const name = path.split("/").pop();
    const parent = getNode(parentPath);
    return parent && parent[name] !== undefined;
  };

  // Joriy jildni qisqartirish (~ bilan)
  const getPromptDir = () => {
    if (currentDir === "/home/user") return "~";
    if (currentDir.startsWith("/home/user/")) return "~" + currentDir.slice(10);
    return currentDir;
  };

  // Autofill uchun mosliklarni topish
  const getCompletions = (partial, dirPath) => {
    const node = getNode(dirPath);
    if (!node || typeof node !== "object") return [];
    const lastSlash = partial.lastIndexOf("/");
    const prefix = lastSlash >= 0 ? partial.substring(0, lastSlash) : "";
    const base = lastSlash >= 0 ? partial.substring(lastSlash + 1) : partial;
    const resolvedDir = prefix ? resolvePath(prefix) : dirPath;
    const dirNode = getNode(resolvedDir);
    if (!dirNode || typeof dirNode !== "object") return [];
    return Object.keys(dirNode)
      .filter((name) => name.startsWith(base))
      .map((name) => (prefix ? `${prefix}/${name}` : name))
      .sort();
  };

  // Fayl uchun statistika (wc, head, tail uchun)
  const getFileStats = (content) => {
    const lines = content.split("\n");
    const words = content.split(/\s+/).filter((w) => w).length;
    const chars = content.length;
    return { lines: lines.length, words, chars };
  };

  // Buyruqlarni qayta ishlash
  const handleCommand = (cmd) => {
    let newOutput = [...output];
    let command = cmd.trim();
    let args = command.split(/\s+/);
    const originalCommand = args[0];

    // Aliasni qayta ishlash
    if (
      aliases[originalCommand] &&
      originalCommand !== "alias" &&
      originalCommand !== "unalias"
    ) {
      command = aliases[originalCommand] + " " + args.slice(1).join(" ");
      args = command.split(/\s+/);
    }

    const cmdName = args[0];
    args = args.slice(1);

    newOutput.push(`┌──(cybernexus㉿cybernexus)-[${getPromptDir()}]`);
    newOutput.push(`└─$ ${cmd}`);

    switch (cmdName) {
      case "help":
        newOutput.push(
          "Mavjud buyruqlar: ls, cd, cat, whoami, pwd, clear, base64, grep, sudo, mkdir, touch, rm, echo, find, mv, cp, history, man, alias, unalias, which, wc, head, tail, nano, strings, xxd"
        );
        break;
      case "ls":
      case "dir":
        {
          const lsPath = args[0] ? resolvePath(args[0]) : currentDir;
          const node = getNode(lsPath);
          if (!node || typeof node !== "object") {
            newOutput.push(
              `ls: cannot access '${args[0] || ""}': No such file or directory`
            );
          } else {
            const showHidden = args.includes("-a");
            const showDetails = args.includes("-l");
            const files = Object.keys(node)
              .filter((f) => showHidden || !f.startsWith("."))
              .sort();
            if (showDetails) {
              files.forEach((file) => {
                const isDir = typeof node[file] === "object";
                newOutput.push(
                  `${isDir ? "drwxr-xr-x" : "-rw-r--r--"}  user  user  ${file}`
                );
              });
            } else {
              const columns = Math.max(1, Math.floor((files.length + 3) / 4));
              for (let i = 0; i < columns; i++) {
                const row = files
                  .slice(i * 4, i * 4 + 4)
                  .map((f) => f.padEnd(20))
                  .join("");
                if (row.trim()) newOutput.push(row);
              }
              if (files.length === 0) newOutput.push("");
            }
          }
        }
        break;
      case "cd":
        {
          const newDir = resolvePath(args[0] || "/home/user");
          if (pathExists(newDir)) {
            const node = getNode(newDir);
            if (node && typeof node === "object") {
              setCurrentDir(newDir);
            } else {
              newOutput.push(`cd: ${args[0] || ""}: Not a directory`);
            }
          } else {
            newOutput.push(`cd: ${args[0] || ""}: No such file or directory`);
          }
        }
        break;
      case "cat":
        if (!args[0]) {
          newOutput.push("cat: missing file operand");
          break;
        }
        args.forEach((arg) => {
          const filePath = resolvePath(arg);
          if (!pathExists(filePath)) {
            newOutput.push(`cat: ${arg}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (node && typeof node !== "object") {
            newOutput.push(node);
          } else {
            newOutput.push(`cat: ${arg}: Is a directory`);
          }
        });
        break;
      case "whoami":
        newOutput.push("cybernexus");
        break;
      case "pwd":
        newOutput.push(currentDir);
        break;
      case "clear":
        newOutput = [];
        break;
      case "base64":
        if (args[0] === "-d" && args[1]) {
          try {
            newOutput.push(atob(args[1]));
          } catch {
            newOutput.push("base64: invalid input");
          }
        } else if (args[0]) {
          try {
            newOutput.push(btoa(args.join(" ")));
          } catch {
            newOutput.push("base64: encoding error");
          }
        } else {
          newOutput.push("Usage: base64 [-d] [string]");
        }
        break;
      case "grep":
        if (args.length < 2) {
          newOutput.push("grep: missing pattern or file");
          break;
        }
        {
          const pattern = args[0];
          const filePath = resolvePath(args[1]);
          if (!pathExists(filePath)) {
            newOutput.push(`grep: ${args[1]}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (node && typeof node !== "object") {
            if (node.includes(pattern)) {
              newOutput.push(node);
            } else {
              newOutput.push("");
            }
          } else {
            newOutput.push(`grep: ${args[1]}: Is a directory`);
          }
        }
        break;
      case "sudo":
        newOutput.push(
          "[sudo] password for cybernexus: (try cat /root/flag.txt, /etc/secret.txt, or /root/hidden.txt)"
        );
        break;
      case "mkdir":
        if (!args[0]) {
          newOutput.push("mkdir: missing operand");
          break;
        }
        {
          const dirPath = resolvePath(args[0]);
          const parentPath =
            dirPath.substring(0, dirPath.lastIndexOf("/") || 1) || "/";
          const dirName = dirPath.split("/").pop();
          if (!pathExists(parentPath)) {
            newOutput.push(
              `mkdir: cannot create directory '${args[0]}': No such file or directory`
            );
            return;
          }
          const parent = getNode(parentPath);
          if (parent[dirName]) {
            newOutput.push(
              `mkdir: cannot create directory '${args[0]}': File exists`
            );
          } else {
            parent[dirName] = {};
            newOutput.push("");
          }
        }
        break;
      case "touch":
        if (!args[0]) {
          newOutput.push("touch: missing operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          const parentPath =
            filePath.substring(0, filePath.lastIndexOf("/") || 1) || "/";
          const fileName = filePath.split("/").pop();
          if (!pathExists(parentPath)) {
            newOutput.push(
              `touch: cannot touch '${args[0]}': No such file or directory`
            );
            return;
          }
          const parent = getNode(parentPath);
          if (parent[fileName]) {
            newOutput.push(`touch: cannot touch '${args[0]}': File exists`);
          } else {
            parent[fileName] = "";
            newOutput.push("");
          }
        }
        break;
      case "rm":
        if (!args[0]) {
          newOutput.push("rm: missing operand");
          break;
        }
        {
          const rmPath = resolvePath(args[0]);
          const parentPath =
            rmPath.substring(0, rmPath.lastIndexOf("/") || 1) || "/";
          const rmName = rmPath.split("/").pop();
          if (!pathExists(rmPath)) {
            newOutput.push(
              `rm: cannot remove '${args[0]}': No such file or directory`
            );
            return;
          }
          const parent = getNode(parentPath);
          if (typeof parent[rmName] === "object" && !args.includes("-r")) {
            newOutput.push(`rm: cannot remove '${args[0]}': Is a directory`);
          } else {
            delete parent[rmName];
            newOutput.push("");
          }
        }
        break;
      case "echo":
        if (!args[0]) {
          newOutput.push("echo: missing operand");
          break;
        }
        if (args[1] === ">" && args[2]) {
          const filePath = resolvePath(args[2]);
          const parentPath =
            filePath.substring(0, filePath.lastIndexOf("/") || 1) || "/";
          const fileName = filePath.split("/").pop();
          if (!pathExists(parentPath)) {
            newOutput.push(
              `echo: cannot write to '${args[2]}': No such file or directory`
            );
            return;
          }
          const parent = getNode(parentPath);
          parent[fileName] = args[0];
          newOutput.push("");
        } else {
          newOutput.push(args.join(" "));
        }
        break;
      case "find":
        if (!args[0]) {
          newOutput.push("find: missing path");
          break;
        }
        {
          const findPath = resolvePath(args[0]);
          if (!pathExists(findPath)) {
            newOutput.push(`find: '${args[0]}': No such file or directory`);
            return;
          }
          const node = getNode(findPath);
          if (!node || typeof node !== "object") {
            newOutput.push(`find: '${args[0]}': Not a directory`);
            return;
          }
          const findFiles = (dir, prefix = "") => {
            const results = [];
            for (const [name, value] of Object.entries(dir)) {
              results.push(`${prefix}${name}`);
              if (typeof value === "object") {
                results.push(...findFiles(value, `${prefix}${name}/`));
              }
            }
            return results.sort();
          };
          newOutput.push(findFiles(node, `${findPath}/`).join("\n") || "");
        }
        break;
      case "mv":
        if (args.length < 2) {
          newOutput.push("mv: missing source or destination");
          break;
        }
        {
          const srcPath = resolvePath(args[0]);
          const destPath = resolvePath(args[1]);
          const srcParentPath =
            srcPath.substring(0, srcPath.lastIndexOf("/") || 1) || "/";
          const srcName = srcPath.split("/").pop();
          const destParentPath =
            destPath.substring(0, destPath.lastIndexOf("/") || 1) || "/";
          const destName = destPath.split("/").pop();
          if (!pathExists(srcPath)) {
            newOutput.push(
              `mv: cannot stat '${args[0]}': No such file or directory`
            );
            return;
          }
          if (!pathExists(destParentPath)) {
            newOutput.push(
              `mv: cannot move '${args[0]}' to '${args[1]}': No such file or directory`
            );
            return;
          }
          const srcParent = getNode(srcParentPath);
          const destParent = getNode(destParentPath);
          if (destParent[destName]) {
            newOutput.push(
              `mv: cannot move '${args[0]}' to '${args[1]}': File exists`
            );
          } else {
            destParent[destName] = srcParent[srcName];
            delete srcParent[srcName];
            newOutput.push("");
          }
        }
        break;
      case "cp":
        if (args.length < 2) {
          newOutput.push("cp: missing source or destination");
          break;
        }
        {
          const srcPath = resolvePath(args[0]);
          const destPath = resolvePath(args[1]);
          const srcParentPath =
            srcPath.substring(0, srcPath.lastIndexOf("/") || 1) || "/";
          const srcName = srcPath.split("/").pop();
          const destParentPath =
            destPath.substring(0, destPath.lastIndexOf("/") || 1) || "/";
          const destName = destPath.split("/").pop();
          if (!pathExists(srcPath)) {
            newOutput.push(
              `cp: cannot stat '${args[0]}': No such file or directory`
            );
            return;
          }
          if (!pathExists(destParentPath)) {
            newOutput.push(
              `cp: cannot copy '${args[0]}' to '${args[1]}': No such file or directory`
            );
            return;
          }
          const srcParent = getNode(srcParentPath);
          const destParent = getNode(destParentPath);
          if (destParent[destName]) {
            newOutput.push(
              `cp: cannot copy '${args[0]}' to '${args[1]}': File exists`
            );
          } else {
            destParent[destName] = JSON.parse(
              JSON.stringify(srcParent[srcName])
            );
            newOutput.push("");
          }
        }
        break;
      case "history":
        newOutput.push(...history.map((cmd, i) => `${i + 1}  ${cmd}`));
        break;
      case "man":
        if (!args[0]) {
          newOutput.push("man: missing command name");
          break;
        }
        const manuals = {
          ls: "ls - list directory contents\nOptions: -a (all files), -l (long format)",
          cd: "cd - change directory\nUsage: cd [directory]",
          cat: "cat - display file contents\nUsage: cat <file>",
          whoami: "whoami - display current user",
          pwd: "pwd - print working directory",
          clear: "clear - clear terminal screen",
          base64: "base64 - encode/decode base64\nUsage: base64 [-d] <string>",
          grep: "grep - search text in files\nUsage: grep <pattern> <file>",
          sudo: "sudo - execute command as root (mocked)",
          mkdir: "mkdir - create directory\nUsage: mkdir <directory>",
          touch: "touch - create empty file\nUsage: touch <file>",
          rm: "rm - remove files or directories\nOptions: -r (recursive)",
          echo: "echo - display text\nUsage: echo <text> [> <file>]",
          find: "find - search for files\nUsage: find <directory>",
          mv: "mv - move or rename files\nUsage: mv <source> <destination>",
          cp: "cp - copy files\nUsage: cp <source> <destination>",
          history: "history - show command history",
          man: "man - display manual\nUsage: man <command>",
          alias:
            "alias - create command alias\nUsage: alias <name>='<command>'",
          unalias: "unalias - remove alias\nUsage: unalias <name>",
          which: "which - show command location\nUsage: which <command>",
          wc: "wc - word, line, character count\nUsage: wc <file>",
          head: "head - display first lines\nUsage: head <file>",
          tail: "tail - display last lines\nUsage: tail <file>",
          nano: "nano - text editor (mocked)\nUsage: nano <file>",
          strings: "strings - extract text from file\nUsage: strings <file>",
          xxd: "xxd - display file in hex\nUsage: xxd <file>",
        };
        newOutput.push(
          manuals[args[0]] || `man: no manual entry for ${args[0]}`
        );
        break;
      case "alias":
        if (!args[0]) {
          newOutput.push(
            Object.entries(aliases)
              .map(([name, value]) => `alias ${name}='${value}'`)
              .join("\n") || "No aliases defined"
          );
        } else if (args[0].includes("=")) {
          const [name, value] = args[0].split("=");
          if (name && value.startsWith("'") && value.endsWith("'")) {
            setAliases({ ...aliases, [name]: value.slice(1, -1) });
            newOutput.push("");
          } else {
            newOutput.push("alias: invalid format, use: alias name='command'");
          }
        } else {
          newOutput.push("alias: invalid usage, use: alias name='command'");
        }
        break;
      case "unalias":
        if (!args[0]) {
          newOutput.push("unalias: missing alias name");
          break;
        }
        if (aliases[args[0]]) {
          const newAliases = { ...aliases };
          delete newAliases[args[0]];
          setAliases(newAliases);
          newOutput.push("");
        } else {
          newOutput.push(`unalias: ${args[0]}: no such alias`);
        }
        break;
      case "which":
        if (!args[0]) {
          newOutput.push("which: missing command name");
          break;
        }
        const commands = [
          "ls",
          "cd",
          "cat",
          "whoami",
          "pwd",
          "clear",
          "base64",
          "grep",
          "sudo",
          "mkdir",
          "touch",
          "rm",
          "echo",
          "find",
          "mv",
          "cp",
          "history",
          "man",
          "alias",
          "unalias",
          "which",
          "wc",
          "head",
          "tail",
          "nano",
          "strings",
          "xxd",
        ];
        if (commands.includes(args[0])) {
          newOutput.push(`/bin/${args[0]}`);
        } else {
          newOutput.push(`which: ${args[0]}: command not found`);
        }
        break;
      case "wc":
        if (!args[0]) {
          newOutput.push("wc: missing file operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          if (!pathExists(filePath)) {
            newOutput.push(`wc: ${args[0]}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (typeof node === "object") {
            newOutput.push(`wc: ${args[0]}: Is a directory`);
            return;
          }
          const { lines, words, chars } = getFileStats(node);
          newOutput.push(`${lines} ${words} ${chars} ${args[0]}`);
        }
        break;
      case "head":
        if (!args[0]) {
          newOutput.push("head: missing file operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          if (!pathExists(filePath)) {
            newOutput.push(`head: ${args[0]}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (typeof node === "object") {
            newOutput.push(`head: ${args[0]}: Is a directory`);
            return;
          }
          const lines = node.split("\n").slice(0, 10);
          newOutput.push(lines.join("\n"));
        }
        break;
      case "tail":
        if (!args[0]) {
          newOutput.push("tail: missing file operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          if (!pathExists(filePath)) {
            newOutput.push(`tail: ${args[0]}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (typeof node === "object") {
            newOutput.push(`tail: ${args[0]}: Is a directory`);
            return;
          }
          const lines = node.split("\n");
          newOutput.push(lines.slice(-10).join("\n"));
        }
        break;
      case "nano":
        if (!args[0]) {
          newOutput.push("nano: missing file operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          const parentPath =
            filePath.substring(0, filePath.lastIndexOf("/") || 1) || "/";
          const fileName = filePath.split("/").pop();
          if (!pathExists(parentPath)) {
            newOutput.push(
              `nano: cannot open '${args[0]}': No such file or directory`
            );
            return;
          }
          const parent = getNode(parentPath);
          newOutput.push(
            `nano: opened ${args[0]} (type text, then press Ctrl+X to save)`
          );
          parent[fileName] = parent[fileName] || "";
        }
        break;
      case "strings":
        if (!args[0]) {
          newOutput.push("strings: missing file operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          if (!pathExists(filePath)) {
            newOutput.push(`strings: ${args[0]}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (typeof node === "object") {
            newOutput.push(`strings: ${args[0]}: Is a directory`);
            return;
          }
          newOutput.push(node.replace(/[^a-zA-Z0-9\s]/g, ""));
        }
        break;
      case "xxd":
        if (!args[0]) {
          newOutput.push("xxd: missing file operand");
          break;
        }
        {
          const filePath = resolvePath(args[0]);
          if (!pathExists(filePath)) {
            newOutput.push(`xxd: ${args[0]}: No such file or directory`);
            return;
          }
          const node = getNode(filePath);
          if (typeof node === "object") {
            newOutput.push(`xxd: ${args[0]}: Is a directory`);
            return;
          }
          const hex = Array.from(node)
            .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
            .join("");
          newOutput.push(hex);
        }
        break;
      default:
        newOutput.push(`bash: ${cmdName}: command not found`);
    }

    // Chiqishni cheklash (50 qator)
    if (newOutput.length > 50) {
      newOutput = newOutput.slice(-50);
    }
    setOutput(newOutput);
    setHistory([...history, cmd]);
    setHistoryIndex(history.length + 1);
    setTabCount(0);
  };

  // Klaviatura hodisalari
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      if (cmd) {
        handleCommand(cmd);
      }
      setInput(" ");
      setTabCount(0);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const parts = input.trim().split(/\s+/);
      if (parts.length === 0) return;
      const lastPart = parts[parts.length - 1];
      const dirPath =
        parts.length > 1 && parts[0] === "cd" ? currentDir : currentDir;
      const completions = getCompletions(lastPart, dirPath);
      if (completions.length === 1) {
        const newInput =
          parts.slice(0, -1).join(" ") +
          (parts.length > 1 ? " " : "") +
          completions[0];
        setInput(newInput + " ");
        setTabCount(0);
      } else if (completions.length > 1) {
        if (tabCount === 1) {
          setOutput([...output, completions.join("  ")]);
          setTabCount(0);
        } else {
          setTabCount(1);
        }
      }
    } else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(history[historyIndex - 1] || " ");
      }
      setTabCount(0);
    } else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[historyIndex + 1] || " ");
      } else {
        setHistoryIndex(history.length);
        setInput(" ");
      }
      setTabCount(0);
    }
  };

  return (
    <div className="w-full h-screen bg-black text-[#00ff00] font-mono px-4 pt-6 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanline"></div>
        <div className="matrix-rain"></div>
      </div>
      <motion.div
        className="w-full h-full max-w-[1600px] mx-auto border-2 border-[#00ff00] bg-black/80 p-4 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.5)] animate-fade-in-down flex flex-col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-4 text-center animate-pulse-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hacker CTF Terminal
        </motion.h1>
        <div
          className="flex-1 overflow-y-auto p-2 bg-[#1a1a1a] border border-[#00ff00] rounded"
          ref={terminalRef}
        >
          {output.map((line, i) => (
            <div key={i} className="text-[#00ff00] whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div className="flex flex-col">
            <div>┌──(cybernexus㉿cybernexus)-[{getPromptDir()}]</div>
            <div className="flex items-center">
              <span className="text-[#00ff00]">└─$ </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-[#00ff00] caret-[#00ff00]"
                autoFocus
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
