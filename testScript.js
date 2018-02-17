// Test Script to be used for a SingleLinkedList.html and SingleLinkedList.js

// To add some real life scenario I created a Person constructor object. The person object hold basic information: Id,
// fname, and lname. It also has one function: personIdExist. It determines if a personIdExist

/////// Copy and Past the below section into the console. /////////////////////////
class Person {
   constructor(id,fname,lname) {
      this.id = id,
      this.fname = fname,
      this.lname = lname
   }
   personIdExist(id,personObject) {
      // Purpose:    To determine if a person id exist.
      // Parameter:  id: must be the key value or id
      //             personObject: is the person opject that stores the StoredData
      // Return:     True if id matchs
      //             False if not match or miss match datatype

      // Check if parameters are correct datatype
      if (typeof personObject !== "object") {
         return false
      }
      return (personObject.id === id)
   }
}

// Manually populating a number of person object. But these object can be pulled from a datastore.
let person1 = new Person(12345, "Tony", "Lanera");
let person2 = new Person(23456, "Jim", "Show");
let person3 = new Person(34567, "Hollow", "Brain");
let person4 = new Person(45678, "Hey", "Man");
let person5 = new Person(56789, "Fall", "Guy");
/////// Stop Selecting /////////////////////////

// This area creates a personList based on the SingleLinkedList object.
/////// Copy and Past the below section into the console. /////////////////////////
let personList = new SingleLinkedList;
/////// Stop Selecting /////////////////////////

// This area populates the personList
/////// Copy and Past the below section into the console. /////////////////////////
personList.addNode(person1);
personList.addNode(person2);
personList.addNode(person3);
personList.addNode(person4);
personList.addNode(person5);
/////// Stop Selecting /////////////////////////

// This area find the data at a specific node
/////// Copy and Past the below section into the console. /////////////////////////
personList.findNodeItem(3);
personList.findNodeItem(5);
/////// Stop Selecting /////////////////////////

// This area finds a person based on the id in the list
/////// Copy and Past the below section into the console. /////////////////////////
personList.findNodeValue(person1.id, person1.personIdExist)
/////// Stop Selecting /////////////////////////

// This area removes the node for a specific index.
/////// Copy and Past the below section into the console. /////////////////////////
personList.removeNode(2);
personList.removeNode(4);
/////// Stop Selecting /////////////////////////
