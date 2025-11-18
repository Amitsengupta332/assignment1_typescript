 
type values = number | string | boolean;
const formatValue = (value: values): values => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
};
 
const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};
 

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
 
 
type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};
 
 
 

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};
// problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
};
 
// problem 7

type arr = string | number;

const getUniqueValues = (arr1: arr[], arr2: arr[]): arr[] => {
  const result: arr[] = [];

  for (const item of arr1) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  for (const item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
};
 

// problem 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;
  const result = products
    .map((item) => {
      const base = item.price * item.quantity;
      if (item.discount !== undefined) {
        const cut = (base * item.discount) / 100;
        return base - cut;
      }
      return base;
    })
    .reduce((sum, v) => sum + v, 0);

  return result;
};
 