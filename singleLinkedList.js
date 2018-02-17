/*
   Purpose: A simple library that contain the constructor object for:
      * A Single Node Class
      * A SingleLinkedList
 */

alert("I am connected")

// Class constructor for a Single Node class
class SingleNode {
   constructor(storedData) {
      this.data = storedData;
      this.next = null;
   }
}

// Class constructor for a single linked list
class SingleLinkedList {
   constructor() {
      this.length = 0,
      this.head = null
   }

   addNode(value) {
      // Purpose:   Is to add a node in the list.
      // Parameter: value: Can be anything and it is optional.
      // Return:    It returns the node that was stored

      // create a node object with data and save current node
      let node = new SingleNode(value);
      let currentNode = this.head;

      // store the node object
      // No list exist create a node list with this node
      if (this.length === 0) {
         this.head = node;
         this.length++;
      }
      // List exist add a new node
      else {
         // Find the last node
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         // Add new node to end of list
         currentNode.next = node;
         this.length++
      }
      return node;
   }

   findNodeItem(itemIndex) {
      // Purpose:   finds the specific node within the list
      // Parameter: itemIndex - Must be  an interger with a range of 1 to the size of the list
      // Return:    node.data - if item is found
      //            -1 - if item is not found or index is out of range
      // Note:      This function is design to have only one return statement

      // Set counter and currentNode
      let counterIndex  = 1;
      let currentNode   = this.head;
      let errorMessage  = "Node does not exist";
      let returnValue   = null;

      // Check if index is in range
      if (itemIndex > 0 && itemIndex <= this.length) {

         //Run through the list to find value at the itemIndex
         while (counterIndex < itemIndex) {
            currentNode = currentNode.next;
            counterIndex++;
         }
         returnValue = currentNode.data
      } else {

         // Set return value to negative -1
         returnValue = -1;
         // throw new Error(errorMessage);
      }
      return returnValue;
   }

   findNodeValue(key, isMatchFn ) {
      // Purpose:   Finds the specific key that is saved in StoredData and returns back the Index
      //            If no key is found it returns back zero
      //            If isMatchFn not a function or the list is zero retunr -1
      // Parameter: key - value being stored in the list
      //            isMatchFn - is a function that stores the business logic that is used to determine if there is a match
      // Return:    -1 - if isMatchFn is not a function or list length is zero
      //            0 - if there is no match
      //            itemIndex - if there is a match
      // Note:      This function is written to have more than one return statement

      // Set any variable location
      let counterIndex = 1;
      let currentNode = this.head

      if (typeof isMatchFn !== "function" || this.length === 0 ) {
         return -1
      }

      while (counterIndex <= this.length) {
         if (isMatchFn(key,currentNode.data)) {
            return counterIndex
         } else {
            currentNode = currentNode.next
            counterIndex++
         }
      }
      return 0
   }

   removeNode(itemIndex) {
      // Purpose:   remove the node from the specific index within the list
      // Parameter: itemIndex - Must be  an interger with a range of 1 to the size of the list
      // Return:    -1 - if itemIndex: is out of range, is null or type is not a number.
      //            node.data - if the node has been removed.

      // Set counter, currentNode, and previousNode
      let counterIndex  = 1;
      let currentNode   = this.head;
      let errorMessage  = "Node does not exist";
      let previousNode  = null;

      // Check if Index is undefine or out of range exit out
      if (itemIndex === 0 || itemIndex > this.length || itemIndex == null || typeof itemIndex != "number" ) {
         return -1
      }

      // Check it is if removing the first element
      if (counterIndex === itemIndex) {
         this.head = currentNode.next;
         this.length--;
         return currentNode.data;
      }

      //Run through the list to find value at the itemIndex
      while (counterIndex < itemIndex) {
         previousNode = currentNode
         currentNode = currentNode.next;
         counterIndex++;
      }
      previousNode.next = currentNode.next
      this.length--;
      return currentNode.data
   }
}
