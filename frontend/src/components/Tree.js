import React, { useMemo, useState, useCallback } from 'react';
import ReactFamilyTree from 'react-family-tree';
import { PinchZoomPan } from './PinchZoomPan';
import { FamilyNode } from './FamilyNode';
import { getNodeStyle } from './utils';
import tree from '../tree.json';
import css from '../css/tree.module.css';



export default React.memo(
  function Tree() {
    const [nodes, setNodes] = useState(tree);

    const firstNodeId = useMemo(() => nodes[0].id, [nodes]);
    const [rootId, setRootId] = useState(firstNodeId);

    const [selectId, setSelectId] = useState();
    const [hoverId, setHoverId] = useState();

    const resetRootHandler = useCallback(() => setRootId(firstNodeId), [firstNodeId]);


    return (
      <>
      <div style={{display:"flex", flexDirection:"row"}}>
      <div className={css.root}>
        {nodes.length > 0 && (
          <PinchZoomPan min={0.5} max={2.5} captureWheel className={css.wrapper}>
            <ReactFamilyTree
            // @ts-ignore
              nodes={nodes}
              rootId={rootId}
              width={80}
              height={80}
              className={css.tree}
              // @ts-ignore
              renderNode={(node) => (
                <FamilyNode
                  key={node.id}
                  node={node}
                  isRoot={node.id === rootId}
                  isHover={node.id === hoverId}
                  onClick={setSelectId}
                  onSubClick={setRootId}// @ts-ignore
                  style={getNodeStyle(node)}
                />
              )}
            />
          </PinchZoomPan>
        )}
        {rootId !== firstNodeId && (
          <button className={css.reset} onClick={resetRootHandler}>
            Reset
          </button>
        )}
      </div>
      </div>
      </>
    );
  },
);
