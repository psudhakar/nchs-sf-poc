<mxfile host="app.diagrams.net">
    <diagram name="Page-1" id="6HyA7qXr8V5l3zL4qK9c">
        <mxGraphModel dx="1382" dy="790" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
            <root>
                <mxCell id="0"/>
                <mxCell id="1" parent="0"/>
                <!-- Batch Job Process -->
                <mxCell id="batchJob" value="&lt;b&gt;Batch Indexing Job&lt;/b&gt;&lt;br&gt;(Periodic Execution)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" parent="1" vertex="1">
                    <mxGeometry x="240" y="40" width="180" height="80" as="geometry"/>
                </mxCell>
                <!-- Scheduler -->
                <mxCell id="scheduler" value="&lt;b&gt;Scheduler&lt;/b&gt;&lt;br&gt;(e.g., Cron/Airflow)" style="shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" parent="1" vertex="1">
                    <mxGeometry x="100" y="60" width="120" height="60" as="geometry"/>
                </mxCell>
                <!-- Internal Cookbooks -->
                <mxCell id="cookbooks" value="&lt;b&gt;Internal Cookbooks&lt;/b&gt;&lt;br&gt;(Source Files)" style="shape=folder;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" parent="1" vertex="1">
                    <mxGeometry x="40" y="180" width="120" height="80" as="geometry"/>
                </mxCell>
                <!-- Neo4j -->
                <mxCell id="neo4j" value="&lt;b&gt;Knowledge Graph (Neo4j)&lt;/b&gt;&lt;br&gt;• Recipe relationships&lt;br&gt;• Ingredient graph&lt;br&gt;• Chef expertise" style="shape=cylinder3;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="1" vertex="1">
                    <mxGeometry x="40" y="320" width="160" height="140" as="geometry"/>
                </mxCell>
                <!-- RDS Postgres -->
                <mxCell id="postgres" value="&lt;b&gt;Vector DB (RDS Postgres)&lt;/b&gt;&lt;br&gt;• pgvector embeddings&lt;br&gt;• Recipe similarity&lt;br&gt;• Semantic search" style="shape=cylinder3;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;" parent="1" vertex="1">
                    <mxGeometry x="240" y="320" width="180" height="140" as="geometry"/>
                </mxCell>
                <!-- Chatbot Interface -->
                <mxCell id="chatbot" value="&lt;b&gt;Chatbot Interface&lt;/b&gt;&lt;br&gt;(User Input)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;" parent="1" vertex="1">
                    <mxGeometry x="460" y="180" width="120" height="60" as="geometry"/>
                </mxCell>
                <!-- LLM Integration -->
                <mxCell id="llm" value="&lt;b&gt;LLM Service&lt;/b&gt;&lt;br&gt;(e.g., Anthropic/OpenAI)&lt;div&gt;• Context enrichment&lt;br&gt;• Natural language response&lt;/div&gt;" style="shape=cloud;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" parent="1" vertex="1">
                    <mxGeometry x="460" y="320" width="150" height="120" as="geometry"/>
                </mxCell>
                <!-- User -->
                <mxCell id="user" value="&lt;b&gt;End User&lt;/b&gt;" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;fillColor=#f5f5f5;strokeColor=#666666;" parent="1" vertex="1">
                    <mxGeometry x="500" y="60" width="40" height="60" as="geometry"/>
                </mxCell>
                <!-- Response Output -->
                <mxCell id="output" value="&lt;b&gt;Response&lt;/b&gt;&lt;br&gt;(Formatted Answer)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;" parent="1" vertex="1">
                    <mxGeometry x="460" y="480" width="120" height="60" as="geometry"/>
                </mxCell>
                <!-- Connections -->
                <mxCell id="conn1" value="" style="endArrow=classic;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" parent="1" edge="1" source="scheduler" target="batchJob">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="240" y="90" as="sourcePoint"/>
                        <mxPoint x="290" y="40" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn2" value="Index &amp;amp; Process" style="endArrow=classic;html=1;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" edge="1" source="cookbooks" target="batchJob">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="100" y="220" as="sourcePoint"/>
                        <mxPoint x="290" y="80" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn3" value="Load graph data" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.25;entryY=0;entryDx=0;entryDy=0;" parent="1" edge="1" source="batchJob" target="neo4j">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="290" y="120" as="sourcePoint"/>
                        <mxPoint x="120" y="320" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn4" value="Store embeddings" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" edge="1" source="batchJob" target="postgres">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="330" y="120" as="sourcePoint"/>
                        <mxPoint x="330" y="320" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn5" value="User query" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" parent="1" edge="1" source="user" target="chatbot">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="520" y="60" as="sourcePoint"/>
                        <mxPoint x="460" y="210" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn6" value="Semantic search" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.3;entryDx=0;entryDy=0;" parent="1" edge="1" source="chatbot" target="postgres">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="460" y="210" as="sourcePoint"/>
                        <mxPoint x="420" y="355" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn7" value="Graph query" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.7;entryDx=0;entryDy=0;" parent="1" edge="1" source="chatbot" target="neo4j">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="460" y="210" as="sourcePoint"/>
                        <mxPoint x="200" y="390" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn8" value="Submit context" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" edge="1" source="chatbot" target="llm">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="520" y="240" as="sourcePoint"/>
                        <mxPoint x="535" y="320" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn9" value="LLM response" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" edge="1" source="llm" target="output">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="535" y="440" as="sourcePoint"/>
                        <mxPoint x="520" y="480" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
                <mxCell id="conn10" value="Display" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;" parent="1" edge="1" source="output" target="user">
                    <mxGeometry width="50" height="50" relative="1" as="geometry">
                        <mxPoint x="520" y="480" as="sourcePoint"/>
                        <mxPoint x="520" y="120" as="targetPoint"/>
                    </mxGeometry>
                </mxCell>
            </root>
        </mxGraphModel>
    </diagram>
</mxfile>
