export interface Photo {
  photoId: number;
  userId: number;
  imageUrl: string;
  publicId: string;
  description: string;
  publishDate: Date;
  updateDate: Date;
  deleteConfirm:boolean;
}
