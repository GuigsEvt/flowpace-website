"use client";

import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { nodeTypes } from "./custom-nodes";
import { edgeTypes } from "./animated-edge";

const initialNodes: Node[] = [
  { id: "tools", type: "tools", position: { x: 0, y: 100 }, data: {} },
  { id: "engine", type: "engine", position: { x: 300, y: 80 }, data: {} },
  { id: "agents", type: "agents", position: { x: 620, y: 100 }, data: {} },
  { id: "results", type: "results", position: { x: 900, y: 120 }, data: {} },
];

const initialEdges: Edge[] = [
  { id: "e-tools-engine", source: "tools", target: "engine", type: "animated" },
  { id: "e-engine-agents", source: "engine", target: "agents", type: "animated" },
  { id: "e-agents-results", source: "agents", target: "results", type: "animated" },
];

function WorkflowDiagramInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-white/[0.07]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        nodesDraggable
        panOnDrag
        zoomOnScroll
        zoomOnPinch
        panOnScroll={false}
        preventScrolling={false}
        minZoom={0.3}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="rgba(255, 255, 255, 0.04)"
        />
        <Controls
          showInteractive={false}
          className="!bg-white/[0.04] !border-white/[0.07] !rounded-lg [&>button]:!bg-transparent [&>button]:!border-white/[0.07] [&>button]:!text-body [&>button:hover]:!bg-white/[0.08]"
        />
        <MiniMap
          nodeColor="rgba(26, 115, 232, 0.4)"
          maskColor="rgba(0, 0, 0, 0.6)"
          className="!bg-white/[0.03] !border-white/[0.07] !rounded-lg"
          pannable
          zoomable
        />
      </ReactFlow>
    </div>
  );
}

export default function WorkflowDiagram() {
  return (
    <ReactFlowProvider>
      <WorkflowDiagramInner />
    </ReactFlowProvider>
  );
}
