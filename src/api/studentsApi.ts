import type StudentsInterface from '@/types/StudentsInterface';

export const getstudentsApi = async (): Promise<StudentsInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);
    const students = await response.json() as StudentsInterface[];
    return students;
  }
  catch (err) {
    console.log('>>> getstudentsApi', err);
    return [] as StudentsInterface[];
  }
};
