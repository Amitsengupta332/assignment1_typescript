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
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0; 
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

type arr = string | number;

const getUniqueValues = (arr1: arr[], arr2: arr[]): arr[] => {
  const result: arr[] = [];
  const merged: arr[] = [];
  for (let i = 0; i < arr1.length; i++) {
    merged[merged.length] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    merged[merged.length] = arr2[i];
  }
  for (let i = 0; i < merged.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === merged[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result[result.length] = merged[i];
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
