import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Yangilangan virtual fayl tizimi
const filesystem = {
  home: {
    user: {
      ctfs: {
        easy: {
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
          ctf5: { "data.txt": "flag{simple}", "hint.txt": "Use: cat data.txt" },
          ctf6: {
            folder: { "flag.txt": "flag{folder}" },
            "hint.txt": "Use: cd folder; cat flag.txt",
          },
          ctf7: {
            "secret.txt": "flag{read}",
            "hint.txt": "Use: cat secret.txt",
          },
          ctf8: { "notes.txt": "flag{note}", "hint.txt": "Use: cat notes.txt" },
          ctf9: {
            ".secret.txt": "flag{stealth}",
            "hint.txt": "Use: ls -a; cat .secret.txt",
          },
          ctf10: { "info.txt": "flag{info}", "hint.txt": "Use: cat info.txt" },
          ctf11: { "memo.txt": "flag{memo}", "hint.txt": "Use: cat memo.txt" },
          ctf12: {
            "backup.txt": "flag{backup}",
            "hint.txt": "Use: cat backup.txt",
          },
          ctf13: {
            "logs.txt": "Logs: flag{search} at 14:00",
            "hint.txt": "Use: grep flag logs.txt",
          },
          ctf14: {
            "chunk1.txt": "flag{me",
            "chunk2.txt": "rge}",
            "hint.txt": "Use: cat chunk1.txt chunk2.txt",
          },
          ctf15: {
            "entry.txt": "flag{entry}",
            "hint.txt": "Use: cat entry.txt",
          },
          ctf16: {
            ".data.txt": "flag{data}",
            "hint.txt": "Use: ls -a; cat .data.txt",
          },
          ctf17: { "file.txt": "flag{file}", "hint.txt": "Use: cat file.txt" },
          ctf18: {
            "record.txt": "flag{record}",
            "hint.txt": "Use: cat record.txt",
          },
          ctf19: {
            "system.txt": "flag{system}",
            "hint.txt": "Use: cat system.txt",
          },
          ctf20: {
            "config.txt": "flag{config}",
            "hint.txt": "Use: cat config.txt",
          },
          ctf21: {
            "logs2.txt": "Log: flag{logs} at 15:00",
            "hint.txt": "Use: grep flag logs2.txt",
          },
          ctf22: {
            ".hidden.txt": "flag{cloak}",
            "hint.txt": "Use: ls -a; cat .hidden.txt",
          },
          ctf23: {
            "part3.txt": "flag{to",
            "part4.txt": "gether}",
            "hint.txt": "Use: cat part3.txt part4.txt",
          },
          ctf24: {
            deep: { "flag.txt": "flag{deep}" },
            "hint.txt": "Use: cd deep; cat flag.txt",
          },
          ctf25: {
            "archive.txt": "flag{archive}",
            "hint.txt": "Use: cat archive.txt",
          },
          ctf26: {
            "trace.txt": "flag{trace}",
            "hint.txt": "Use: cat trace.txt",
          },
          ctf27: {
            ".trace.txt": "flag{shadow}",
            "hint.txt": "Use: ls -a; cat .trace.txt",
          },
          ctf28: {
            "event.txt": "flag{event}",
            "hint.txt": "Use: cat event.txt",
          },
          ctf29: {
            "logs3.txt": "Log: flag{track} at 16:00",
            "hint.txt": "Use: grep flag logs3.txt",
          },
          ctf30: { "core.txt": "flag{core}", "hint.txt": "Use: cat core.txt" },
        },
        normal: {
          ctf1: {
            "challenge.txt": "ZmxhZ3tkZWNvZGV9",
            "hint.txt": "Use: base64 -d challenge.txt",
          },
          ctf2: {
            "cipher.txt": "synt{cipher}",
            "hint.txt": "ROT13: synt means flag",
          },
          ctf3: {
            passwd: "user:flag{passwd}:1000:1000",
            "hint.txt": "Use: cat passwd",
          },
          ctf4: {
            "encoded.txt": "ZmxhZ3tiYXNlNjR9",
            "hint.txt": "Use: base64 -d encoded.txt",
          },
          ctf5: {
            "hex.txt": "666c61677b6865787d",
            "hint.txt": "Use: xxd hex.txt; decode hex",
          },
          ctf6: {
            shadow: "user:flag{shadow}:1000:1000",
            "hint.txt": "Use: cat shadow",
          },
          ctf7: {
            "crypt.txt": "ZmxhZ3tjcnlwdH0=",
            "hint.txt": "Use: base64 -d crypt.txt",
          },
          ctf8: {
            "code.txt": "synt{rot13}",
            "hint.txt": "ROT13: synt means flag",
          },
          ctf9: { "stats.txt": "flag{stats}", "hint.txt": "Use: wc stats.txt" },
          ctf10: {
            "first.txt": "flag{first}\nline2\nline3",
            "hint.txt": "Use: head first.txt",
          },
          ctf11: {
            "last.txt": "line1\nline2\nflag{last}",
            "hint.txt": "Use: tail last.txt",
          },
          ctf12: {
            nested: { "flag.txt": "flag{nested}" },
            "hint.txt": "Use: find . -name flag.txt",
          },
          ctf13: {
            "data.txt": "Binary: flag{binary}",
            "hint.txt": "Use: strings data.txt",
          },
          ctf14: {
            "hex2.txt": "666c61677b636f64657d",
            "hint.txt": "Use: xxd hex2.txt; decode hex",
          },
          ctf15: {
            "logs.txt": "flag{case} at 17:00",
            "hint.txt": "Use: grep -i flag logs.txt",
          },
          ctf16: {
            "copy.txt": "flag{copy}",
            "hint.txt": "Use: cp copy.txt new.txt; cat new.txt",
          },
          ctf17: {
            "move.txt": "flag{move}",
            "hint.txt": "Use: mv move.txt moved.txt; cat moved.txt",
          },
          ctf18: {
            "write.txt": "",
            "hint.txt": "Use: echo 'flag{write}' > write.txt; cat write.txt",
          },
          ctf19: { dir: {}, "hint.txt": "Use: mkdir newdir; ls" },
          ctf20: { "empty.txt": "", "hint.txt": "Use: touch newfile.txt; ls" },
          ctf21: {
            "remove.txt": "flag{remove}",
            "hint.txt": "Use: rm remove.txt; ls",
          },
          ctf22: {
            deep: { secret: { "flag.txt": "flag{deep}" } },
            "hint.txt": "Use: find . -name flag.txt",
          },
          ctf23: {
            "encode.txt": "ZmxhZ3tlbmNvZGV9",
            "hint.txt": "Use: base64 -d encode.txt",
          },
          ctf24: {
            "cipher2.txt": "synt{shift}",
            "hint.txt": "ROT13: synt means flag",
          },
          ctf25: { config: "flag{config}", "hint.txt": "Use: cat config" },
          ctf26: {
            "stats2.txt": "flag{count}",
            "hint.txt": "Use: wc stats2.txt",
          },
          ctf27: {
            "head2.txt": "flag{top}\nline2",
            "hint.txt": "Use: head head2.txt",
          },
          ctf28: {
            "tail2.txt": "line1\nflag{bottom}",
            "hint.txt": "Use: tail tail2.txt",
          },
          ctf29: {
            "binary.txt": "flag{extract}",
            "hint.txt": "Use: strings binary.txt",
          },
          ctf30: {
            "search.txt": "flag{search}",
            "hint.txt": "Use: grep -i flag search.txt",
          },
        },
        hard: {
          ctf1: {
            "root/flag.txt": "flag{root}",
            "hint.txt": "Use: cat /root/flag.txt",
          },
          ctf2: {
            "etc/secret.txt": "flag{final}",
            "hint.txt": "Use: cat /etc/secret.txt",
          },
          ctf3: {
            "root/hidden.txt": "flag{elite}",
            "hint.txt": "Use: cat /root/hidden.txt",
          },
          ctf4: {
            "deep/nested/secret/flag.txt": "flag{buried}",
            "hint.txt": "Use: find / -name flag.txt",
          },
          ctf5: {
            "complex.txt": "ZmxhZ3tjb21wbGV4fQ==",
            "hint.txt":
              "Use: base64 -d complex.txt > decoded.txt; cat decoded.txt",
          },
          ctf6: {
            "hex3.txt": "666c61677b6164v616e6365647d",
            "hint.txt": "Use: xxd hex3.txt; decode hex",
          },
          ctf7: {
            "logs.txt": "flag{deepgrep} buried",
            "hint.txt": "Use: grep -r flag .",
          },
          ctf8: {
            "nano.txt": "",
            "hint.txt": "Use: nano nano.txt; write flag{nano}; save (Ctrl+X)",
          },
          ctf9: {
            "binary2.txt": "flag{binary2}",
            "hint.txt": "Use: strings binary2.txt",
          },
          ctf10: {
            "multi.txt": "synt{complex}",
            "hint.txt": "ROT13: synt means flag",
          },
          ctf11: {
            "chain.txt": "",
            "hint.txt": "Use: echo 'flag{chain}' > chain.txt; base64 chain.txt",
          },
          ctf12: {
            "archive/logs/secret.txt": "flag{archive}",
            "hint.txt": "Use: find / -name secret.txt",
          },
          ctf13: {
            "secure.txt": "ZmxhZ3tzZWN1cmV9",
            "hint.txt": "Use: base64 -d secure.txt",
          },
          ctf14: {
            "complex2.txt": "666c61677b636f6d706c6578327d",
            "hint.txt": "Use: xxd complex2.txt; decode hex",
          },
          ctf15: {
            "logs2.txt": "FLAG{case} at 18:00",
            "hint.txt": "Use: grep -i flag logs2.txt",
          },
          ctf16: {
            "script.sh": "echo flag{script}",
            "hint.txt": "Use: cat script.sh",
          },
          ctf17: {
            "deep/very/secret/flag.txt": "flag{verydeep}",
            "hint.txt": "Use: find / -name flag.txt",
          },
          ctf18: {
            "cipher3.txt": "synt{advanced}",
            "hint.txt": "ROT13: synt means flag",
          },
          ctf19: {
            "backup/logs/secret.txt": "flag{backup}",
            "hint.txt": "Use: find / -name secret.txt",
          },
          ctf20: {
            "encode2.txt": "ZmxhZ3tlbmNvZGUyfQ==",
            "hint.txt": "Use: base64 -d encode2.txt",
          },
          ctf21: {
            "hex4.txt": "666c61677b686578347d",
            "hint.txt": "Use: xxd hex4.txt; decode hex",
          },
          ctf22: {
            "logs3.txt": "flag{deepsearch} hidden",
            "hint.txt": "Use: grep -r flag .",
          },
          ctf23: {
            "nano2.txt": "",
            "hint.txt": "Use: nano nano2.txt; write flag{nano2}; save (Ctrl+X)",
          },
          ctf24: {
            "binary3.txt": "flag{binary3}",
            "hint.txt": "Use: strings binary3.txt",
          },
          ctf25: {
            "multi2.txt": "synt{multi}",
            "hint.txt": "ROT13: synt means flag",
          },
          ctf26: {
            "chain2.txt": "",
            "hint.txt":
              "Use: echo 'flag{chain2}' > chain2.txt; base64 chain2.txt",
          },
          ctf27: {
            "archive2/logs/secret.txt": "flag{archive2}",
            "hint.txt": "Use: find / -name secret.txt",
          },
          ctf28: {
            "secure2.txt": "ZmxhZ3tzZWN1cmUyfQ==",
            "hint.txt": "Use: base64 -d secure2.txt",
          },
          ctf29: {
            "complex3.txt": "666c61677b636f6d706c6578337d",
            "hint.txt": "Use: xxd complex3.txt; decode hex",
          },
          ctf30: {
            "logs4.txt": "flag{finalsearch} deep",
            "hint.txt": "Use: grep -r flag .",
          },
        },
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

  // Copy-paste taqiqlash
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
    for (let i = 0; i < 500; i++) {
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

  // ROT13 dekodlash
  const rot13 = (str) => {
    return str.replace(/[a-zA-Z]/g, (c) =>
      String.fromCharCode(
        (c <= "Z" ? 90 : 122) >= c.charCodeAt(0) + 13
          ? c.charCodeAt(0) + 13
          : c.charCodeAt(0) - 13
      )
    );
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
          const lsPath =
            args[0] && !args[0].startsWith("-")
              ? resolvePath(args[0])
              : currentDir;
          const node = getNode(lsPath);
          if (!node || typeof node !== "object") {
            newOutput.push(
              `ls: cannot access '${args[0] || ""}': No such file or directory`
            );
          } else {
            const showHidden = args.includes("-a") || args.includes("--all");
            const showDetails = args.includes("-l") || args.includes("--long");
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
          const filePath = resolvePath(args[1]);
          if (pathExists(filePath)) {
            const node = getNode(filePath);
            if (typeof node === "object") {
              newOutput.push(`base64: ${args[1]}: Is a directory`);
            } else {
              try {
                newOutput.push(atob(node));
              } catch {
                newOutput.push("base64: invalid input");
              }
            }
          } else {
            try {
              newOutput.push(atob(args[1]));
            } catch {
              newOutput.push("base64: invalid input");
            }
          }
        } else if (args[0]) {
          try {
            newOutput.push(btoa(args.join(" ")));
          } catch {
            newOutput.push("base64: encoding error");
          }
        } else {
          newOutput.push("Usage: base64 [-d] [string|file]");
        }
        break;
      case "grep":
        if (args.length < 2 && !args.includes("-r")) {
          newOutput.push("grep: missing pattern or file");
          break;
        }
        {
          const recursive = args.includes("-r") || args.includes("--recursive");
          const caseInsensitive =
            args.includes("-i") || args.includes("--ignore-case");
          let pattern = args[0];
          let filePath = args[1] ? resolvePath(args[1]) : currentDir;
          if (recursive) {
            pattern = args[args.indexOf("-r") + 1] || args[0];
            filePath = args[args.indexOf("-r") + 2]
              ? resolvePath(args[args.indexOf("-r") + 2])
              : currentDir;
            const node = getNode(filePath);
            if (!node || typeof node !== "object") {
              newOutput.push(`grep: ${filePath}: No such file or directory`);
              return;
            }
            const findFiles = (dir, prefix = "") => {
              const results = [];
              for (const [name, value] of Object.entries(dir)) {
                if (typeof value === "object") {
                  results.push(...findFiles(value, `${prefix}${name}/`));
                } else {
                  const content = caseInsensitive ? value.toLowerCase() : value;
                  const searchPattern = caseInsensitive
                    ? pattern.toLowerCase()
                    : pattern;
                  if (content.includes(searchPattern)) {
                    results.push(`${prefix}${name}: ${value}`);
                  }
                }
              }
              return results;
            };
            newOutput.push(findFiles(node, `${filePath}/`).join("\n") || "");
          } else {
            if (!pathExists(filePath)) {
              newOutput.push(`grep: ${args[1]}: No such file or directory`);
              return;
            }
            const node = getNode(filePath);
            if (node && typeof node !== "object") {
              const content = caseInsensitive ? node.toLowerCase() : node;
              const searchPattern = caseInsensitive
                ? pattern.toLowerCase()
                : pattern;
              if (content.includes(searchPattern)) {
                newOutput.push(node);
              } else {
                newOutput.push("");
              }
            } else {
              newOutput.push(`grep: ${args[1]}: Is a directory`);
            }
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
          const recursive = args.includes("-r") || args.includes("--recursive");
          const rmPath = resolvePath(args[args[0].startsWith("-") ? 1 : 0]);
          const parentPath =
            rmPath.substring(0, rmPath.lastIndexOf("/") || 1) || "/";
          const rmName = rmPath.split("/").pop();
          if (!pathExists(rmPath)) {
            newOutput.push(
              `rm: cannot remove '${
                args[args[0].startsWith("-") ? 1 : 0]
              }': No such file or directory`
            );
            return;
          }
          const parent = getNode(parentPath);
          if (typeof parent[rmName] === "object" && !recursive) {
            newOutput.push(
              `rm: cannot remove '${
                args[args[0].startsWith("-") ? 1 : 0]
              }': Is a directory`
            );
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
          base64:
            "base64 - encode/decode base64\nUsage: base64 [-d] <string|file>",
          grep: "grep - search text in files\nOptions: -i (ignore case), -r (recursive)\nUsage: grep <pattern> <file>",
          sudo: "sudo - execute command as root (mocked)",
          mkdir: "mkdir - create directory\nUsage: mkdir <directory>",
          touch: "touch - create empty file\nUsage: touch <file>",
          rm: "rm - remove files or directories\nOptions: -r (recursive)\nUsage: rm [-r] <file|dir>",
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
