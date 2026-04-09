"use client";

import { ReactFlow, ReactFlowProvider, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { nodeTypes } from "./custom-nodes";
import { edgeTypes } from "./animated-edge";

const nodes: Node[] = [
  { id: "tools", type: "tools", position: { x: 0, y: 100 }, data: {} },
  { id: "engine", type: "engine", position: { x: 300, y: 80 }, data: {} },
  { id: "agents", type: "agents", position: { x: 620, y: 100 }, data: {} },
  { id: "results", type: "results", position: { x: 900, y: 120 }, data: {} },
];

const edges: Edge[] = [
  { id: "e-tools-engine", source: "tools", target: "engine", type: "animated" },
  { id: "e-engine-agents", source: "engine", target: "agents", type: "animated" },
  { id: "e-agents-results", source: "agents", target: "results", type: "animated" },
];

export default function WorkflowDiagram() {
  return (
    <ReactFlowProvider>
      <div className="h-[400px] md:h-[500px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          panOnDrag={false}
          zoomOnScroll={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        />
      </div>
    </ReactFlowProvider>
  );
}
