import React, { useEffect, useState, useMemo , Suspense} from 'react';

const TreeNode = (props) => {
    const [node, setNode] = useState({});
    const [children, setChildrens] = useState([]);
    const [nodeOpenState, setNodeOpenState] = useState(false);
    const [hasBrothers, setHasbrothers] = useState(false);
    const [lastOne, setLastOne] = useState(false);

    useEffect(() => {
        setNode(props.node);
        setChildrens(props.node.children != null ? props.node.children : []);
        setHasbrothers(props.bros);
        setLastOne(props.lastOne);
    }, [props.bros, props.lastOne, props.node])

    const onClick = () => {
        let newData = { id: 5, root: false, text: "nodo", closedIcon: "fas fa-folder", openIcon: "fas fa-folder-open", opened: false, selected: true };
        let childData = children;
        childData.push(newData);
        setChildrens(childData);
        setNodeOpenState(true);
    }

    const nodeData = useMemo(() => {
        let nodeData = node;
        nodeData.opened = nodeOpenState;
        setNode(nodeData);
        
        return nodeData;

    }, [node, nodeOpenState])

    const childrensData = useMemo(() => {
        let childrensData = children;
        return childrensData;
    }, [children])

    return (
        <div className="smb-node">
            <div className="smb-inner">
                <div onClick={() => setNodeOpenState(!nodeData.opened)}
                    className={nodeData.root ? nodeData.opened ? "root-deep-open" : "root-deep-closed" : nodeData.opened ? "node-deep-open" : "node-deep-closed"}>
                </div>
                <div className="smb-item">
                    <button className="smb-tree-btn" onClick={() => onClick()}>
                        <li className={nodeData.opened ? nodeData.openIcon : nodeData.closedIcon}></li>
                        &nbsp;{nodeData.text}
                    </button>
                </div>
            </div>
            {(childrensData != null && childrensData.length > 0) &&
                <div className={nodeData.opened ? hasBrothers && !lastOne?"smb-children smb-children-opened collapse show": "smb-children  collapse show": "smb-children collapse"}>
                    {childrensData.map((item,i) => <Suspense fallback={<div>Loading...</div>}>
                        <TreeNode node={item} bros={childrensData.length > 1} lastOne={childrensData.length === i+1}></TreeNode>
                    </Suspense>)}
                </div>
            }
        </div>
    );
}

export default TreeNode;