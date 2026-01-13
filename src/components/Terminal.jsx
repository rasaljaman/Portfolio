import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", content: "RasalOS [Version 1.0.0]" },
    { type: "output", content: "(c) 2026 Rasal Jaman. All rights reserved." },
    { type: "output", content: "Type 'help' to see available commands." },
    { type: "output", content: "" },
  ]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [history]);

  // Auto-focus input on click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: "input", content: `visitor@rasal-os:~$ ${input}` }];

      let response = "";
      switch (cmd) {
        case "help":
          response = "Available commands: help, whoami, projects, contact, clear, date";
          break;
        case "whoami":
          response = "Rasal Jaman | Cybersecurity Student & Frontend Dev";
          break;
        case "projects":
          response = "Loaded Modules: \n- ProGall.tech (AI Gallery)\n- Car Rental System\n- Bluetooth RC Car (Hardware)";
          break;
        case "contact":
          response = "Opening mail client... (contact@rasaljaman.com)";
          window.location.href = "mailto:contact@rasaljaman.com";
          break;
        case "date":
          response = new Date().toString();
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        default:
          response = `Command not found: ${cmd}`;
      }

      if (response) {
        newHistory.push({ type: "output", content: response });
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono text-sm md:text-base">
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs">visitor@rasal-os:~</div>
        </div>

        {/* Terminal Body */}
        <div 
          className="h-[60vh] p-4 overflow-y-auto text-gray-300" 
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className={`mb-1 ${line.type === 'input' ? 'text-white' : 'text-green-400 whitespace-pre-wrap'}`}>
              {line.content}
            </div>
          ))}
          
          <div className="flex items-center text-white">
            <span className="mr-2 text-green-500">visitor@rasal-os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-white caret-white"
              autoFocus
            />
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
