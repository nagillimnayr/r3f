import { DynamicBody } from '../../Classes/Dynamics';
import calculateGravitation from '../../systems/physics/forces/calculateGravitation';

class BodyNode {
  children: BodyNode[]; // Array of BodyNodes which are attached to this node
  body: DynamicBody; // Body associated with this node

  constructor(body: DynamicBody) {
    this.children = [];
    this.body = body;
  }

  addNode(newNode: BodyNode) {
    // don't add node if its already attached
    if (this.children.includes(newNode)) {
      return;
    }
    // add new node to children array
    this.children.push(newNode);
  }
  addNodes(newNodes: BodyNode[]) {
    for (const node of newNodes) {
      this.addNode(node);
    }
  }
  addChild(newChild: DynamicBody) {
    this.addNode(new BodyNode(newChild));
  }
  addChildren(newChildren: DynamicBody[]) {
    for (const child of newChildren) {
      this.addNode(new BodyNode(child));
    }
  }

  traverse(deltaTime: number) {
    // traverse the sub-tree
    this.children.forEach((child) => {
      // Update Body linked to the child
      child.body.acceleration = calculateGravitation(child.body, this.body);
      child.body.update(deltaTime);
      child.traverse(deltaTime);
    });
  }

  find(name: string): BodyNode | null {
    // check for match
    if (this.body.name === name) {
      return this;
    }

    // Traverse tree
    for (const child of this.children) {
      const match = child.find(name);
      // If a match is found, send it back up the call-stack
      if (match) {
        return match;
      }
    }
    // If no more children in this branch, return null
    return null;
  }
}

class SolarSystemTree {
  root: BodyNode;

  constructor(root: DynamicBody) {
    this.root = new BodyNode(root);
  }

  // Search tree for matching name
  find(name: string): BodyNode | null {
    return this.root.find(name);
  }
}

export { BodyNode, SolarSystemTree };
