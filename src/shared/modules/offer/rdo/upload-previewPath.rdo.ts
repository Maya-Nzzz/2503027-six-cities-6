import { Expose } from 'class-transformer';

export class UploadPreviewPathRdo {
  @Expose()
  public previewPath: string;

  @Expose()
  public images: string[];
}
