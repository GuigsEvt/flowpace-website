"use client";

import { Handle, Position } from "@xyflow/react";
import { Mail, MessageSquare, Database, BarChart3 } from "lucide-react";

const handleStyle = {
  width: 8,
  height: 8,
  background: "#1A73E8",
  border: "2px solid rgba(26, 115, 232, 0.3)",
};

function ToolsNode() {
  return (
    <div className="cursor-grab active:cursor-grabbing backdrop-blur-md bg-white/[0.04] border border-white/[0.07] rounded-xl transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] p-4 min-w-[180px]">
      <div className="text-heading font-medium text-sm mb-3">Your Tools</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { Icon: Mail, label: "Email" },
          { Icon: MessageSquare, label: "Chat" },
          { Icon: Database, label: "Database" },
          { Icon: BarChart3, label: "Analytics" },
        ].map(({ Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 text-muted text-xs"
          >
            <Icon className="w-3.5 h-3.5 text-zinc-400" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Handle type="source" position={Position.Right} style={handleStyle} />
    </div>
  );
}

function EngineNode() {
  return (
    <div className="cursor-grab active:cursor-grabbing backdrop-blur-md bg-white/[0.04] border border-white/[0.07] rounded-xl transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] p-4 min-w-[220px] shadow-[0_0_20px_rgba(26,115,232,0.15)]">
      <div className="text-heading font-medium text-sm mb-3">
        Flowpace AI Engine
      </div>
      <div className="space-y-2">
        {["Model Selection", "RAG Pipeline", "Security Layer"].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-muted text-xs bg-white/5 rounded-lg px-3 py-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <Handle type="target" position={Position.Left} style={handleStyle} />
      <Handle type="source" position={Position.Right} style={handleStyle} />
    </div>
  );
}

function AgentsNode() {
  return (
    <div className="cursor-grab active:cursor-grabbing backdrop-blur-md bg-white/[0.04] border border-white/[0.07] rounded-xl transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] p-4 min-w-[180px]">
      <div className="text-heading font-medium text-sm mb-3">
        Custom Agents
      </div>
      <div className="space-y-2">
        {["Support Agent", "Sales Agent", "Data Agent"].map((agent) => (
          <div key={agent} className="flex items-center gap-2 text-muted text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>{agent}</span>
          </div>
        ))}
      </div>
      <Handle type="target" position={Position.Left} style={handleStyle} />
      <Handle type="source" position={Position.Right} style={handleStyle} />
    </div>
  );
}

function ResultsNode() {
  return (
    <div className="cursor-grab active:cursor-grabbing backdrop-blur-md bg-white/[0.04] border border-white/[0.07] rounded-xl transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] p-4 min-w-[160px]">
      <div className="text-heading font-medium text-sm mb-3">Results</div>
      <div className="flex items-center gap-2 text-muted text-xs">
        <BarChart3 className="w-4 h-4 text-[#1A73E8]" />
        <span>Dashboard</span>
      </div>
      <Handle type="target" position={Position.Left} style={handleStyle} />
    </div>
  );
}

export const nodeTypes = {
  tools: ToolsNode,
  engine: EngineNode,
  agents: AgentsNode,
  results: ResultsNode,
};
