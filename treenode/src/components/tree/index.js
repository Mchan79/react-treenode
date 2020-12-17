import React from 'react';
import './index.css';
import TreeNode from './treenode';

const Tree = () => {

    let node = {
        id: 1, root: true, text: "nodo", closedIcon: "fas fa-folder", openIcon: "fas fa-folder-open", opened: false, selected: true
        , children: [
            { id: 2, root: false, text: "nodo", closedIcon: "fas fa-folder", openIcon: "fas fa-folder-open", opened: false, selected: true }
            , { id: 3, root: false, text: "nodo", closedIcon: "fas fa-folder", openIcon: "fas fa-folder-open", opened: true, selected: true }
            , { id: 4, root: false, text: "nodo", closedIcon: "fas fa-folder", openIcon: "fas fa-folder-open", opened: false, selected: true }
        ]
    }
    

    return (
        <div>
            <TreeNode node={node} bros={false} lastOne={true} ></TreeNode>
            
        </div>
    );
};

export default Tree;