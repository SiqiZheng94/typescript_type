// type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D"| "F" | undefined;
export type Grade = {
    grade : 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D"| "F" | undefined;
}
export type Student = {
    firstName:string;
    lastName:string;
    age:number;
    grades:Grade[];
}

