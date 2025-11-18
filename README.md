# Blog Post.

1. What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type উভয়ই টাইপ ডিফিনিশন এর জন্য ব্যবহার করা হয়, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।
টাইফস্কিপ্টে আমরা ইন্টারফেস ব্যবহার করি মুলত object structure বুঝানোর জন্য। আর টাইপ ব্যবহার করি মুলত object এর টাইপ বুঝানোর জন্য। আর টাইপ ব্যবহ্ত হয় মূলত primitive type বুঝানোর জন্য মূলত। 

2. What is the use of the keyof keyword in TypeScript? Provide an example.
keyof keyword টা TypeScript-এর একটি powerful feature যা আমাদেরকে একটি type-এর keys গুলোকে union type হিসেবে পেতে সাহায্য করে।
উদাহরণ হলো keyof এর:
interface Person {
name: string;
age: number;
email: string;
}

type PersonKeys = keyof Person;


