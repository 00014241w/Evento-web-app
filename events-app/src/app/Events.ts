export interface Events {
  id: number;
  title: string;
  description: string;
  location: string;
  time: Date;
  organizer: string;
  categoryName: {
    categoryId: number;
    categoryName: string;
  };
}
